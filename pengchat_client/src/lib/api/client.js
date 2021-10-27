import axios from "axios";

const client = axios.create();


//글로벌 설정 예시:

// API 주소를 다른 곳으로 사용함
client.defaults.baseURL = "http://192.168.137.128:8080/";

// 인터셉터 설정
axios.interceptors.response.use(
  (response) => {
    // 요청 성공 시 특정 작업 수행
    console.log(response);
    return response;
  },
  (error) => {
    // 요청 실패시 특정 작업 수행
    console.error(error);
    return Promise.reject(error);
  }
);


export default client;
