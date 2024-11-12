import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  // Trigger animation after component mounts
  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 500); // Delay to trigger animation
  }, []);

  return (
    <div className="App">
      <div className={`invitation-container ${isVisible ? 'visible' : ''}`}>
        <img
          src={`${process.env.PUBLIC_URL}/invite.jpeg`} 
          alt="Invitation"
          className="invitation-card"
        />
      </div>
    </div>
  );
}

export default App;