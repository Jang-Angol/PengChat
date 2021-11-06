import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "@material-ui/core";
import { withRouter } from "react-router-dom";

import "./LoginPage.css";
import { changeField, initializeForm, login } from "../redux/reducer/authReducer";
import { check } from "../redux/reducer/userReducer";
import logoImg from "../assets/animal-kingdom.svg";
import { CustomTextField, CustomButton } from "../assets/CustomMaterial";
import { idValidation, pwValidation } from "../modules/Validation";
import ErrorMessage from "../components/ErrorMessage";

const LoginPage = ({ history }) => {
  const dispatch = useDispatch();
  const { form, auth, authError, user } = useSelector(({ authReducer, userReducer }) => ({
    form: authReducer.login,
    auth: authReducer.auth,
    authError: authReducer.authError,
    user: userReducer.user,
  }));
  const [error, setError] = useState(null);

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
    setError(null);
    const { peng_id, peng_pw } = form;
    if (peng_id === "" || peng_pw === "") {
      setError("Please enter your ID and password.");
      return;
    } else {
      if (!idValidation(peng_id) || !pwValidation(peng_pw)) {
        setError("Invalid input");
        return;
      }
    }
    dispatch(login({ peng_id, peng_pw }));
  };

  useEffect(() => {
    if (authError) {
      console.log("오류 발생");
      console.log(authError);
      setError("Failed to Login");
      return;
    }
    if (auth) {
      console.log("로그인 성공");
      dispatch(check());
    }
  }, [auth, authError, dispatch]);

  useEffect(() => {
    if (user) {
      history.push("/lobby");
    }
  }, [history, user]);

  return (
    <Container className="container" maxWidth="sm">
      <div className="logo">
        <img src={logoImg} alt="logo" />
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
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <CustomButton variant="contained" type="submit">
          Login
        </CustomButton>
      </form>
      <CustomButton
        href="/register"
        variant="contained"
        style={{
          marginTop: 30,
        }}
      >
        Register
      </CustomButton>
    </Container>
  );
};

export default withRouter(LoginPage);
