import React from "react";
import { Paper } from "@material-ui/core";

import "./ChatRoom.css";

const ChatRoom = ({ name, userCount, maxCount }) => {
  return (
    <Paper
      className="chatroom"
      variant="outlined"
      elevation={3}
      style={{ backgroundColor: "#f4f4ff", border: "1px solid #92beff" }}
    >
      <span className="chatroom_name">{name}</span>
      <span className="number_people">
        {userCount}/{maxCount}
      </span>
    </Paper>
  );
};

export default ChatRoom;
