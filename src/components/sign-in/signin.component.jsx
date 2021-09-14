import React from "react";

import "./signin.style.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { auth, signInWithGoogle } from "../../firebase/firebase-utils";

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    // Asynchronously signs in using an email and password.
    // Fails with an error if the email address and password do not match.
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="sign-in">
        <h2 className="sign-in__title">I already have an account</h2>
        <span className="sign-in__subtitle">
          Sign in with your email and password
        </span>

        <form onSubmit={this.handleSubmit} className="sign-in__form">
          <FormInput
            name="email"
            type="email"
            id="email-signin"
            placeholder="Email"
            value={email}
            handleChange={this.handleChange}
            label="Email"
          />
          <FormInput
            name="password"
            type="password"
            id="password-signin"
            placeholder="Password"
            value={password}
            handleChange={this.handleChange}
            label="Password"
          />
          <div className="btn-groups">
            <CustomButton
              type="submit"
              classname="btn btn--black"
              label="Sign-in"
              handleClick={this.handleSubmit}
            />
            <CustomButton
              type="button"
              classname="btn btn--blue"
              label="Google sign-in"
              handleClick={signInWithGoogle}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Signin;
