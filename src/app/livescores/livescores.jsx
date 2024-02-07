"use client";

import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Link from 'next/link';

import Spinner from "react-bootstrap/Spinner";

//from chatgpt
const currentDate = new Date();

const year = currentDate.getFullYear();
const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); //pad start with 0 if the month is a single-digit
const day = currentDate.getDate().toString().padStart(2, '0');

const todayDate = `${year}-${month}-${day}`;


let gameIdClicked = null;




function NBAScoreBoard() {
  const [scores, setScores] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchScores = async () => 
    {
      try 
      {                                                                                     //year-1 since the season returned is the season that the year started
        const response = await axios.get(`https://www.balldontlie.io/api/v1/games?seasons[]=${year-1}&start_date=${todayDate}&end_date=${todayDate}`);
        setScores(response.data.data);
        setLoading(false);
      } 
      catch (error) 
      {
        console.error('Error fetching scores:', error);
        setLoading(false);
      }

      
    };

    fetchScores();
  }, []);


  const handleClick = (gameId) => 
  {
    gameIdClicked = gameId;
    console.log(`Clicked game: ${gameId}`);
  }


  return (
    <>
    <div>
      <h1>NBA Live Scoreboard</h1>
      <div>
      {loading && <Spinner animation="border" role="status">
                <h3 className="visually-hidden">Loading scoreboard...</h3>
              </Spinner>}
      </div>      

      <table class="scorestable">
        <thead>
          <tr>
            <th>GAME</th>
            <th>HOME TEAM</th>
            <th>VISITOR TEAM</th>
            <th>SCORE</th>
            <th>TIME REMAINING</th>
            <th>VIEW STATS</th>
          </tr>
        </thead>
        <tbody>
          {scores.map(game => (
            <tr key={game.id} onClick={() => handleClick(game.id)}>
              <td>{game.id}</td>
              <td>{game.home_team.full_name}</td>
              <td>{game.visitor_team.full_name}</td>
              <td>{game.home_team_score} - {game.visitor_team_score}</td>
              <td>{game.time}</td>
              <td>{}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
    
  );
}

export default NBAScoreBoard;








// export function ViewStats() 
// {
//   const [stats, setStats] = useState([]);

//   useEffect(() => {
//     const fetchStats = async () => 
//     {
//       try 
//       {
//         const response = await axios.get(`https://www.balldontlie.io/api/v1/stats??seasons[]=2018&seasons[]=2015&player_ids[]=1&player_ids[]=2&postseason=true`);
//         setStats(response.data.data);
//       } 
//       catch (error) 
//       {
//         console.error('Error fetching stats:', error);
//       }
//     };

//     fetchStats();
//   }, []);


//   return (
//     <>
//     <div>
//       <h1>Game Stats</h1>
//       <button onClick={fetchStats}>Fetch Data</button>
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









// "use client";

// //import styles from "./page.module.css";
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';


// //const fetcher = (...args) => fetch(...args).then((res) => res.json());

// function LiveScores() {
//   const [scores, setScores] = useState([]); 

//   useEffect(() => 
//   {
//     const fetchScores = async () => 
//     {
//       try 
//       {
//         const response = await axios.get('https://www.balldontlie.io/api/v1/games'); //http://localhost:5000/api/start_date
//         setScores(response.data.data);
//       }
//       catch (error)
//       {
//         console.error('Error fetching scores:', error);
//       }
//     };

//     fetchScores();
//     }, []);

//   return (
//       <div>
//       <h1 className={styles.title}>Live NBA Scores</h1>
//       <ul>
//         {scores.map(score => (
//           <li key={score.id}>
//             {score.home_team.full_name} {score.home_team_score} - {score.visitor_team_score} {score.visitor_team.full_name}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default LiveScores;

// /*
// export default function App(){
//     const { data, error, isLoading } = useSWR("https://freeipapi.com/api/json/", fetcher);

//     if (error) {
//     return <h1>failed to load</h1>;
//     }

//     if (isLoading) {
//     return (
//         <Spinner animation="border" role="status">
//             <span className="visually-hidden">Loading...</span>
//         </Spinner>
//         );
//     }

//   return (
//     <section>
//       <div>
//       <h1>Live NBA Scores</h1>
//       <ul>
//         {scores.map((score, index) => (
//           <li key={index}>
//             {score.team1} vs {score.team2}: {score.score}
//           </li>
//         ))}
//       </ul>
//     </div>
//     </section>
//   );
// }
// */
