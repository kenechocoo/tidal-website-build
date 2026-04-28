// OAuth callback — exchanges GitHub code for an access token,
// then posts it back to the CMS via window.opener.postMessage.
// Endpoint: /.netlify/functions/callback
exports.handler = async (event) => {
  const clientId = process.env.GITHUB_CLIENT_ID;
  const clientSecret = process.env.GITHUB_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    return {
      statusCode: 500,
      body: 'Missing GITHUB_CLIENT_ID or GITHUB_CLIENT_SECRET env vars',
    };
  }

  const code = event.queryStringParameters && event.queryStringParameters.code;
  if (!code) {
    return { statusCode: 400, body: 'Missing OAuth code' };
  }

  let tokenData;
  try {
    const response = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        code,
      }),
    });
    tokenData = await response.json();
  } catch (err) {
    return { statusCode: 500, body: `OAuth token exchange failed: ${err.message}` };
  }

  const success = !!tokenData.access_token;
  const payload = success
    ? { token: tokenData.access_token, provider: 'github' }
    : { error: tokenData.error || 'Unknown OAuth error', provider: 'github' };

  const messageType = success ? 'success' : 'error';
  const message = `authorization:github:${messageType}:${JSON.stringify(payload)}`;

  // Send the token back to the CMS opener window
  const html = `<!DOCTYPE html>
<html>
  <head><meta charset="utf-8" /><title>Authorizing...</title></head>
  <body>
    <p>Authorizing... You can close this window.</p>
    <script>
      (function() {
        function receiveMessage(e) {
          window.opener.postMessage(${JSON.stringify(message)}, e.origin);
          window.removeEventListener('message', receiveMessage, false);
        }
        window.addEventListener('message', receiveMessage, false);
        window.opener.postMessage('authorizing:github', '*');
      })();
    </script>
  </body>
</html>`;

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'text/html' },
    body: html,
  };
};
