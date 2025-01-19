import React from "react";
import RegisterForm from "../components/register/RegisterForm";
import TabTitle from "../components/share/htmlHead/TabTitle";
import PageHead from "../components/share/pageHead/PageHead";

const RegisterPage = () => {
  return (
    <div>
      <TabTitle title={` Medical | Register`} />
      <PageHead title={"Register"} pathName={"register"} />
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
