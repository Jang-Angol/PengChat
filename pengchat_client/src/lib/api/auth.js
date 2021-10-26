import client from "./client";
//로그인
export const login = ({ peng_id, peng_pw }) => {
  client.post("/login", { peng_id, peng_pw });
};

//회원가입
export const register = ({ peng_id, peng_pw, peng_name, peng_email }) => {
  client.post("/signup", { peng_id, peng_pw, peng_name, peng_email });
};

//체크
export const check = () => client.get("/test");
