"use client";

import { useState, useEffect } from "react";
import axios from 'axios';

import { Button, ButtonGroup } from "react-bootstrap";

import styles from "./page.module.css";

import PlayerStatsTable from "./playerstats";




const App = () => {
    // State to manage the active button and content visibility
    const [activeButton, setActiveButton] = useState(null);
  
    // Function to handle button click
    const handleClick = (buttonId) => {
      setActiveButton(buttonId);
    };
  
    return (
      <div>
        <h1>PLAYER STATS</h1>
        <ButtonGroup className={styles.buttonGroup} aria-label="Basic example">
          {/* Define buttons with onClick handlers */}
          <Button className={styles.button} variant="primary" onClick={() => handleClick(1)} active={activeButton === 1}>Button 1</Button>
          <Button className={styles.button} variant="primary" onClick={() => handleClick(2)} active={activeButton === 2}>Button 2</Button>
        </ButtonGroup>
  
        {/* Render content based on activeButton */}
        {activeButton === 1 && <div><PlayerStatsTable id="1038257"/></div>}
        {activeButton === 2 && <div><PlayerStatsTable id="1038260"/></div>}
      </div>
    );
  };
  
  export default App;