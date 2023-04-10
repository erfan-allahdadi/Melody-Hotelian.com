import React from "react";

import Container from "../common/Container";
import { InputField } from "../common/InputFields";
import Typography from "../common/Typography";
import Button from "../common/Button";


import { useSelector } from "react-redux";
import { Audio } from "react-loader-spinner";


const SignInForm = ({ signInData, setSignInData, signInHandler, showSignUp, setShowSignUp }) => {

    const changeHandler = (e) => {
        const { name, value } = e.target
        setSignInData({
            ...signInData,
            [name]: value
        })
      }

  const loginError = useSelector(state => state?.auth?.loginError);
  const status = useSelector(state => state?.auth?.loginStatus);

  return (
    <>
    <Typography color='#00817A' weight='bold'>Login Form</Typography>
      <Container width="70%" margin="5rem auto">
        <Container gap="1rem">
          <label htmlFor="">UserName</label>
          <InputField
            value={signInData.username}
            name="username"
            onChange={changeHandler}
            type="text"
            padding="0.3rem"
          />
        </Container>
        <Container gap="1rem">
          <label htmlFor="">Password</label>
          <InputField
            value={signInData.password}
            name="password"
            onChange={changeHandler}
            type="password"
            padding="0.3rem"
          />
        </Container>
      </Container>
      {
        status === 'pending' ? <Audio width={100} height={100} color="#00817A"/>: <Button
        width="10%"
        margin="2rem auto"
        color="#fff"
        borderRadius="1rem"
        padding="0.5rem"
        onClick={signInHandler}
      >
        Login
      </Button>
      }
      
      <p>New to Melody? <span style={{cursor: 'pointer' , color:'#0969DA'}} onClick={() => setShowSignUp(true)}>SignUp</span></p>

{
  loginError?.status !== 200 && <Typography color='red' weight='bold'>{loginError?.data?.result[0]?.message}</Typography>
}
    </>
  );
};

export default SignInForm;
