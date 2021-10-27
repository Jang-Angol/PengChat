import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "@material-ui/core";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

import "./RegisterPage.css";
import { changeField, initializeForm, register } from "../modules/auth";
import logoImg from "../assets/animal-kingdom.svg";
import { CustomTextField, CustomButton } from "../assets/CustomMaterial";
import { check } from "../modules/user";

const RegisterPage = ({ history }) => {
  const dispatch = useDispatch();
  const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.register,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user,
  }));

  const onChange = (e) => {
    const { value, id } = e.target;
    dispatch(
      changeField({
        form: "register",
        key: id,
        value,
      })
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { peng_id, peng_pw, peng_pw_check, peng_name, peng_email } = form;
    console.log(form);
    if (peng_pw !== peng_pw_check) {
      // TO DO : 오류 처리
      console.log("비밀번호가 일치하지 않습니다.")
      return;
    }
    dispatch(register({ peng_id, peng_pw, peng_name, peng_email }));
  };

  // 컴포넌트 렌더링 시 form 초기화
  useEffect(() => {
    dispatch(initializeForm("register"));
  }, [dispatch]);

  // 회원가입 성공/실패 처리
  useEffect(() => {
    if (authError) {
      console.log("오류 발생");
      console.log(authError);
      return;
    }
    if (auth) {
      console.log("회원가입 성공");
      console.log(auth);
      dispatch(check());
    }
  }, [auth, authError, dispatch]);

  // user값이 잘 생성되었는지 확인
  useEffect(() => {
    if (user) {
      console.log("check API 성공");
      console.log(user);
      history.push("/lobby");
    }
  }, [history, user]);

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
          REGISTER
        </CustomButton>
      </form>
    </Container>
  );
};

export default withRouter(RegisterPage);
