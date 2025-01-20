import {
  Button,
  Card,
  Checkbox,
  Input,
  Typography,
} from "@material-tailwind/react";
import { updateProfile } from "firebase/auth";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import registerImg from "../../assets/images/register-medical.png";
import { auth } from "../../firebase/firebase.config";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const RegisterForm = () => {
  const { newAccountCreate, setLoading } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const profileInfo = {
      firstName: data.firstName,
      lastName: data.firstName,
      email: data.email,
      phone: "",
      photo: "",
      eduction: "",
      address: "",
      country: "",
      state: "",
      website: "",
      bio: "",
    };

    const fullName = `${data.firstName} ${data.lastName} `;

    newAccountCreate(data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        const userName = { displayName: fullName };
        updateProfile(auth.currentUser, userName)
          .then(() => {
            const userInfo = {
              name: fullName,
              email: data.email,
            };
            axiosPublic.post("/profile", profileInfo);
            axiosPublic.post("/users", userInfo).then((res) => {
              toast.success("successfully register . Please login ");
              navigate("/");
            });
          })
          .catch((error) => {
            console.log(error);
          });

        reset();
      })
      .catch((error) => {
        const errorMessage = error.message;
        if (errorMessage.includes("auth/email-already-in-use")) {
          Swal.fire({
            icon: "error",
            title: "Something went wrong!",
            text: "Your password and email already in using . please New email provide .",
          });

          setLoading(false);
        }
        console.log(errorMessage);
      });
  };

  return (
    <div className="my-24">
      <div className="container">
        <div className="lg:flex gap-10 items-center ">
          <div className="lg:flex-1">
            <img className="max-w-xl" src={registerImg} alt="" />
          </div>
          <div className="lg:flex-1 bg-camp-default p-10 max-w-lg rounded-xl border border-camp-info shadow-lg">
            <Card color="transparent" shadow={false}>
              <Typography color="gray" className="mt-1 font-normal">
                Nice to meet you! Enter your details to register.
              </Typography>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="mt-8 mb-2 w-full "
              >
                <div className="mb-1 flex flex-col gap-6">
                  <div className="md:flex gap-4">
                    <div className="flex-1">
                      <Typography
                        variant="h6"
                        color="blue-gray"
                        className="mb-3"
                      >
                        First Name
                      </Typography>
                      <Input
                        {...register("firstName", { required: true })}
                        size="lg"
                        placeholder="first name"
                        className=" !border-t-blue-gray-200 focus:!border-camp-accent w-full"
                        labelProps={{
                          className: "before:content-none after:content-none",
                        }}
                      />
                      {errors.username && (
                        <p className="text-red-600 -mt-2">
                          This field is required
                        </p>
                      )}
                    </div>
                    <div className="flex-1">
                      <Typography
                        variant="h6"
                        color="blue-gray"
                        className="mb-3"
                      >
                        Last Name
                      </Typography>
                      <Input
                        {...register("lastName", { required: true })}
                        size="lg"
                        placeholder="Last name"
                        className=" !border-t-blue-gray-200 focus:!border-camp-accent w-full"
                        labelProps={{
                          className: "before:content-none after:content-none",
                        }}
                      />
                      {errors.username && (
                        <p className="text-red-600 -mt-2">
                          This field is required
                        </p>
                      )}
                    </div>
                  </div>

                  <Typography variant="h6" color="blue-gray" className="-mb-3">
                    Your Email
                  </Typography>
                  <Input
                    {...register("email", { required: true })}
                    size="lg"
                    placeholder="name@mail.com"
                    className=" !border-t-blue-gray-200 focus:!border-camp-accent"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                  {errors.email && (
                    <p className="text-red-600 -mt-2">This field is required</p>
                  )}
                  <Typography variant="h6" color="blue-gray" className="-mb-3">
                    Password
                  </Typography>
                  <Input
                    {...register("password", { required: true })}
                    type="password"
                    size="lg"
                    placeholder="********"
                    className=" !border-t-blue-gray-200 focus:!border-camp-accent"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                  {errors.password && (
                    <p className="text-red-600 -mt-2">This field is required</p>
                  )}
                </div>
                <Checkbox
                  label={
                    <Typography
                      variant="small"
                      color="gray"
                      className="flex items-center font-normal"
                    >
                      I agree the
                      <a
                        href="#"
                        className="font-medium transition-colors hover:text-caborder-camp-accent"
                      >
                        &nbsp;Terms and Conditions
                      </a>
                    </Typography>
                  }
                  containerProps={{ className: "-ml-2.5" }}
                />
                <Button type="submit" className="mt-6 bg-camp-accent" fullWidth>
                  Register
                </Button>
                <Typography
                  color="gray"
                  className="mt-4 text-center font-normal"
                >
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    href="#"
                    className="font-medium text-camp-primary  underline"
                  >
                    Sign In
                  </Link>
                </Typography>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
