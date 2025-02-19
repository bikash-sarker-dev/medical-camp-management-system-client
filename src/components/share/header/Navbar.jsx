import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  Collapse,
  IconButton,
  Navbar,
  Typography,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import ProfileAvatar from "./ProfileAvatar";

function NavList() {
  const { user } = useAuth();
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link
          to="/"
          className="flex items-center text-camp-background text-base transition-colors"
        >
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link
          to="/availableCamp"
          className="flex items-center text-camp-background text-base transition-colors"
        >
          Available Camps
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link
          to="/"
          className="flex items-center text-camp-background text-base transition-colors"
        >
          Gallery
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link
          to="/"
          className="flex items-center text-camp-background text-base transition-colors"
        >
          Blogs
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link
          to="/"
          className="flex items-center text-camp-background text-base transition-colors"
        >
          Support
        </Link>
      </Typography>

      {user && user?.email ? (
        <>
          <ProfileAvatar />
        </>
      ) : (
        <>
          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-medium"
          >
            <Link
              to="/login"
              className="flex items-center text-camp-background text-base transition-colors bg-camp-accent px-5 rounded-md py-2 "
            >
              Login
            </Link>
          </Typography>
          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-medium"
          >
            <Link
              to="/register"
              className="flex items-center text-camp-background text-base transition-colors bg-camp-accent px-5 rounded-md py-2"
            >
              Register
            </Link>
          </Typography>
        </>
      )}
    </ul>
  );
}

export default function NavbarSimple() {
  const [openNav, setOpenNav] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 5);
    });
  });

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div
      className={` bg-camp-primary ${
        scroll ? "sticky w-full bg-camp-primary " : ""
      }`}
    >
      <Navbar className="mx-auto max-w-screen-xl bg-camp-primary border-none bg-opacity-100 shadow-none px-6 py-3 ">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            to="/"
            as="a"
            variant="h6"
            className="mr-4 cursor-pointer py-1.5"
          >
            <img
              className="h-14"
              src="https://img.icons8.com/?size=100&id=R8C2mZCro3DR&format=png&color=000000"
              alt=""
            />
          </Typography>
          <div className="hidden lg:block">
            <NavList />
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <NavList />
        </Collapse>
      </Navbar>
    </div>
  );
}
