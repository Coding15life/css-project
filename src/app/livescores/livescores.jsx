"use client";

import Spinner from "react-bootstrap/Spinner";
import useSWR from "swr";

import React, { useState, useEffect } from 'react';
import axios from 'axios';


const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function LiveScores() {
  const [scores, liveScores] = useState([]); 

  useEffect(() => 
  {
    const fetchScores = async () => 
    {
      try 
      {
        const response = await axios.get('https://www.balldontlie.io/api/v1/games'); //http://localhost:5000/api/start_date
        setScores(response.data);
      }
      catch (error)
      {
        console.error('Error fetching scores:', error);
      }
    };

    fetchScores();
    }, []);

  return (
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
