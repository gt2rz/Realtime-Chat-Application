import React, { useState } from 'react';
import { Link } from "react-router-dom";

import './Join.css';

export default function SignIn() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className="joinOuterContainer mt-20">
      <div className="joinInnerContainer mt-20">
        <h1 className="heading">Join to Chat</h1>
        {/* <div>
          <input placeholder="Nickname" className="form-control" type="text" onChange={(event) => setName(event.target.value)} />
        </div> */}
        <div>
          <input placeholder="Room name" className="form-control mt-20" type="text" onChange={(event) => setRoom(event.target.value)} />
        </div>
        {/* <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}> */}
        <Link onClick={e => (!room) ? e.preventDefault() : null} to={`/chat?room=${room}`}>
          <button className={'btn btn-primary mt-20'} type="submit">Unirse</button>
        </Link>
      </div>
    </div>
  );
}
