import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "@material-ui/core";
import { Link } from "react-router-dom";

import "./SignUpPage.css";
import { changeField, initializeForm } from "../modules/auth";
import logoImg from "../assets/animal-kingdom.svg";
import { CustomTextField, CustomButton } from "../assets/CustomMaterial";

const SignUpPage = () => {
  const dispatch = useDispatch();
  const { form } = useSelector(({ auth }) => ({
    form: auth.signup,
  }));

  const onChange = (e) => {
    const { value, id } = e.target;
    dispatch(
      changeField({
        form: "signup",
        key: id,
        value,
      })
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // 구현예정
  };

  useEffect(() => {
    dispatch(initializeForm("signup"));
  }, [dispatch]);

  return (
    <Container className="container" maxWidth="sm">
      <div className="logo">
        <Link to="/">
          <img src={logoImg} />
        </Link>
      </div>
      <form className="signupBox" onSubmit={onSubmit}>
        <div>
          <CustomTextField
            required
            variant="outlined"
            id="peng_id"
            label="ID"
            onChange={onChange}
            value={form.peng_id}
          />
          <CustomTextField
            required
            variant="outlined"
            id="peng_pw"
            label="PW"
            type="password"
            onChange={onChange}
            value={form.peng_pw}
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
            onChange={onChange}
            value={form.peng_pw_check}
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
            onChange={onChange}
            value={form.peng_name}
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
            onChange={onChange}
            value={form.peng_email}
            style={{
              marginTop: 20,
              marginBottom: 20,
            }}
          />
        </div>
        <CustomButton
          variant="contained"
          type="submit"
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
