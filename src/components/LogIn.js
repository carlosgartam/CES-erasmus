import React, { useCallback, useContext } from "react";
import { Navigate, Link} from "react-router-dom";
import {app} from "../firebase";
import { AuthContext } from "./Auth.js";

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Navigate to="/" />;
  }

  return (
    
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card bg-dark text-white" >
                <div className="card-body p-5 text-center">

                  <form className="mb-md-5 mt-md-4 pb-5" onSubmit={handleLogin}>
                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                    <p className="text-white-50 mb-5">Please enter your login and password!</p>

                    <div className="form-outline form-white mb-4">
                      <input  name="email" type="email" placeholder="Email" className="form-control form-control-lg" />
                    </div>

                    <div className="form-outline form-white mb-4">
                      <input name="password" type="password" placeholder="Password" className="form-control form-control-lg" />
                    </div>

                    <button className="btn btn-outline-light btn-lg px-5" type="submit">Login</button>
                  </form>

                  <div>
                  Don't have an account?<Link className="text-white-50 fw-bold" to="/singup">Sing Up</Link>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    
  );
};

export default Login;