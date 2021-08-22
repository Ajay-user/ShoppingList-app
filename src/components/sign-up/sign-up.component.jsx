import React from "react";

import "./sign-up.style.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { auth, createUserProfileDocument } from "../../firebase/firebase-utils";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;

    // in-case of password mismatch return
    if (password !== confirmPassword) {
      alert("Password does not match");
      return;
    }

    // create user with email and password
    try {
      // Creates a new user account associated with the specified email address and password.

      // On successful creation of the user account, this user will also be signed in to your application.

      // User account creation can fail if the account already exists or the password is invalid.
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      // auth obj we get is stored in the user key so we destructure it
      // we use auth obj and displayName to create a new user and store in firestore
      // we are passing displayName as an Obj because we are using spread operator
      await createUserProfileDocument(user, { displayName });

      // reset the form
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="sign-up__title">I do not have an account</h2>
        <span className="sign-up__subtitle">
          Sign up with your email and password
        </span>

        <form onSubmit={this.handleSubmit} className="sign-up__form">
          <FormInput
            name="displayName"
            type="text"
            id="displayname-signup"
            placeholder="Display Name"
            value={displayName}
            handleChange={this.handleChange}
            label="Display Name"
          />
          <FormInput
            name="email"
            type="email"
            id="email-signup"
            placeholder="Email"
            value={email}
            handleChange={this.handleChange}
            label="Email"
          />
          <FormInput
            name="password"
            type="password"
            id="password-signup"
            placeholder="Password"
            value={password}
            handleChange={this.handleChange}
            label="Password"
          />
          <FormInput
            name="confirmPassword"
            type="password"
            id="confirm-password-signup"
            placeholder="Confirm Password"
            value={confirmPassword}
            handleChange={this.handleChange}
            label="Confirm Password"
          />
          <div className="btn-groups">
            <CustomButton
              type="button"
              classname="btn btn--black"
              label="Sign-up"
              handleClick={this.handleSubmit}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Signup;
