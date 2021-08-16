import React, { useEffect } from "react";
import { Container } from "@material-ui/core";

import "./LoginPage.css";
import { changeField, initializeForm } from "../modules/auth";
import logoImg from "../assets/animal-kingdom.svg";
import { CustomTextField, CustomButton } from "../assets/CustomMaterial";

const LoginPage = () => {
  const dispatch = useDispatch();
  const { form } = useSelector(({ auth }) => ({
    form: auth.login,
  }));

  const onChange = (e) => {
    const { value, id } = e.target;
    dispatch(
      changeField({
        form: "login",
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
    dispatch(initializeForm("login"));
  }, [dispatch]);
  return (
    <Container className="container" maxWidth="sm">
      <div className="logo">
        <img src={logoImg} />
      </div>
      <form className="loginBox" onSubmit={onSubmit}>
        <div>
          <CustomTextField
            id="peng_id"
            label="ID"
            variant="outlined"
            onChange={onChange}
            value={form.peng_id}
          />
          <CustomTextField
            id="peng_pw"
            label="PW"
            type="password"
            variant="outlined"
            onChange={onChange}
            value={form.peng_pw}
            style={{
              marginTop: 20,
              marginBottom: 20,
            }}
          />
        </div>
        <CustomButton variant="contained" type="submit">
          Login
        </CustomButton>
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
