import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { Container, List, IconButton } from "@material-ui/core";
import AddBoxIcon from "@material-ui/icons/AddBox";

import client from "../lib/api/client";
import Header from "../components/base/Header";
import ChatRoom from "../components/ChatRoom/ChatRoom";
import CreateChatRoom from "../components/Lobby/CreateChatRoom";

import "./LobbyPage.css";

const WhiteContainer = styled.div`
  display: flex;
  background-color: #ffffff;
  width: 100%;
  height: calc(100vh - 64px);
`;

const LobbyPage = (props) => {
  const dispatch = useDispatch();

  const { user } = useSelector(({ userReducer }) => ({
    user: userReducer.user,
  }));

  const [createChatRoom, setCreateChatRoom] = useState(false);

  const room_list = [
    {
      id: 1,
      name: "Chatroom1CHATROOMCHATROOMCHATROOM",
      userCount: 1,
      maxCount: 5,
    },
    { id: 2, name: "Chatroom2", userCount: 1, maxCount: 5 },
    { id: 3, name: "Chatroom3", userCount: 1, maxCount: 5 },
    { id: 4, name: "Chatroom4", userCount: 1, maxCount: 5 },
    { id: 5, name: "Chatroom5", userCount: 1, maxCount: 5 },
    { id: 1, name: "Chatroom1", userCount: 1, maxCount: 5 },
    { id: 2, name: "Chatroom2", userCount: 1, maxCount: 5 },
    { id: 3, name: "Chatroom3", userCount: 1, maxCount: 5 },
    { id: 4, name: "Chatroom4", userCount: 1, maxCount: 5 },
    { id: 5, name: "Chatroom5", userCount: 1, maxCount: 5 },
    { id: 1, name: "Chatroom1", userCount: 1, maxCount: 5 },
    { id: 2, name: "Chatroom2", userCount: 1, maxCount: 5 },
    { id: 3, name: "Chatroom3", userCount: 1, maxCount: 5 },
    { id: 4, name: "Chatroom4", userCount: 1, maxCount: 5 },
    { id: 5, name: "Chatroom5", userCount: 1, maxCount: 5 },
    { id: 1, name: "Chatroom1", userCount: 1, maxCount: 5 },
    { id: 2, name: "Chatroom2", userCount: 1, maxCount: 5 },
    { id: 3, name: "Chatroom3", userCount: 1, maxCount: 5 },
    { id: 4, name: "Chatroom4", userCount: 1, maxCount: 5 },
    { id: 5, name: "Chatroom5", userCount: 1, maxCount: 5 },
  ];

  const ChatRoomList = ({ room_list }) => {
    return room_list.map((room) => (
      <ChatRoom
        key={room.id}
        name={room.name}
        userCount={room.userCount}
        maxCount={room.maxCount}
      />
    ));
  };

  return (
    <div>
      <Header user={user} />
      <WhiteContainer>
        <Container
          style={{
            display: "flex",
            paddingTop: "40px",
            paddingBottom: "40px",
            justifyContent: "center",
          }}
        >
          <List style={{ maxHeight: "100%", overflow: "auto" }}>
            <ChatRoomList room_list={room_list} />
          </List>
          <IconButton
            style={{ marginLeft: "20px", marginTop: "auto" }}
            onClick={() => {
              setCreateChatRoom(true);
            }}
          >
            <AddBoxIcon
              style={{ width: "48px", height: "48px", color: "#92beff" }}
            />
          </IconButton>
        </Container>
      </WhiteContainer>
      <CreateChatRoom
        openModal={createChatRoom}
        closeModal={setCreateChatRoom}
      />
    </div>
  );
};

export default LobbyPage;
