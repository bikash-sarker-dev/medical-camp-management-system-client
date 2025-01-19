import React from "react";
import LoginForm from "../components/Login/LoginForm";
import PageHead from "../components/share/pageHead/PageHead";
import TabTitle from "./../components/share/htmlHead/TabTitle";

const LoginPage = () => {
  return (
    <div>
      <TabTitle title={` Medical | Login`} />
      <PageHead title={"Login"} pathName={"Login"} />
      <LoginForm />
    </div>
  );
};

export default LoginPage;
