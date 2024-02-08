"use client";

import styles from './page.module.css';

import React, { useState, useEffect } from 'react';

import ReactDOM from 'react-dom';
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch, Redirect } from 'react-router-dom';


import Image from "next/image";

import NBAScoreBoard from './livescores.jsx';
import PlayerStatsTable from "/src/app/livescores/playerstats/playerstats.jsx";



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


// ReactDOM.render(
//   <React.StrictMode>
//     <NBAScoreBoard />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


export default function App() {
  return (
    <>
    <NBAScoreBoard />
      {/* <div>
      <Switch>
        <Route path="/" exact component={NBAScoreBoard} />
        <Route path="/playerstats" component={PlayerStatsTable} />
        <Redirect to="/404" />
      </Switch>
    </div> */}
    </>
  );
  <>
    <NBAScoreBoard />
    {/* <Router>
      <Routes>
      <Route exact path="/" component={HomePage} />
        <Route path="/about" component={PlayerStatsPage} />
        <Route path="/contact" component={ContactPage} />
      </Routes>
    </Router>    */}
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
}