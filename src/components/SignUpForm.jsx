import React, { useEffect } from "react";

// common components
import Container from "../common/Container";
import { InputField } from "../common/InputFields";
import Button from "../common/Button";
import Typography from "../common/Typography";
import { useSelector } from "react-redux";
import { Audio } from "react-loader-spinner";


const SignUpForm = ({ signUpData, setSignUpData, signUpHandler }) => {



  const changeHandler = (e) => {
    const { name, value } = e.target
    setSignUpData({
        ...signUpData,
        [name]: value
    })
  }

  const signUpError = useSelector(state => state?.auth?.singUpError);
  const status = useSelector(state => state?.auth?.signUpStatus);

  return (
    <>
      <Typography color='#00817A' weight='bold'>
        SignUp Form
      </Typography>
      <Container width="70%" margin="5rem auto">
        <Container gap="1rem">
          <label htmlFor="">FirstName</label>
          <InputField value={signUpData.first_name} name="first_name" onChange={changeHandler} type="text" padding="0.3rem" />
        </Container>
        <Container gap="1rem">
          <label htmlFor="">LastName</label>
          <InputField value={signUpData.last_name} name="last_name" onChange={changeHandler} type="text" padding="0.3rem" />
        </Container>
      </Container>

      <Container width="70%">
        <Container gap="1rem">
          <label htmlFor="">UserName</label>
          <InputField value={signUpData.username} name="username" onChange={changeHandler} type="text" padding="0.3rem" />
        </Container>
        <Container gap="1rem">
          <label htmlFor="">Password</label>
          <InputField value={signUpData.password} name="password" onChange={changeHandler} type="password" padding="0.3rem" />
        </Container>
      </Container>
      {
        status === 'pending' ? <Audio width={100} height={100} color="#00817A"/> : <Button
        width="10%"
        margin="5rem 0 2rem 0"
        color="#fff"
        borderRadius="1rem"
        padding="0.5rem"
        onClick={signUpHandler}
      >
        SignUp
      </Button>
      }
      
      
      {
        signUpError?.status !== 200 && <Typography color='red' weight='bold'>{signUpError?.data?.result[0]?.message}</Typography>
}    </>
  );
};

export default SignUpForm;
