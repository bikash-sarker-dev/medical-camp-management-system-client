import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
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
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
} from "@material-tailwind/react";
import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import TabTitle from "../components/share/htmlHead/TabTitle";
import useOrganizer from "../hooks/useOrganizer";
import LoadingPage from "../pages/LoadingPage";
import useAuth from "./../hooks/useAuth";

const DashboardLayout = () => {
  const [isOrganize, isLoading] = useOrganizer();
  console.log(isOrganize);
  const { accountLogOut } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

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

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <div>
      <TabTitle title={` Medical | Dashboard`} />
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
      <div className="lg:flex lg:gap-5 ">
        <div className="">
          <div className="hidden lg:block">
            <Card className="h-[calc(100vh)] w-full max-w-[20rem] p-4 shadow-xl rounded-none bg-camp-primary shadow-blue-gray-900/5">
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
                    <Link to="/dashboard/home">
                      <ListItem>
                        <ListItemPrefix>
                          <PresentationChartBarIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Dashboard home
                      </ListItem>
                    </Link>
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
              <hr className="mt-6 border border-camp-secondary" />
              <Link to="/">
                <ListItem className="text-camp-background mt-3">
                  <ListItemPrefix>
                    <PresentationChartBarIcon className="h-5 w-5" />
                  </ListItemPrefix>
                  Home Page
                </ListItem>
              </Link>
            </Card>
          </div>
          {/* responsive  */}
          <div className="lg:hidden absolute left-5 top-5">
            <IconButton variant="text" size="lg" onClick={openDrawer}>
              {isDrawerOpen ? (
                <XMarkIcon className="h-8 w-8 stroke-2" />
              ) : (
                <Bars3Icon className="h-8 w-8 stroke-2" />
              )}
            </IconButton>
          </div>
          <Drawer open={isDrawerOpen} onClose={closeDrawer}>
            <Card className="h-[calc(100vh)] w-full max-w-[20rem] p-4 shadow-xl rounded-none bg-camp-primary shadow-blue-gray-900/5">
              <div className="text-right">
                <button className="border " onClick={closeDrawer}>
                  <XMarkIcon className="h-8 w-8 stroke-2 text-red-500" />
                </button>
              </div>
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
                    <Link to="/dashboard/home">
                      <ListItem>
                        <ListItemPrefix>
                          <PresentationChartBarIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Dashboard home
                      </ListItem>
                    </Link>
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
              <hr className="mt-6 border border-camp-secondary" />
              <Link to="/">
                <ListItem className="text-camp-background mt-3">
                  <ListItemPrefix>
                    <PresentationChartBarIcon className="h-5 w-5" />
                  </ListItemPrefix>
                  Home Page
                </ListItem>
              </Link>
            </Card>
          </Drawer>
        </div>
        <div className="w-full ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
