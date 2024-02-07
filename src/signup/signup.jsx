import React, { useState } from "react";
import Styles from './signup.module.css';
import InputForm from "../Form/inputform";
import CustomButton from "../custombutton/custombutton";
import { auth, createUserProfileDocument } from '../firebase/firebase';

const SignUp = () => {
  const [userInfo, setUserInfo] = useState({
    displayname: '',
    email: '',
    password: '',
    confirmpassword: ''
  });

  const handleSubmit = async event => {
    event.preventDefault();
    const { displayname, email, password, confirmpassword } = userInfo;
    if (password !== confirmpassword) {
      alert("Password Mismatched");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      await createUserProfileDocument(user, { displayname });
      setUserInfo({
        displayname: '',
        email: '',
        password: '',
        confirmpassword: ''
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setUserInfo(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className={Styles.form}>
      <h1>Sign Up For Free</h1>
      <p>Create your account with Email and Password</p>
      <form onSubmit={handleSubmit}>
        <InputForm
          type='text'
          name='displayname'
          value={userInfo.displayname}
          onChange={handleChange}
          placeholder="Enter your name"
          label='Display'
          required
        />

        <InputForm
          type='email'
          name='email'
          value={userInfo.email}
          onChange={handleChange}
          placeholder="Enter your email"
          label='E-mail'
          required
        />
        <InputForm
          type='password'
          name='password'
          value={userInfo.password}
          onChange={handleChange}
          placeholder="Enter your password"
          label='Password'
          required
        />
        <InputForm
          type='password'
          name='confirmpassword'
          value={userInfo.confirmpassword}
          onChange={handleChange}
          placeholder="Enter your confirm password"
          label='Confirm-Password'
          required
        />

        <CustomButton type='submit'>
          Sign Up
        </CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
