import React from "react";

interface Props {
  message: string;
  handleOnClick: React.MouseEventHandler<HTMLButtonElement>;
}

const ErrorToast: React.FC<Props> = ({ message, handleOnClick }) => {
  return (
    <div className="flex items-center justify-center w-full h-full mt-4">
      <div className="flex items-center w-full max-w-xs p-4 mb-4 text-white bg-red-500 rounded-lg shadow">
        <div className="text-sm font-normal">{message}</div>
        <button
          type="button"
          className="ml-auto p-2 text-white rounded focus:outline-none hover:bg-red-600"
          onClick={handleOnClick}
        >
          <svg
            className="w-4 h-4 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L12 10.586l6.293-6.293a1 1 0 111.414 1.414L13.414 12l6.293 6.293a1 1 0 01-1.414 1.414L12 13.414l-6.293 6.293a1 1 0 01-1.414-1.414L10.586 12 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ErrorToast;
