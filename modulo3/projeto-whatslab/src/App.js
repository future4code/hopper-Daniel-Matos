import React from "react";
import SendMessage from "./components/SendMessage";
import MessageList from "./components/MessageList";

function App() {
  return (
    <div>
      <MessageList />
      <SendMessage />
    </div>
  );
}

export default App;
