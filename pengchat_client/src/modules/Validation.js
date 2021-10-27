// 4자리~12자리 알파벳 or 숫자
const idValidation = (input) => {
  const regExp = /^[A-Za-z0-9]{4,12}$/;
  if (regExp.test(input)) return true;
  else {
    console.error("invalid input:", input);
    return false;
  }
};
// 8자리~20자리 ASCII 코드
const pwValidation = (input) => {
  const regExp = /^[\x00-\x7F]{8,20}$/;
  if (regExp.test(input)) return true;
  else {
    console.error("invalid input:", input);
    return false;
  }
};
// 한글 또는 영어 공백 포함 한글 혼용 불가 20자 이내
const nameValidation = (input) => {
  const regExpKor = /^[가-힣]+[가-힣\s]*[가-힣]+$/;
  const regExpEng = /^[a-zA-Z]+[a-zA-Z\s]*[a-zA-Z]+$/;
  if (!(regExpEng.test(input) || regExpKor.test(input)) || input.length > 30) {
    console.error("invalid input:", input);
    return false;
  } else return true;
};
// 이메일 양식
const emailValidation = (input) => {
  //"/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i"
  const regExp =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  if (regExp.test(input)) return true;
  else {
    console.error("invalid input:", input);
    return false;
  }
};
module.exports = {
  idValidation,
  pwValidation,
  nameValidation,
  emailValidation,
};
