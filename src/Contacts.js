import React from "react";
import Chat from './Chat.js'
import { Avatar, IconButton } from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import SearchIcon from "@material-ui/icons/Search";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import "./Contacts.css";

function Contacts() {
  return (
    <div className="contacts">
      <div className="contacts_header">
        <IconButton>
          <Avatar />
        </IconButton>
        <div className="contacts_headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
        
      <div className="contacts_search">
        <div className="searchContainer">
          <SearchIcon />
          <input className="startChat" placeholder="Start Chat" type="text"/>
        </div>
      </div>
      <div className="contacts_chats">
      
      
      <Chat addNew />
      <Chat/>
      <Chat/>
      <Chat/>
      <Chat/>
      <Chat/>
      <Chat/>
      <Chat/>
      <Chat/>
      <Chat/>
      
      </div>
    </div>
  );
}

export default Contacts;
