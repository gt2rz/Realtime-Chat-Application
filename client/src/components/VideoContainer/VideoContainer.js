import React from 'react';

// import onlineIcon from '../../icons/onlineIcon.png';

import './VideoContainer.css';

const VideoContainer = ({ src, title }) => (
  <div className="videoContainer">
    <h2>{title}</h2>
    <iframe title="video" width="600" height="400"
      src={src}>
    </iframe>  
  </div>
);

export default VideoContainer;