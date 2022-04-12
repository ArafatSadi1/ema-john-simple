import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./LogIn.css";

const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state.from.pathname || "/";

    if(user){
        navigate(from, {replace: true});
    }

    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }

    const handleLogInUser = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }
  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">LogIn</h2>
        <form onSubmit={handleLogInUser}>
          <div>
            <label htmlFor="email">Email</label>
            <input onBlur={handleEmailBlur} type="email" name="email" id="email" required />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input onBlur={handlePasswordBlur} type="password" name="password" id="password" required />
          </div>
          <p style={{color: 'red'}}>{error?.message}</p>
          {
              loading && <p>Loading...</p>
          }
          <input className="form-submit" type="submit" value="LogIn" />
        </form>
        <p className="form-text">
          New To Ema-John?{" "}
          <Link className="form-link" to="/signup">
            Create an account
          </Link>{" "}
        </p>
        <div className="or-container">
          <div className="or-border"></div>
          <div className="or-text">or</div>
          <div className="or-border"></div>
        </div>
        <button className="google-btn">
          <img
            className="logo"
            src="https://www.transparentpng.com/thumb/google-logo/colorful-google-logo-transparent-clipart-download-u3DWLj.png"
            alt="Colorful Google Logo transparent clipart download @transparentpng.com"
          />
          <p>Continue With Google</p>
        </button>
      </div>
    </div>
  );
};

export default LogIn;
