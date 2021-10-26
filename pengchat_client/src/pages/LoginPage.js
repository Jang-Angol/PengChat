import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "@material-ui/core";
import { withRouter } from "react-router-dom";

import "./LoginPage.css";
import { changeField, initializeForm, login } from "../modules/auth";
import { check } from "../modules/user";
import logoImg from "../assets/animal-kingdom.svg";
import { CustomTextField, CustomButton } from "../assets/CustomMaterial";

const LoginPage = () => {
  const dispatch = useDispatch();
  const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.login,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user,
  }));
  // 인풋 변경 이벤트 핸들러
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

  // 컴포넌트가 처음 렌더링될 때 form을 초기화
  useEffect(() => {
    dispatch(initializeForm("login"));
  }, [dispatch]);

  // 폼 등록 이벤트 핸들러
  const onSubmit = (e) => {
    e.preventDefault();
    const { peng_id, peng_pw } = form;
    dispatch(login({ peng_id, peng_pw }));
  };

  useEffect(() => {
    if (authError) {
      console.log("오류 발생");
      console.log(authError);
      return;
    }
    if (auth) {
      console.log("로그인 성공");
      dispatch(check());
    }
  }, [auth, authError, dispatch]);

  useEffect(() => {
    if (user) {
      history.push("/");
    }
  }, [history, user]);

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
