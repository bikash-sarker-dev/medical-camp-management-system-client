import {
  Button,
  Card,
  Checkbox,
  Input,
  Typography,
} from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";
import registerImg from "../../assets/images/register-medical.png";

const RegisterForm = () => {
  return (
    <div className="my-24">
      <div className="container">
        <div className="md:flex gap-10 items-center">
          <div className="flex-1">
            <img src={registerImg} alt="" />
          </div>
          <div className="flex-1">
            <Card color="transparent" shadow={false}>
              <Typography color="gray" className="mt-1 font-normal">
                Nice to meet you! Enter your details to register.
              </Typography>
              <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                <div className="mb-1 flex flex-col gap-6">
                  <Typography variant="h6" color="blue-gray" className="-mb-3">
                    Your Name
                  </Typography>
                  <Input
                    size="lg"
                    placeholder="name@mail.com"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                  <Typography variant="h6" color="blue-gray" className="-mb-3">
                    Your Email
                  </Typography>
                  <Input
                    size="lg"
                    placeholder="name@mail.com"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                  <Typography variant="h6" color="blue-gray" className="-mb-3">
                    Password
                  </Typography>
                  <Input
                    type="password"
                    size="lg"
                    placeholder="********"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
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
                        className="font-medium transition-colors hover:text-gray-900"
                      >
                        &nbsp;Terms and Conditions
                      </a>
                    </Typography>
                  }
                  containerProps={{ className: "-ml-2.5" }}
                />
                <Button className="mt-6 bg-camp-accent" fullWidth>
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
