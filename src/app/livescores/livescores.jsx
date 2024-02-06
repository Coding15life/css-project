"use client";

import styles from "./page.module.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';


//const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function LiveScores() {
  const [scores, setScores] = useState([]); 

  useEffect(() => 
  {
    const fetchScores = async () => 
    {
      try 
      {
        const response = await axios.get('https://www.balldontlie.io/api/v1/games'); //http://localhost:5000/api/start_date
        const jsonData = await response.json();
        setScores(jsonData.data.data);
      }
      catch (error)
      {
        console.error('Error fetching scores:', error);
      }
    };

    fetchScores();
    }, []);

  return (
    <>
    <div>
      <h1 className={styles.title}>Live NBA Scores</h1>

      {scores && scores.map(game => (
        <div key={game.id}>
          <h2>{game.home_team.full_name} vs {game.visitor_team.full_name}</h2>
          <p>Status: {game.status}</p>
          <p>Season: {game.season}</p>
          <p>Period: {game.period}</p>
          <p>Home Team Score: {game.home_team_score}</p>
          <p>Visitor Team Score: {game.visitor_team_score}</p>
        </div>
      ))}

      {/* <h2>Data: {scores.id}</h2>
      {<ul>
        {scores.map(([key, value]) => (
          <li key={key}>
            <strong>{key}: {value.home_team.full_name} vs {value.visitor_team.full_name}: {value.home_team_score} - {value.visitor_team_score}</strong>
          </li>
        ))}
      </ul>} */}
    </div>
    </>
  )
}

/*
export default function App(){
    const { data, error, isLoading } = useSWR("https://freeipapi.com/api/json/", fetcher);

    if (error) {
    return <h1>failed to load</h1>;
    }

    if (isLoading) {
    return (
        <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
        );
    }

  return (
    <section>
      <div>
      <h1>Live NBA Scores</h1>
      <ul>
        {scores.map((score, index) => (
          <li key={index}>
            {score.team1} vs {score.team2}: {score.score}
          </li>
        ))}
      </ul>
    </div>
    </section>
  );
}
*/
