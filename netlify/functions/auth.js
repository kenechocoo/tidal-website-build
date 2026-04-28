// OAuth handler — redirects user to GitHub's authorization page
// Endpoint: /.netlify/functions/auth
exports.handler = async (event) => {
  const clientId = process.env.GITHUB_CLIENT_ID;
  if (!clientId) {
    return {
      statusCode: 500,
      body: 'Missing GITHUB_CLIENT_ID env var',
    };
  }

  const host = event.headers.host;
  const protocol = event.headers['x-forwarded-proto'] || 'https';
  const redirectUri = `${protocol}://${host}/.netlify/functions/callback`;

  const scope = (event.queryStringParameters && event.queryStringParameters.scope) || 'repo,user';

  const params = new URLSearchParams({
    client_id: clientId,
    redirect_uri: redirectUri,
    scope,
  });

  return {
    statusCode: 302,
    headers: {
      Location: `https://github.com/login/oauth/authorize?${params.toString()}`,
    },
  };
};
