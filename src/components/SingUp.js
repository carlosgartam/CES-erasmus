import React, { useCallback, useContext } from "react";
import { Navigate} from "react-router-dom";
import {app} from "../firebase";
import { AuthContext } from "./Auth.js";

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      
    } catch (error) {
      alert(error);
    }
  }, [history]);

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <h1>Sign up</h1>
      <form onSubmit={handleSignUp}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;