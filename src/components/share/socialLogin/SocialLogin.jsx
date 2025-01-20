import { CpuChipIcon } from "@heroicons/react/24/solid";
import { Button } from "@material-tailwind/react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { auth } from "./../../../firebase/firebase.config";

const SocialLogin = () => {
  const provider = new GoogleAuthProvider();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        const user = res.user;
        const userInfo = {
          name: user?.displayName,
          email: user?.email,
        };
        const profileInfo = {
          firstName: user?.displayName,
          lastName: "",
          email: user?.email,
          phone: "",
          photo: "",
          eduction: "",
          address: "",
          country: "",
          state: "",
          website: "",
          bio: "",
        };
        axiosPublic.post("/profile", profileInfo);
        axiosPublic.post("/users", userInfo).then((res) => {
          toast.success("successfully register . Please login ");
          navigate("/");
        });
      })
      .catch((error) => {
        const errorMessage = error.message;

        console.log(errorMessage);
      });
  };
  return (
    <div className="sm:flex gap-4 mt-5">
      <Button
        variant="outlined"
        size="sm"
        className="flex h-12 border-blue-gray-200 items-center justify-center gap-2"
        fullWidth
        onClick={handleGoogleLogin}
      >
        <img
          src={`https://www.material-tailwind.com/logos/logo-google.png`}
          alt="google"
          className="h-6 w-6"
        />{" "}
        sign in with google
      </Button>
      <Button
        variant="outlined"
        size="sm"
        className="flex h-12 border-blue-gray-200 items-center justify-center gap-2"
        fullWidth
      >
        <CpuChipIcon className="h-6 w-6" />
        Wallet Authentication
      </Button>
    </div>
  );
};

export default SocialLogin;
