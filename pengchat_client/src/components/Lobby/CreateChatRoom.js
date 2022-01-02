import React, { useState } from "react";
import { Modal, Box, IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import styled from "styled-components";

import { CustomButton, CustomTextField } from "../../assets/CustomMaterial";

const CreateChatRoom = ({ openModal, closeModal }) => {
  const TopBar = styled.div`
    display: flex;
    height: 30px;
    background-color: #92beff;
    justify-contents: flex-end;
  `;
  const MiddleBox = styled.div`
    display: flex;
    flex-direction: column;
    label {
      margin-left: 10px;
      margin-right: auto;
      font-size: 21px;
      font-weight: 500;
    }
    input {
      border: 1px solid #92beff;
      border-radius: 5%;
      height: 30px;
      margin-bottom: 10px;
    }
    .roomName {
      margin-left: 10px;
      margin-right: 10px;
    }
    .maxMember {
      margin-left: 10px;
      margin-right: 350px;
    }
  `;
  const BottomBar = styled.div`
    justify-contents: center;
    button {
      margin-bottom: 10px;
    }
  `;

  return (
    <Modal
      open={openModal}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        style={{ width: 400, textAlign: "center", backgroundColor: "#ffffff" }}
      >
        <TopBar>
          <IconButton
            style={{ marginRight: "10x", marginLeft: "auto" }}
            onClick={() => {
              closeModal(false);
            }}
          >
            <CloseIcon />
          </IconButton>
        </TopBar>
        <MiddleBox>
          <label>Room Name</label>
          <input className="roomName" />
          <label>Max member</label>
          <input className="maxMember" />
        </MiddleBox>
        <BottomBar>
          <CustomButton>Create</CustomButton>
        </BottomBar>
      </Box>
    </Modal>
  );
};

export default CreateChatRoom;
