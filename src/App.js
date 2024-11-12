import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [showRSVP, setShowRSVP] = useState(false);
  

  // Trigger animation after component mounts
  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 500); // Delay to trigger animation

    // Show RSVP button after animation completes (1.5s for animation + slight delay)
    setTimeout(() => {
      setShowRSVP(true);
    }, 2000); // Total delay of 2 seconds (animation + delay)
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
      {showRSVP && (
      <button className="rsvp-button" data-tally-open="wLEDZ1" data-tally-emoji-text="👋" data-tally-emoji-animation="wave">Click to RSVP</button>
      )}
    </div>
  );
}

export default App;