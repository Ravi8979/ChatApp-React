import React, { useState } from 'react';
import InputEmoji from 'react-input-emoji';

const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"];

const ChatApp = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleMessageChange = (text) => {
    setMessage(text);
  };

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      const randomUser = user_list[Math.floor(Math.random() * user_list.length)];
      const newMessage = {
        user: randomUser,
        text: message,
        likes: 0
      };
      setMessages([...messages, newMessage]);
      setMessage('');
    }
  };

  const handleLike = (index) => {
    const updatedMessages = [...messages];
    updatedMessages[index].likes++;
    setMessages(updatedMessages);
  };

  return (
    <div className = "maincontainer">
    <div className="Chat">
      {/* Left Side */}
      <div className="Left-side-chat">
        <div className="Chat-container">
          <h1>Chat App</h1>
          <div className="Chat-List">
          <br></br>
          <div classname="Conversations">
          <p>Conversations</p>
          </div>
            <br></br>
            <br></br>
          </div>
        </div>
      </div>
      </div>
      {/* Right Side */}
      <div className="Right-side-chat">
        <div>
          {messages.map((msg, index) => (
            <div key={index}>
              <p>{msg.user}: {msg.text}</p>
              <button onClick={() => handleLike(index)}>Like ({msg.likes})</button>
            </div>
          ))}
          <InputEmoji
            value={message}
            onChange={handleMessageChange}
            cleanOnEnter
            placeholder="Type your message..."
          />
          <br></br>
          <button className= "Send-button" onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default ChatApp;
