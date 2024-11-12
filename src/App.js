import React, { useState } from 'react';
import './App.css';
import invite from 'invite.jpeg';

function App() {
  const [isOpened, setIsOpened] = useState(false);

  const handleOpen = () => {
    setIsOpened(true);
  };

  return (
    <div className="App">
      <div className={`envelope ${isOpened ? 'open' : ''}`} onClick={handleOpen}>
        <div className="flap"></div>
        <div className="content">
          <img src={`${process.env.PUBLIC_URL}/invitation.jpg`} alt="Invitation" className={`invitation ${isOpened ? 'spin' : ''}`} />
        </div>
      </div>
    </div>
  );
}

export default App;