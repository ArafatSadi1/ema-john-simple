import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [error, setError] = useState('');
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate();

    if(user){
        navigate('/');
    }

    const handleEmailBlur = event =>{
        setEmail(event.target.value)
    }
   
    const handlePasswordBlur = event =>{
        setPassword(event.target.value)
    }
    
    const handleConfirmPassBlur = event =>{
        setConfirmPass(event.target.value)
    }

    const handleCreateUser = event => {
        event.preventDefault()
        if(password !== confirmPass){
            setError('Your Password do not match')
            return;
        }
        if(password.length < 6){
            setError('minimum password charechtar should be 6 or longer');
            return;
        }
        createUserWithEmailAndPassword(email, password);
    }

  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Sign Up</h2>
        <form onSubmit={handleCreateUser}>
          <div>
            <label htmlFor="email">Email</label>
            <input onBlur={handleEmailBlur} type="email" name="email" id="" required/>
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
          </div>
          <div>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input onBlur={handleConfirmPassBlur} type="password" name="confirmPassword" id="" required />
          </div>
          <p style={{color: 'red'}}>{error}</p>
          <input className="form-submit" type="submit" value="Sign Up" />
        </form>
        <p className="form-text">
          Already have an account?
          <Link className="form-link" to="/login">
            LogIn
          </Link>
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

export default SignUp;
