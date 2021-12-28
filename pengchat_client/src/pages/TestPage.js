import React from "react";
import styled from "styled-components";

import Header from "../components/base/Header";

const WhiteContainer = styled.div`
  background-color: #ffffff;
  width: 100%;
  height: 100%;
`;

const TestPage = () => {
  const user = { peng_name: "장인석" };
  return (
    <div>
      <Header user={user} />
      <WhiteContainer>testest</WhiteContainer>
    </div>
  );
};

export default TestPage;
