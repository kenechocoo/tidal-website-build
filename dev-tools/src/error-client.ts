// Minimal error client used only in development.
// This is a lightweight fallback that logs uncaught errors and promise rejections.

type AnyError = Error | string | unknown;

function normalizeError(error: AnyError): Error {
  if (error instanceof Error) return error;
  if (typeof error === "string") return new Error(error);
  try {
    return new Error(JSON.stringify(error));
  } catch {
    return new Error(String(error));
  }
}

function logErrorToConsole(prefix: string, error: AnyError) {
  const normalized = normalizeError(error);
  // Keep this simple – just log in a consistent format
  // so it doesn't interfere with normal dev tooling.
  console.error(`[dev-tools:error-client] ${prefix}:`, normalized);
}

// Browser-only defensive check
if (typeof window !== "undefined") {
  window.addEventListener("error", (event) => {
    logErrorToConsole("Uncaught error", event.error ?? event.message);
  });

  window.addEventListener("unhandledrejection", (event) => {
    logErrorToConsole("Unhandled promise rejection", event.reason);
  });
}

export {};

