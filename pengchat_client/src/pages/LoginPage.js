import React from "react";
import { Container} from "@material-ui/core";

import "./LoginPage.css";
import logoImg from "../assets/animal-kingdom.svg";
import { CustomTextField, CustomButton } from "../assets/CustomMaterial";

const LoginPage = () => {
  return (
    <Container className="container" maxWidth="sm">
      <div className="logo">
        <img src={logoImg} />
      </div>
      <form className="loginBox">
        <div>
          <CustomTextField id="peng_id" label="ID" variant="outlined" />
          <CustomTextField
            id="peng_pw"
            label="PW"
            type="password"
            variant="outlined"
            style={{
              marginTop: 20,
              marginBottom: 20,
            }}
          />
        </div>
        <CustomButton variant="contained">Login</CustomButton>
      </form>
      <CustomButton
        href="/signup"
        variant="contained"
        style={{
          marginTop: 30,
        }}
      >
        Sign UP
      </CustomButton>
    </Container>
  );
};

export default LoginPage;
