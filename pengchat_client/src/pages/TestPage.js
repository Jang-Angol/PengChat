import React from "react";
import { Container } from "@material-ui/core";

import Header from "../components/base/Header";

const TestPage = () => {
  const user = { peng_name: "장인석" };
  return (
    <Container className="contaniner" maxWidth="sm">
      <Header user={user} />
    </Container>
  );
};

export default TestPage;
