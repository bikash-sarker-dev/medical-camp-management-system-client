import {
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import {
  Card,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
} from "@material-tailwind/react";
import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import useOrganizer from "../hooks/useOrganizer";
import LoadingPage from "../pages/LoadingPage";
import useAuth from "./../hooks/useAuth";

const DashboardLayout = () => {
  const [isOrganize, isLoading] = useOrganizer();
  const { accountLogOut } = useAuth();
  const navigate = useNavigate();

  if (isLoading) {
    return <LoadingPage />;
  }

  const handleLogOutFromDashboard = () => {
    accountLogOut()
      .then(() => {
        toast.success("You are Dashboard from logOut");
        navigate("/login");
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  console.log(isOrganize);
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="flex gap-5">
        <div className="">
          <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl bg-camp-primary shadow-blue-gray-900/5">
            <div className="mb-2 p-4 flex items-center">
              <img
                className="h-14"
                src="https://img.icons8.com/?size=100&id=R8C2mZCro3DR&format=png&color=000000"
                alt=""
              />
              <Typography variant="h5" className="text-camp-background">
                {isOrganize ? "Organizer" : "Participant"}
              </Typography>
            </div>
            {isOrganize ? (
              <>
                <List className="text-camp-background text-[15px]">
                  <ListItem>
                    <ListItemPrefix>
                      <PresentationChartBarIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Dashboard
                  </ListItem>
                  <Link to="/dashboard/add-camp">
                    <ListItem>
                      <ListItemPrefix>
                        <ShoppingBagIcon className="h-5 w-5" />
                      </ListItemPrefix>
                      Add A Camp
                    </ListItem>
                  </Link>
                  <Link to="/dashboard/all-participant">
                    <ListItem>
                      <ListItemPrefix>
                        <ShoppingBagIcon className="h-5 w-5" />
                      </ListItemPrefix>
                      All Participant
                    </ListItem>
                  </Link>
                  <Link to="/dashboard/manage-camps">
                    <ListItem>
                      <ListItemPrefix>
                        <ShoppingBagIcon className="h-5 w-5" />
                      </ListItemPrefix>
                      Manage Camps
                    </ListItem>
                  </Link>

                  <Link to="/dashboard/manage-profile">
                    <ListItem>
                      <ListItemPrefix>
                        <UserCircleIcon className="h-5 w-5" />
                      </ListItemPrefix>
                      Organizer Profile
                    </ListItem>
                  </Link>
                  <Link to="/dashboard/manage-registered-camps">
                    <ListItem>
                      <ListItemPrefix>
                        <Cog6ToothIcon className="h-5 w-5" />
                      </ListItemPrefix>
                      Manage Registered Camps
                    </ListItem>
                  </Link>
                  <ListItem onClick={handleLogOutFromDashboard}>
                    <ListItemPrefix>
                      <PowerIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Log Out
                  </ListItem>
                </List>
              </>
            ) : (
              <>
                <List className="text-camp-background text-[15px]">
                  <Link to="/dashboard/analytics">
                    <ListItem>
                      <ListItemPrefix>
                        <PresentationChartBarIcon className="h-5 w-5" />
                      </ListItemPrefix>
                      Analytics
                    </ListItem>
                  </Link>
                  <Link to="/dashboard/manage-profile">
                    <ListItem>
                      <ListItemPrefix>
                        <UserCircleIcon className="h-5 w-5" />
                      </ListItemPrefix>
                      Participant Profile
                    </ListItem>
                  </Link>
                  <Link to="/dashboard/registered-camps">
                    <ListItem>
                      <ListItemPrefix>
                        <ShoppingBagIcon className="h-5 w-5" />
                      </ListItemPrefix>
                      Registered Camps
                    </ListItem>
                  </Link>
                  <Link to="/dashboard/payment-history">
                    <ListItem>
                      <ListItemPrefix>
                        <InboxIcon className="h-5 w-5" />
                      </ListItemPrefix>
                      Payment History
                    </ListItem>
                  </Link>
                  <ListItem onClick={handleLogOutFromDashboard}>
                    <ListItemPrefix>
                      <PowerIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Log Out
                  </ListItem>
                </List>
              </>
            )}
          </Card>
        </div>
        <div className="w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
