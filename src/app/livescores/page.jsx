"use client";

import styles from './page.module.css';
//import LiveScores from "./livescores.jsx";

import Image from "next/image";
import NBAScoreBoard from './livescores.jsx';
import ViewStats from './viewstats.jsx';
import PlayerStatsTable from './viewstats.jsx';


function Game({ team1, team2, team1score, team2score, image1, image2 }) {
  return (
    <>
      <div class="container">
        <div className={styles.gameName}>
          <Image src={image1} width={140} height={150} />
          <div className={styles.teamName}>
            <h2>{team1} vs {team2}</h2>
          </div>
          <Image src={image2} width={140} height={110} />
        </div>
      </div>

      <div className={styles.teamScore}>
        <h3>{team1score} — {team2score}</h3>
        <h5>Q4: 4:35</h5>
      </div>

    </>
  );
}


export default function App() {
  return (
    <>
    <NBAScoreBoard />
    {/* <ViewStats /> */}
    {/* <PlayerStatsTable /> */}
    </>
    
    // <section>

    //   {/* <h1 className={styles.title}>Games</h1> */}

    //   {/* <div className={styles.game}>
    //   <Game team1="GSW" team2="ATL" team1score="119" team2score="121" image1="/gsw-logo.png" image2="/atl-logo.jpg"/>
    //   </div>
    //   <div className={styles.line}></div>

    //   <div className={styles.game}>
    //   <Game team1="GSW" team2="DEN" team1score="127" team2score="135" image1="/gsw-logo.png" image2="/denver-logo.png"/>
    //   </div>
    //   <div className={styles.line}></div>

    //   <div className={styles.game}>
    //   <Game team1="GSW" team2="OKC" team1score="162" team2score="92" image1="/gsw-logo.png" image2="/okc-logo.png"/>
    //   </div> */}
    // </section>
  );
}








//-----------------------------------------------------------


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function NBAScoresPage() {
//   const [scores, setScores] = useState([]);

//   useEffect(() => {
//     const fetchScores = async () => {
//       try {
//         const response = await axios.get('https://www.balldontlie.io/api/v1/games');
//         setScores(response.data.data);

//       } catch (error) {
//         console.error('Error fetching scores:', error);
//       }
//     };

//     fetchScores();
//     console.log("Hello World");
//   }, []);

//   return (
//     <div>
//       <h1>NBA Scores</h1>
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

// export default NBAScoresPage;

