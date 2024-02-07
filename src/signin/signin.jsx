import React, { useState } from "react";
import Styles from './signin.module.css'
import InputForm from "../Form/inputform";
import { auth } from '../firebase/firebase';
import CustomButton from "../custombutton/custombutton";

const SignIn = () => {
  const [userDetails, setUserDetails] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = userDetails;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setUserDetails({
        email: '',
        password: ''
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={Styles.form}>
      <h1>Sign In</h1>
      <p>With Email and Password</p>

      <form onSubmit={handleSubmit}>
        <InputForm
          type='email'
          name='email'
          value={userDetails.email}
          onChange={handleChange}
          placeholder="Enter your email"
          label='E-mail'
          required
        />
        <InputForm
          type='password'
          name='password'
          value={userDetails.password}
          onChange={handleChange}
          placeholder="Enter your password"
          label='Password'
          required
        />

        <CustomButton type="submit">
          Sign In
        </CustomButton>
      </form>
    </div>
  );
};

export default SignIn;
