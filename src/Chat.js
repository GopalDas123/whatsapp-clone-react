import React, { useState } from "react";
import { Avatar } from "@material-ui/core";
import "./Chat.css";

function Chat({ addNew }) {
  const [seed, setSeed] = useState("");
  useState(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);


  const createChat = () => {
    const roomName = prompt("Enter Name: ");
    if(roomName){
        //do somthing in DB
    }
  };
  return !addNew ? (
    <div className="chat_cont">
      <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
      <div className="chat_info">
        <h3>Room Name</h3>
        <p>Last Message...</p>
      </div>
    </div>
  ) : (
    <div onClick={createChat} className="chat_cont">
      <h2>Add New Chat</h2>
    </div>
  );
}

export default Chat;
