import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "@material-ui/core";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

import "./RegisterPage.css";
import {
  changeField,
  initializeForm,
  register,
} from "../redux/reducer/authReducer";
import logoImg from "../assets/animal-kingdom.svg";
import { CustomTextField, CustomButton } from "../assets/CustomMaterial";
import {
  idValidation,
  pwValidation,
  nameValidation,
  emailValidation,
} from "../modules/Validation";
import ErrorMessage from "../components/ErrorMessage";

const RegisterPage = ({ history }) => {
  const dispatch = useDispatch();
  const { form, auth, authError } = useSelector(({ auth }) => ({
    form: auth.register,
    auth: auth.auth,
    authError: auth.authError,
  }));
  const [error, setError] = useState(null);

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
    if (
      peng_pw !== peng_pw_check ||
      !idValidation(peng_id) ||
      !pwValidation(peng_pw) ||
      !nameValidation(peng_name) ||
      !emailValidation(peng_email)
    ) {
      // TO DO : 오류 처리
      setError("Register Failed");
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
      //console.log("오류 발생");
      console.log(authError);
      setError("Register Failed");
      return;
    }
  }, [history, authError, dispatch]);

  useEffect(() => {
    if (auth) {
      console.log("회원가입 성공");
      history.push("/");
    }
  }, [history, auth, dispatch]);

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
            variant="outlined"
            id="peng_id"
            label="ID"
            onChange={onChange}
            value={form.peng_id}
            error={form.peng_id !== "" && !idValidation(form.peng_id)}
            helperText={
              form.peng_id !== "" && !idValidation(form.peng_id)
                ? "Alphabet or number of 4 to 12 letters"
                : ""
            }
          />
          <CustomTextField
            variant="outlined"
            id="peng_pw"
            label="PW"
            type="password"
            onChange={onChange}
            value={form.peng_pw}
            error={form.peng_pw !== "" && !pwValidation(form.peng_pw)}
            helperText={
              form.peng_pw !== "" && !pwValidation(form.peng_pw)
                ? "8 to 20 letters"
                : ""
            }
            style={{
              marginTop: 20,
              marginBottom: 20,
            }}
          />
          <CustomTextField
            variant="outlined"
            id="peng_pw_check"
            label="PW Check"
            type="password"
            onChange={onChange}
            value={form.peng_pw_check}
            error={
              form.peng_pw_check !== "" && form.peng_pw !== form.peng_pw_check
            }
            helperText={
              form.peng_pw_check !== "" && form.peng_pw !== form.peng_pw_check
                ? "Is not equal to PW"
                : ""
            }
            style={{
              marginTop: 20,
              marginBottom: 20,
            }}
          />
          <CustomTextField
            variant="outlined"
            id="peng_name"
            label="Name"
            onChange={onChange}
            value={form.peng_name}
            error={form.peng_name !== "" && !nameValidation(form.peng_name)}
            helperText={
              form.peng_name !== "" && !nameValidation(form.peng_name)
                ? "Korean or English"
                : ""
            }
            style={{
              marginTop: 20,
              marginBottom: 20,
            }}
          />
          <CustomTextField
            variant="outlined"
            id="peng_email"
            label="Email"
            onChange={onChange}
            value={form.peng_email}
            error={form.peng_email !== "" && !emailValidation(form.peng_email)}
            helperText={
              form.peng_email !== "" && !emailValidation(form.peng_email)
                ? "Invalid email form"
                : ""
            }
            style={{
              marginTop: 20,
              marginBottom: 20,
            }}
          />
          {error && <ErrorMessage>{error}</ErrorMessage>}
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
