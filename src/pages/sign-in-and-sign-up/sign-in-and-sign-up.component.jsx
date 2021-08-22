import React from "react";

import "./sign-in-and-sign-up.scss";
import Signin from "../../components/sign-in/signin.component";
import Signup from "../../components/sign-up/sign-up.component";

const SignInAndSignUp = () => (
  <div className="sign-in-and-sign-up">
    <Signin />
    <Signup />
  </div>
);

export default SignInAndSignUp;
