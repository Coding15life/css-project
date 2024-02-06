// page.jsx

/*
import React from 'react';
import './page.css'; // Import the standard CSS file

const FanZone = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Welcome to the Fan Zone</h1>
      <p>This is the Fan Zone page. You can add your content here.</p>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 4</li>
      </ul>
      {/* Add more content specific to the Fan Zone page }
    </div>
  );
};

export default FanZone;
*/

/*
// page.jsx
import React, { useState, useEffect } from 'react';
import { getRequestToken, getAccessToken, makeApiRequest } from '../api/fanzone/route_fanzone';

const FanZonePage = () => {
  const [accessToken, setAccessToken] = useState(null);
  const [apiData, setApiData] = useState(null);
  const [error, setError] = useState(null);

  // Function to initiate OAuth flow
  const initiateAuthentication = async () => {
    try {
      const requestToken = await getRequestToken();
      // Replace 'YOUR_AUTHORIZATION_URL' with the actual Yahoo authorization URL
      const authorizationUrl = `https://api.login.yahoo.com/oauth/v2/request_auth?oauth_token=${requestToken.oauth_token}`;
      window.location.href = authorizationUrl;
    } catch (error) {
      setError('Authentication error: ' + error.message);
    }
  };

  // Function to handle OAuth callback and exchange request token for access token
  const handleOAuthCallback = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const oauthToken = urlParams.get('oauth_token');
    const oauthVerifier = urlParams.get('oauth_verifier');

    if (oauthToken && oauthVerifier) {
      try {
        const token = await getAccessToken(oauthToken, oauthVerifier);
        setAccessToken(token.oauth_token);
      } catch (error) {
        setError('Access token error: ' + error.message);
      }
    }
  };

  // Function to make API request with access token
  const fetchDataFromApi = async () => {
    const apiUrl = 'https://fantasysports.yahooapis.com/fantasy/v2/users;use_login=1/games;game_keys=nfl/teams';

    try {
      const data = await makeApiRequest(apiUrl, accessToken);
      setApiData(data);
    } catch (error) {
      setError('API request error: ' + error.message);
    }
  };

  useEffect(() => {
    // Check if this is the callback route
    if (window.location.pathname === '/callback') {
      handleOAuthCallback();
    }
  }, []);

  return (
    <div>
      {accessToken ? (
        <div>
          <button onClick={fetchDataFromApi}>Fetch Data</button>
          {apiData && <pre>{JSON.stringify(apiData, null, 2)}</pre>}
        </div>
      ) : (
        <button onClick={initiateAuthentication}>Authenticate with Yahoo</button>
      )}
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default FanZonePage;
*/

/*
"use client";

import React, { useState, useEffect } from 'react';
import { getRequestToken, redirectToYahooAuthorization, getAccessToken, makeApiRequest } from '../api/fanzone/route_fanzone';

const FanZonePage = () => {
  const [accessToken, setAccessToken] = useState(null);
  const [apiData, setApiData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Function to initiate OAuth flow
  const initiateAuthentication = async () => {
    try {
      const requestToken = await getRequestToken();
      redirectToYahooAuthorization(requestToken);
    } catch (error) {
      setError('Authentication error: ' + error.message);
    }
  };

  // Function to handle OAuth callback and exchange request token for access token
  const handleOAuthCallback = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const oauthToken = urlParams.get('oauth_token');
    const oauthVerifier = urlParams.get('oauth_verifier');

    if (oauthToken && oauthVerifier) {
      try {
        const token = await getAccessToken(oauthToken, oauthVerifier);
        setAccessToken(token.oauth_token);
      } catch (error) {
        setError('Access token error: ' + error.message);
      }
    }
  };

  // Function to make API request with access token
  const fetchDataFromApi = async () => {
    setLoading(true);
    const apiUrl = 'https://fantasysports.yahooapis.com/fantasy/v2/users;use_login=1/games;game_keys=nfl/teams';

    try {
      const data = await makeApiRequest(apiUrl, accessToken);
      setApiData(data);
    } catch (error) {
      setError('API request error: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Check if this is the callback route
    if (window.location.pathname === '/callback') {
      handleOAuthCallback();
    }
  }, []);

  return (
    <div>
      {accessToken ? (
        <div>
          <button onClick={fetchDataFromApi} disabled={loading}>Fetch Data</button>
          {loading && <p>Loading data...</p>}
          {apiData && <pre>{JSON.stringify(apiData, null, 2)}</pre>}
        </div>
      ) : (
        <button onClick={initiateAuthentication}>Authenticate with Yahoo</button>
      )}
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default FanZonePage;
*/





// page.jsx


"use client";

import React, { useState, useEffect } from 'react';
import './page.css';

const FanZonePage = () => {
  // State for football live scores with countdown timer
  const [footballLiveScores, setFootballLiveScores] = useState([
    { team1: 'Team A', team2: 'Team B', score: '2 - 1', time: 600 }, // 10 minutes in seconds
    { team1: 'Team C', team2: 'Team D', score: '0 - 0', time: 900 }, // 15 minutes in seconds
    // Add more football live scores as needed
  ]);

  // State for basketball live scores with countdown timer
  const [basketballLiveScores, setBasketballLiveScores] = useState([
    { team1: 'Team X', team2: 'Team Y', score: '85 - 80', time: 150 }, // 2 minutes and 30 seconds in seconds
    { team1: 'Team Z', team2: 'Team W', score: '62 - 70', time: 345 }, // 5 minutes and 45 seconds in seconds
    // Add more basketball live scores as needed
  ]);

  // State for player statistics
  const [playerStatistics, setPlayerStatistics] = useState([
    { player: 'Player 1', points: 20, rebounds: 10, assists: 5 },
    { player: 'Player 2', points: 15, rebounds: 8, assists: 3 },
    // Add more player statistics as needed
  ]);

  // Function to update football scores
  const updateFootballScores = () => {
    // Simulate updated scores
    const updatedScores = footballLiveScores.map((match) => ({
      ...match,
      score: `${Math.floor(Math.random() * 5)} - ${Math.floor(Math.random() * 5)}`,
      time: 600, // Reset time to 10 minutes in seconds
    }));
    setFootballLiveScores(updatedScores);
  };

  // Function to update basketball scores
  const updateBasketballScores = () => {
    // Simulate updated scores
    const updatedScores = basketballLiveScores.map((match) => ({
      ...match,
      score: `${Math.floor(Math.random() * 100)} - ${Math.floor(Math.random() * 100)}`,
      time: 150, // Reset time to 2 minutes and 30 seconds in seconds
    }));
    setBasketballLiveScores(updatedScores);
  };

  // Function to reset player statistics
  const resetPlayerStatistics = () => {
    // Simulate resetting player statistics
    const resetStats = playerStatistics.map((player) => ({
      ...player,
      points: 0,
      rebounds: 0,
      assists: 0,
    }));
    setPlayerStatistics(resetStats);
  };

  // Function to format time as MM:SS
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  // Countdown effect for live scores
  useEffect(() => {
    const countdownInterval = setInterval(() => {
      // Update football live scores countdown
      setFootballLiveScores((prevScores) =>
        prevScores.map((match) =>
          match.time > 0 ? { ...match, time: match.time - 1 } : match
        )
      );

      // Update basketball live scores countdown
      setBasketballLiveScores((prevScores) =>
        prevScores.map((match) =>
          match.time > 0 ? { ...match, time: match.time - 1 } : match
        )
      );
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  return (
    <div className="fan-zone">
      <h1 className="fan-zone-header">Fan Zone</h1>

      <div className="live-scores">
        <div className="live-scores-section">
          <h2>Football Live Scores</h2>
          <button onClick={updateFootballScores} className="custom-button">
            Update Scores
          </button>
          <table className="live-scores-table">
            <thead>
              <tr>
                <th>Team 1</th>
                <th>Team 2</th>
                <th>Score</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {footballLiveScores.map((match, index) => (
                <tr key={index}>
                  <td>{match.team1}</td>
                  <td>{match.team2}</td>
                  <td>{match.score}</td>
                  <td>{formatTime(match.time)}</td> {/* Format time as MM:SS */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="live-scores-section">
          <h2>Basketball Live Scores</h2>
          <button onClick={updateBasketballScores} className="custom-button">
            Update Scores
          </button>
          <table className="live-scores-table">
            <thead>
              <tr>
                <th>Team 1</th>
                <th>Team 2</th>
                <th>Score</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {basketballLiveScores.map((match, index) => (
                <tr key={index}>
                  <td>{match.team1}</td>
                  <td>{match.team2}</td>
                  <td>{match.score}</td>
                  <td>{formatTime(match.time)}</td> {/* Format time as MM:SS */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="player-statistics">
        <h2>Player Statistics</h2>
        <button onClick={resetPlayerStatistics} className="custom-button">
          Reset Statistics
        </button>
        <table className="player-statistics-table">
          <thead>
            <tr>
              <th>Player</th>
              <th>Points</th>
              <th>Rebounds</th>
              <th>Assists</th>
            </tr>
          </thead>
          <tbody>
            {playerStatistics.map((player, index) => (
              <tr key={index}>
                <td>{player.player}</td>
                <td>{player.points}</td>
                <td>{player.rebounds}</td>
                <td>{player.assists}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FanZonePage;




/*
"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FanZonePage = () => {
  // State to store the fetched data
  const [fantasyData, setFantasyData] = useState(null);

  // Function to fetch data
  const fetchData = async () => {
    try {
      const response = await axios.get('https://api.yahoo.com/yahoo_fantasy_api_endpoint', {
        headers: {
          Authorization: `Bearer ${accessToken}`, // Replace with your access token
        },
      });

      // Store the data in state
      setFantasyData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    // Call the fetchData function when the component mounts
    fetchData();
  }, []);

  return (
    <div>
      <h1>Fan Zone</h1>

      {/* Render the fetched data }
      {fantasyData && (
        <div>
          <h2>Data from Yahoo Fantasy API</h2>
          <pre>{JSON.stringify(fantasyData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default FanZonePage;

*/