import React, { useState } from 'react';
import RoundPlay from './RoundPlay';
import './ClubSelector.css';

function ClubSelector() {
  const clubs = [
    '3 Iron', '4 Iron', '5 Iron', '6 Iron', '7 Iron', '8 Iron', '9 Iron',
    'Pitching Wedge', 'Sand Wedge', '50° Wedge', '52° Wedge', '54° Wedge',
    '56° Wedge', '60° Wedge', 'Hybrid', '3 Wood', '5 Wood', '7 Wood', 'Driver',
  ];

  const [yardages, setYardages] = useState({});
  const [startRound, setStartRound] = useState(false);

  const handleInputChange = (club, value) => {
    setYardages({ ...yardages, [club]: value });
  };

  const handleStartRound = () => {
    setStartRound(true);
  };

  if (startRound) return <RoundPlay yardages={yardages} />;

  return (
    <div className="club-selector-container">
      <h2>Enter Your Stock Yardages</h2>
      <div className="club-inputs">
        {clubs.map((club, index) => (
          <div
            key={club}
            className={`club-input ${index % 5 === 0 ? 'start-row' : ''}`} // Creates a new row every 5 inputs
          >
            <label>{club}:</label>
            <div className="slider-container">
              <input
                type="range"
                min="0"
                max="350"
                value={yardages[club] || 0}
                onChange={(e) => handleInputChange(club, e.target.value)}
                className="yardage-slider"
              />
              <span>{yardages[club] || 0} yards</span>
            </div>
          </div>
        ))}
      </div>
      <button className="start-button" onClick={handleStartRound}>
        Start Round
      </button>
    </div>
  );
}

export default ClubSelector;








