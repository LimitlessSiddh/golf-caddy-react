import React, { useState, useEffect } from 'react';

function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(true); // To handle loading state
  const [error, setError] = useState(null); // For handling errors

  useEffect(() => {
    // Fetch the leaderboard data from the API
    const fetchLeaderboard = async () => {
      try {
        // Example API URL (replace with a real one)
        const response = await fetch(
          'https://golf-leaderboard-data.p.rapidapi.com/world-rankings',
          {
            headers: {
              'Api-Key': 'x-rapidapi-key', // Replace with your actual API key
            },
          }
        );

        if (!response.ok) {
          throw new Error('Failed to fetch leaderboard data');
        }

        const data = await response.json();

        // Set the leaderboard data into state
        setLeaderboard(data);
        setLoading(false); // Set loading to false when data is fetched
      } catch (err) {
        setError(err.message); // Set error if there's an issue
        setLoading(false); // Set loading to false even if there's an error
      }
    };

    fetchLeaderboard(); // Fetch the data when the component mounts
  }, []); // Empty dependency array to run the effect only once on mount

  if (loading) {
    return <div>Loading leaderboard...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Live PGA Leaderboard</h2>
      <ol>
        {leaderboard.map((player, index) => (
          <li key={index}>
            {player.position}. {player.name} - {player.score}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Leaderboard;

