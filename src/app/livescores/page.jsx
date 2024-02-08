"use client";

import styles from './page.module.css';

import React, { useState, useEffect } from 'react';

import { Button, ButtonGroup } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

import Image from "next/image";

import NBAScoreBoard from './gameschedule/gameschedule.jsx';
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


const MyComponent = () => {
  // State to manage the active button and content visibility
  const [activeButton, setActiveButton] = useState(null);

  // Function to handle button click
  const handleClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  return (
    <>
      <div className={styles.cardGroup}>
        <Card className={styles.card} style={{ width: '18rem' }}>
          <Card.Img className={styles.cardImage} variant="top" src="/nba-logo.jpg" />
          <Card.Body>
            <Card.Title>NBA GAME SCHEDULE</Card.Title>
            <Card.Text>
              View the most recent games of the season.
            </Card.Text>
            <Button href="/livescores/gameschedule" className={styles.cardbutton} variant="primary" onClick={() => handleClick(1)} active={activeButton === 1}>VIEW</Button>
          </Card.Body>
        </Card>

        <Card className={styles.card} style={{ width: '18rem' }}>
          <Card.Img className={styles.cardImage} variant="top" src="/basketball.png"/>
          <Card.Body>
            <Card.Title>PLAYER STATS</Card.Title>
            <Card.Text>
              View all players' stats
            </Card.Text>
            <Button href="/livescores/playerstats" className={styles.cardbutton} variant="primary" onClick={() => handleClick(2)} active={activeButton === 2}>VIEW</Button>
          </Card.Body>
        </Card>

        {/* <Card className={styles.card} style={{ width: '18rem' }}>
          <Card.Img className={styles.cardImage} variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button className={styles.cardbutton} variant="primary" onClick={() => handleClick(3)} active={activeButton === 3}>Go somewhere</Button>
          </Card.Body>
        </Card> */}
      </div>

      <div>
        {/* Render content based on activeButton */}
        {activeButton === 1 && <div></div>}
        {activeButton === 2 && <div></div>}
        {activeButton === 3 && <div>Content for Button 3</div>}
      </div>
    </>
  );
};

export default MyComponent;




export function App() {
  return (
    <>
      <NBAScoreBoard />
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