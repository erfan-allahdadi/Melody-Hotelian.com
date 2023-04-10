import React, { useEffect } from "react";

// common components
import Button from "../../common/Button";
import Container from "../../common/Container";

// router
import { useNavigate } from "react-router";

const HomePage = () => {

  const isLogin = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData'))?.access_token : null

  const navigate = useNavigate();

  const navigateToLoginPage = () => {
    navigate("/auth");
  };

  useEffect(() => {
    if(isLogin) navigate('/musics')
  }, [isLogin, navigate])

  return (
    <Container direction="column" height="100vh">
      <h1>welcome to melody</h1>
      <p>Please log in to view the music list</p>
      <Button
        onClick={navigateToLoginPage}
        width="5%"
        color="#fff"
        padding="0.8rem"
        borderRadius="1rem"
      >
        Login
      </Button>
    </Container>
  );
};

export default HomePage;
