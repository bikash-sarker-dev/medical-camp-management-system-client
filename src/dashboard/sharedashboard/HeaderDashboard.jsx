import { Avatar } from "@material-tailwind/react";
import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import useAuth from "../../hooks/useAuth";

const HeaderDashboard = ({ title }) => {
  const { user } = useAuth();

  return (
    <div className="bg-camp-info p-4 ">
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center gap-1">
          <h3 className="text-lg font-semibold text-gray-700">Dashboard</h3>
          <FaAngleRight className="text-gray-700 " />
          <p className="text-gray-700 text-sm">{title}</p>
        </div>
        <div className="flex items-center gap-4 mr-3">
          <h3 className="text-gray-700 font-semibold">{user?.displayName}</h3>
          <Avatar
            src="https://docs.material-tailwind.com/img/face-2.jpg"
            alt="avatar"
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderDashboard;
