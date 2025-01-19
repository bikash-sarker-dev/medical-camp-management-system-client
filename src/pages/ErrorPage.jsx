import Lottie from "lottie-react";
import React from "react";
import { Link } from "react-router-dom";
import errorLottieFile from "../assets/lottifile/dedical-error.json";

const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="max-w-sm">
        <Lottie animationData={errorLottieFile} loop={true} />;
        <h1 className="text-center text-5xl">Not Fount Page</h1>
        <div className="text-center mt-6">
          <Link
            className="bg-camp-accent px-6 py-3  text-camp-background rounded-md"
            to="/"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
