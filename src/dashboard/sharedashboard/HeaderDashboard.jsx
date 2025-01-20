import { Avatar } from "@material-tailwind/react";
import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import useAuth from "../../hooks/useAuth";

const HeaderDashboard = ({ title }) => {
  const { user } = useAuth();
  const firstCharacter = user?.displayName?.split("")[0];
  const colorCode = `#${Math.floor(Math.random() * 1000000)}`;

  return (
    <div className="bg-camp-info p-4 ">
      <div className="flex justify-end lg:justify-between items-center w-full">
        <div className="hidden lg:block gap-1">
          <div className="flex items-center">
            <h3 className="text-lg font-semibold text-gray-700">Dashboard</h3>
            <FaAngleRight className="text-gray-700 " />
            <p className="text-gray-700 text-sm">{title}</p>
          </div>
        </div>
        <div className="flex items-center gap-4 mr-3">
          <h3 className="text-gray-700 font-semibold">{user?.displayName}</h3>
          {user?.photoURL ? (
            <>
              <Avatar
                className="border-2 border-camp-primary object-cover"
                src={user?.photoURL}
                alt="avatar"
              />
            </>
          ) : (
            <>
              <div
                className={`w-12 h-12 rounded-full border bg-camp-primary border-camp-info flex justify-center items-center`}
              >
                <span className="uppercase font-bold text-xl text-camp-background">
                  {firstCharacter}
                </span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeaderDashboard;
