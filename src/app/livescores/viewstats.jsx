"use client";

import styles from "./LiveScoresTable.css";
import Spinner from "react-bootstrap/Spinner";

import React, { useState, useEffect } from 'react';
import axios from 'axios';


//from chatgpt
const currentDate = new Date();

const year = currentDate.getFullYear();
const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); //pad start with 0 if the month is a single-digit
const day = currentDate.getDate().toString().padStart(2, '0');

const todayDate = `${year}-${month}-${day}`;



function PlayerStatsTable() {
    const [playerStats, setPlayerStats] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchPlayerStats = async () => {
        try {
          const response = await axios.get(`https://www.balldontlie.io/api/v1/stats`);
          setPlayerStats(response.data.data);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching player stats:', error);
          setError(error);
          setLoading(false);
        }
      };
  
      fetchPlayerStats();
    }, []);
  
    return (
      <div>
        <h1>Player Stats</h1>
        {loading && <Spinner animation="border" role="status">
                <h3 className="visually-hidden">Loading player stats...</h3>
              </Spinner>}
        {error && <p>Error: {error.message}</p>}
        <table class="scorestable">
          <thead>
            <tr>
              <th>PLAYER</th>
              <th>TEAM</th>
              <th>PTS</th>
              <th>REB</th>
              <th>AST</th>
              <th>GAME ID</th>
              <th>GAME </th>
            </tr>
          </thead>
          <tbody>
            {playerStats.map(stats => (
              <tr key={stats.id}>
                <td>{stats.player.first_name} {stats.player.last_name}</td>
                <td>{stats.team.full_name}</td>
                <td>{stats.pts}</td>
                <td>{stats.reb}</td>
                <td>{stats.ast}</td>
                <td>{stats.game.id}</td>
                <td>{stats.game.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

export default PlayerStatsTable;



// "use client";

// import styles from "./page.module.css";
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';


// function ViewStats(gameId) 
// {
//   const [stats, setStats] = useState([]);

//   useEffect(() => {
//     const fetchStats = async () => 
//     {
//       try 
//       {
//         const response = await axios.get(`https://www.balldontlie.io/api/v1/stats?game_ids[]=${gameId}`);
//         setStats(response.data.data);
//       } 
//       catch (error) 
//       {
//         console.error('Error fetching stats:', error);
//       }
//     };

//     fetchStats();
//   }, [gameId]);


//   return (
//     <>
//     <div>
//       <h1>Game Stats</h1>
//       {stats.map(game => (
//         <h2 className={styles.title}>{game.player.first_name} {game.player.last_name}</h2>
//       )      
//         )}
      
//       {/* <table>
//         <thead>
//           <tr>
//             <th>Game</th>
//             <th>Player</th>
//             <th>PTS</th>
//             <th>REB</th>
//             <th>AST</th>
//           </tr>
//         </thead>
//         <tbody>
//           {stats.map(game => (
//             <tr key={game.id}>
//               <td>{game.visitor_team.full_name} @ {game.home_team.full_name}</td>
//               <td>{game.player.first_name} {game.player.last_name}</td>
//               <td>{game.visitor_team.full_name}</td>
//               <td>{game.home_team_score} - {game.visitor_team_score}</td>
//               <td>{game.time}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table> */}
//     </div>
//     </>
//   )
// }

// export default ViewStats;