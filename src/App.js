import React from 'react';
import './App.css';
import Contacts from './Contacts';
import Chats from './Chats'
function App() {
  return (
    <div className="app">
     <div className="app_body">
      <Contacts/>
      <Chats/>
     </div>
    </div>
  );
}

export default App;
