import React from "react";
import LoginForm from "../components/Login/LoginForm";
import PageHead from "../components/share/pageHead/PageHead";

const LoginPage = () => {
  return (
    <div>
      <PageHead title={"Login"} pathName={"Login"} />
      <LoginForm />
    </div>
  );
};

export default LoginPage;
