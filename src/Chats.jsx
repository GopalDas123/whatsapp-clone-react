import React, { useState, useEffect } from "react";
import { Avatar, IconButton } from "@material-ui/core";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import "./Chats.css";
import {
  AttachFile,
  MoreVert,
  SearchOutlined,
  InsertEmoticon,
} from "@material-ui/icons";

function Chats() {
  const [input, setInput] = useState("");
  const [seed, setSeed] = useState("");
  useState(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);
  const sendMessage = (e) => {
    e.preventDefault();
    console.log("Your Message: ", input);
    setInput("")
  };
  return (
    <div className="chats">
      <div className="cHeader">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="cHeaderInfo">
          <h4>Room Name</h4>
          <span>Last Seen At ...</span>
        </div>
        <div className="chatSend">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      {/* <hr></hr> */}
      <div className="cBody">
        <p className={`chat_sender ${true && "chat_receiver"}`}>
          <span className="chat_name">Ritesh Kumar</span>Hey Guys
          <span className="message_time">1:52 AM</span>
        </p>
      </div>
      <div className="cFooter">
        <InsertEmoticonIcon />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Type A Message"
          />
          <button onClick={sendMessage} type="submit">
            Send a message
          </button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}

export default Chats;
