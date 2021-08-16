import React from "react";
import { Container } from "@material-ui/core";
import { Link } from "react-router-dom";

import "./SignUpPage.css";
import logoImg from "../assets/animal-kingdom.svg";
import { CustomTextField, CustomButton } from "../assets/CustomMaterial";

const SignUpPage = () => {
  return (
    <Container className="container" maxWidth="sm">
      <div className="logo">
        <Link to="/">
          <img src={logoImg} />
        </Link>
      </div>
      <form className="signupBox">
        <div>
          <CustomTextField
            required
            variant="outlined"
            id="peng_id"
            label="ID"
          />
          <CustomTextField
            required
            variant="outlined"
            id="peng_pw"
            label="PW"
            type="password"
            style={{
              marginTop: 20,
              marginBottom: 20,
            }}
          />
          <CustomTextField
            required
            variant="outlined"
            id="peng_pw_check"
            label="PW Check"
            type="password"
            style={{
              marginTop: 20,
              marginBottom: 20,
            }}
          />
          <CustomTextField
            required
            variant="outlined"
            id="peng_name"
            label="Name"
            style={{
              marginTop: 20,
              marginBottom: 20,
            }}
          />
          <CustomTextField
            required
            variant="outlined"
            id="peng_email"
            label="Email"
            style={{
              marginTop: 20,
              marginBottom: 20,
            }}
          />
        </div>
        <CustomButton
          variant="contained"
          style={{
            marginTop: 30,
            marginBottom: 50,
          }}
        >
          Sign UP
        </CustomButton>
      </form>
    </Container>
  );
};

export default SignUpPage;
