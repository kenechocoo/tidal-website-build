import type { ErrorInfo, ReactNode } from "react";
import React from "react";

type Props = {
  children: ReactNode;
};

type State = {
  hasError: boolean;
  error: Error | null;
};

class AiroErrorBoundaryImpl extends React.Component<Props, State> {
  state: State = {
    hasError: false,
    error: null,
  };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("[AiroErrorBoundary] Caught error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: "2rem", fontFamily: "system-ui" }}>
          <h1 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>
            Something went wrong.
          </h1>
          <p style={{ color: "#555", marginBottom: "1rem" }}>
            Check the console for details. This is a lightweight fallback error
            boundary used only in development.
          </p>
          {this.state.error && (
            <pre
              style={{
                background: "#f5f5f5",
                padding: "1rem",
                borderRadius: "0.5rem",
                overflowX: "auto",
                fontSize: "0.85rem",
              }}
            >
              {this.state.error.message}
            </pre>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}

export default AiroErrorBoundaryImpl;

