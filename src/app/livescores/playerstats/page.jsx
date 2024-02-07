"use client";

import React, { useState, useEffect } from 'react';
import axios from 'axios';


import Spinner from "react-bootstrap/Spinner";
import styles from "./StatsTable.css";


//from chatgpt
const currentDate = new Date();

const year = currentDate.getFullYear();
const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); //pad start with 0 if the month is a single-digit
const day = currentDate.getDate().toString().padStart(2, '0');

const todayDate = `${year}-${month}-${day}`;


let gameIdClicked = null;



export default function PlayerStatsTable() {
    const [playerStats, setPlayerStats] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchPlayerStats = async () => {
        try {
          const response = await axios.get(`https://www.balldontlie.io/api/v1/stats?game.id=${gameIdClicked}`);
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