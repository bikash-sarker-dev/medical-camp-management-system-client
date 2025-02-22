import { Button, Card, Input, Typography } from "@material-tailwind/react";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import loginImg from "../../assets/images/login-medical.png";
import useAuth from "../../hooks/useAuth";
import SocialLogin from "../share/socialLogin/SocialLogin";

const LoginForm = () => {
  const { accountLogin, setLoading } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    accountLogin(data.email, data.password)
      .then((result) => {
        const user = result.user;
        toast.success("Successfully login . welcome Home page.");
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        if (errorMessage.includes("auth/invalid-credential")) {
          Swal.fire({
            icon: "error",
            title: "Something went wrong!",
            text: "Your password and email not match. please try again.",
          });

          setLoading(false);
        }
      });
  };

  return (
    <div className="my-16">
      <div className="container">
        <div className="md:flex gap-10 items-center flex-row-reverse ">
          <div className="flex-1">
            <img src={loginImg} alt="not support image" />
          </div>
          <div className="flex-1 bg-camp-default p-10 max-w-lg rounded-xl border border-camp-info shadow-lg">
            <Card color="transparent" shadow={false}>
              <div className="text-center">
                <h3 className="text-3xl font-medium">Welcome !</h3>
                <Typography color="gray" className="mt-1 font-normal">
                  Nice to meet you! Enter your Login Now.
                </Typography>
              </div>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="mt-8 mb-2 w-full "
              >
                <div className="mb-1 flex flex-col gap-6">
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

                <Button type="submit" className="mt-6 bg-camp-accent" fullWidth>
                  login
                </Button>
                <SocialLogin />
                <Typography
                  color="gray"
                  className="mt-4 text-center font-normal"
                >
                  Your New User?{" "}
                  <Link
                    to="/register"
                    href="#"
                    className="font-medium text-camp-primary  underline"
                  >
                    Register
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

export default LoginForm;
