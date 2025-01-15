import React from "react";
import RegisterForm from "../components/register/RegisterForm";
import PageHead from "../components/share/pageHead/PageHead";

const RegisterPage = () => {
  return (
    <div>
      <PageHead title={"Register"} pathName={"register"} />
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
