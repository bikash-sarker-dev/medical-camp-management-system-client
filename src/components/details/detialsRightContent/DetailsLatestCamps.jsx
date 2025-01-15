import React from "react";
import { IoTimeOutline } from "react-icons/io5";

const DetailsLatestCamps = () => {
  return (
    <div className="border border-camp-info rounded-md my-8">
      <h3 className="text-xl font-semibold bg-camp-default  p-5">
        Latest Camps
      </h3>
      <div className="flex gap-3 m-5">
        <div className="w-28">
          <img
            src="https://images.pexels.com/photos/28271638/pexels-photo-28271638/free-photo-of-a-desert-landscape-with-mountains-in-the-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="not support images"
          />
        </div>
        <div className="">
          <h4 className="font-semibold text-base ">titletitletitle</h4>
          <p className="flex items-center gap-2 text-gray-600 mt-1 text-sm">
            <IoTimeOutline className="text-xl" /> 01 jul 2025
          </p>
        </div>
      </div>
      <div className="flex gap-3 m-5">
        <div className="w-28">
          <img
            src="https://images.pexels.com/photos/28271638/pexels-photo-28271638/free-photo-of-a-desert-landscape-with-mountains-in-the-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="not support images"
          />
        </div>
        <div className="">
          <h4 className="font-semibold text-base ">titletitletitle</h4>
          <p className="flex items-center gap-2 text-gray-600 mt-1 text-sm">
            <IoTimeOutline className="text-xl" /> 01 jul 2025
          </p>
        </div>
      </div>
      <div className="flex gap-3 m-5">
        <div className="w-28">
          <img
            src="https://images.pexels.com/photos/28271638/pexels-photo-28271638/free-photo-of-a-desert-landscape-with-mountains-in-the-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="not support images"
          />
        </div>
        <div className="">
          <h4 className="font-semibold text-base ">titletitletitle</h4>
          <p className="flex items-center gap-2 text-gray-600 mt-1 text-sm">
            <IoTimeOutline className="text-xl" /> 01 jul 2025
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailsLatestCamps;
