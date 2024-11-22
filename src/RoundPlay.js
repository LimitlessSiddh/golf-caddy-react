import React, { useState } from 'react';
import './RoundPlay.css';

// Mapping for club icons
const clubIcons = {
  Driver: '🏌️‍♂️',
  '3 Wood': '🏌️',
  '5 Wood': '🏌️‍♀️',
  '7 Wood': '🏌️‍♀️',
  Hybrid: '🏌️‍♂️',
  '3 Iron': '⚒️',
  '4 Iron': '⚒️',
  '5 Iron': '⚒️',
  '6 Iron': '⚒️',
  '7 Iron': '⚒️',
  '8 Iron': '⚒️',
  '9 Iron': '⚒️',
  'Pitching Wedge': '⚒️',
  'Sand Wedge': '🏖️',
  '50° Wedge': '🏖️',
  '52° Wedge': '🏖️',
  '54° Wedge': '🏖️',
  '56° Wedge': '🏖️',
  '60° Wedge': '🏖️',
  Putter: '⛳',
};

function RoundPlay({ yardages }) {
  const [distance, setDistance] = useState('');
  const [suggestedClub, setSuggestedClub] = useState('');
  const [hole, setHole] = useState(1);
  const [totalShots, setTotalShots] = useState(0);
  const [shotsPerHole, setShotsPerHole] = useState(0);
  const [totalHoles, setTotalHoles] = useState(0); // Will store 9 or 18
  const [isGameStarted, setIsGameStarted] = useState(false); // To control game start

  const par = totalHoles === 9 ? 31 : 72;

  const getSuggestedClub = (distance) => {
    if (distance <= 30) return 'Putter';
    const clubs = Object.entries(yardages)
      .filter(([, yardage]) => yardage)
      .sort((a, b) => b[1] - a[1]);
    for (const [club, yardage] of clubs) {
      if (distance >= yardage - 20 && distance <= yardage + 20) return club;
    }
    return 'No suitable club available';
  };

  const handleDistanceSubmit = () => {
    const club = getSuggestedClub(parseInt(distance, 10));
    setSuggestedClub(club);
  };

  const handleHit = () => {
    setShotsPerHole(shotsPerHole + 1);
    setTotalShots(totalShots + 1);
    setDistance(''); // Reset the input field after hitting
  };

  const handleDrop = () => {
    setShotsPerHole(shotsPerHole + 1);
    setTotalShots(totalShots + 1);
    setDistance(''); // Reset the input field after dropping
  };

  const handleNextHole = () => {
    if (hole < totalHoles) {
      setHole(hole + 1);
      setShotsPerHole(0);
      setSuggestedClub('');
    }
  };

  const getScore = () => {
    const scoreDifference = totalShots - par;
    return scoreDifference === 0
      ? `You hit par! Total shots: ${totalShots}`
      : `Total shots: ${totalShots} (${scoreDifference > 0 ? '+' : ''}${scoreDifference})`;
  };

  const startRound = (holes) => {
    setTotalHoles(holes);
    setIsGameStarted(true);
  };

  const restartRound = () => {
    setHole(1);
    setTotalShots(0);
    setShotsPerHole(0);
    setSuggestedClub('');
    setIsGameStarted(false);
  };

  return (
    <div className="round-container">
      {!isGameStarted ? (
        <div className="start-round">
          <h2>Choose Your Round</h2>
          <button onClick={() => startRound(9)} className="start-button">
            Play 9 Holes
          </button>
          <button onClick={() => startRound(18)} className="start-button">
            Play 18 Holes
          </button>
        </div>
      ) : (
        <>
          <h2>Round Progress</h2>
          <p>Hole {hole} of {totalHoles}</p>
          <p>Shots this hole: {shotsPerHole}</p>
          <p>Total shots: {totalShots}</p>
          <div className="progress-bar">
            {[...Array(totalHoles)].map((_, index) => (
              <div
                key={index}
                className={`progress-step ${index < hole ? 'completed' : ''}`}
              />
            ))}
          </div>
          <label>Enter Distance to Hole:</label>
          <input
            type="number"
            placeholder="Distance in yards"
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
            className="distance-input"
          />
          <button className="floating-hit-button" onClick={handleDistanceSubmit}>
            Ask
          </button>
          {suggestedClub && (
            <p className="suggested-club fadeIn">
              Suggested Club: {clubIcons[suggestedClub] || ''} {suggestedClub}
            </p>
          )}
          <div className="action-buttons">
            <button className="curved-button hit-button" onClick={handleHit}>
              Hit
            </button>
            <button className="curved-button drop-button" onClick={handleDrop}>
              Drop
            </button>
          </div>
          {hole < totalHoles && (
            <button className="next-hole-button" onClick={handleNextHole}>
              Next Hole
            </button>
          )}
          {hole === totalHoles && (
            <>
              <p className="final-score">{getScore()}</p>
              <button onClick={restartRound} className="restart-button">
                Restart Round
              </button>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default RoundPlay;










