import Lottie from "lottie-react";
import React from "react";
import LoadingLottifile from "../assets/lottifile/loading-medical.json";

const LoadingPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Lottie
        className="max-w-lg"
        animationData={LoadingLottifile}
        loop={true}
      />
    </div>
  );
};

export default LoadingPage;
