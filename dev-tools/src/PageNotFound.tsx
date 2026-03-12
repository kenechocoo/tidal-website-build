import React from "react";
import { Link } from "react-router-dom";

const PageNotFound: React.FC = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <p className="text-sm font-medium text-sky-600 mb-2">404</p>
      <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-3">
        Page not found
      </h1>
      <p className="text-gray-600 max-w-md mb-6">
        The page you are looking for doesn&apos;t exist or has been moved.
      </p>
      <div className="flex flex-wrap gap-3 justify-center">
        <Link
          to="/"
          className="inline-flex items-center justify-center rounded-md bg-sky-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-sky-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
        >
          Go back home
        </Link>
      </div>
    </main>
  );
};

export default PageNotFound;

