import React, { useState, useEffect } from "react";
import queryString from 'query-string';
import io from "socket.io-client";

import VideoContainer from '../VideoContainer/VideoContainer';
import Messages from '../Messages/Messages';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';

import AuthService from '../../services/auth.service'

import './Chat.css';

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const ENDPOINT = 'http://localhost:5000';

  const {id, username} = AuthService.getCurrentUser();

  useEffect(() => {
    const { room } = queryString.parse(location.search);
    socket = io(ENDPOINT);   
    // const room ="sala01"

    setRoom(room);
    setName(username)

    socket.emit('join', { name:username, room, user_id:id }, (error) => {
      if(error) {
        alert(error);
      }
    });
  }, [ENDPOINT, location.search, username,id]);
  
  useEffect(() => {
    socket.on('message', message => {
      setMessages(messages => [ ...messages, message ]);
    });
    
    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
}, []);

  const sendMessage = (event) => {
    event.preventDefault();

    if(message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  }

  return (
    <div className="outerContainer">
      <VideoContainer title="Bohemian Rhapsody | Muppet Music Video" src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1"/>
      <div className="container-chat">
          <InfoBar room={room} />
          <Messages messages={messages} name={name} />
          <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
    </div>
  );
}

export default Chat;
