import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Paper, IconButton, Icon } from "@material-ui/core";

import client from "../lib/api/client";
import Header from "../components/base/Header";

import "./LobbyPage.css";

const LobbyPage = (props) => {
  const dispatch = useDispatch();
  const { user } = useSelector(({ userReducer }) => ({
    user: userReducer.user,
  }));
  console.log(client.defaults.headers["X-AUTH-TOKEN"]);
  /*
  const chatRoomList = props.chatRooms.map((chatRoom) => {
    <chatRoom name={chatRoom.name} number={chatRoom.userCount} max={chatRoom.maxCount} />
  });
  */
  return (
    <Container className="container" maxWidth="sm">
      <Header user={user} />
      testtest
    </Container>
    /*
  <Container className="container" maxWidth="sm">
    <chatRoomList />
    <IconButton className="createChatRoom">
      <Icon style={{color:"#92BEFF"}}>add_circle</Icon>
    </IconButton>
  </Container>
  */
  );
};

const chatRoom = ({ name, userCount, maxCount }) => {
  return (
    <Paper variant="outlined" elevation={3}>
      <span className="chatroom_name">{name}</span>
      <span className="number_people">
        {userCount}/{maxCount}
      </span>
    </Paper>
  );
};

export default LobbyPage;
