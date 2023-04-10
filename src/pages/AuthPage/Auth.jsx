import React, { useEffect, useState } from "react";

// common components
import Container from "../../common/Container";
import SignUpForm from "../../components/SignUpForm";
import SignInForm from "../../components/SignInForm";

// router
import { useNavigate } from "react-router";

// redux
import { useDispatch, useSelector } from "react-redux";
import { Login, SignUp } from "../../redux/actions/authActions";

// toast
// import { useSnackbar } from "notistack";

const Auth = () => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showSignUp, setShowSignUp] = useState(false);

//   const { enqueueSnackbar } = useSnackbar();

  const status = useSelector((state) => state?.auth?.signUpStatus);
 
  const [signUpData, setSignUpData] = useState({
    first_name: "",
    last_name: "",
    username: "",
    password: "",
  });

  const [signInData, setSignInData] = useState({ username: "", password: "" });

  const signUpHandler = () => {
    dispatch(SignUp(signUpData));
  };


  const signInHandler = () => {
    dispatch(Login(signInData, navigate));
  };

  useEffect(() => {
    status === 'success' && setShowSignUp(false)
  },[status])

  return (
    <Container direction="column" height="100vh" justifyContent="flex-start">
      <h2>Please complete the information</h2>
      

{
  showSignUp ? <SignUpForm
          signUpData={signUpData}
          setSignUpData={setSignUpData}
          signUpHandler={signUpHandler}
        /> :<SignInForm
          signInData={signInData}
          setSignInData={setSignInData}
          signInHandler={signInHandler}
          showSignUp={showSignUp}
          setShowSignUp={setShowSignUp}
        />
}

{/* {
  status === 'success' && <SignInForm
          signInData={signInData}
          setSignInData={setSignInData}
          signInHandler={signInHandler}
          showSignUp={showSignUp}
          setShowSignUp={setShowSignUp}
        />
} */}

      
    </Container>
  );
};

export default Auth;
