import React from 'react';

function ErrorElement() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm border border-red-200">
        <div className="text-red-500 mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-16 h-16 mx-auto"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v2m0 4h.01M10 21h4m2-3a9 9 0 100-18 9 9 0 000 18z"
            />
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-gray-800">Something Went Wrong</h1>
        <p className="text-gray-600 mt-2">
          We’re sorry for the inconvenience. Please try again later or contact
          support if the issue persists.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="mt-6 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          Refresh Page
        </button>
      </div>
    </div>
  );
}

export default ErrorElement;
