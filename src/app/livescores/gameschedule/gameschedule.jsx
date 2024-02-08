"use client";

import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Button from "react-bootstrap/Button";

import "./LiveScoresTable.css";
import styles from "./page.module.css";

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';



let gameId = "";
localStorage.setItem('GameID', gameId);

//from chatgpt

const formatDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};


const currentDate = new Date();

const year = currentDate.getFullYear();
const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); //pad start with 0 if the month is a single-digit
const day = currentDate.getDate().toString().padStart(2, '0');

const todayDate = `${year}-${month}-${day}`;



let newDate = "";
let searchDate = "";


//from chatgpt with some extra edits
export function MyDatePicker() {
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    newDate = selectedDate;

    try {
      const dateObject = new Date(newDate);

      const year = dateObject.getFullYear();
      const month = (dateObject.getMonth() + 1).toString().padStart(2, '0'); // Add 1 to month index to match the format
      const day = dateObject.getDate().toString().padStart(2, '0');

      searchDate = `${year}-${month}-${day}`;
      //console.log(searchDate);
    }
    catch (error) {
      console.error('Error fetching player stats:', error);
    }
  }, [selectedDate]);

  return (
    <div>
      <h2>Select a Date</h2>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="yyyy-MM-dd"
        placeholderText="Select a date"
      />
    </div>
  );
}

export function handleClick(gameId, date) {
  console.log("Game ID: " + gameId);
  console.log("Date: " + date);
  return (
    gameId, date
  );
}




const NBAScoreBoard = () => {
  const [games, setGames] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');


  const handleClearDate = () => {
    setSelectedDate(todayDate);
  }


  useEffect(() => {
    const fetchGames = async () => {

      if (selectedDate === null) {
        handleClearDate();
        alert("Please enter a date. ");
      }
      else {
        const formattedDate = formatDate(selectedDate) //.toISOString().split('T')[0]; //gets date in ISO format, splits by T into array with 2 elements, then get the item in index 0 which is the date portion (1 will be the time portion)

        try {
          const response = await axios.get(`https://www.balldontlie.io/api/v1/games?start_date=${formattedDate}&end_date=${formattedDate}`); //`https://www.balldontlie.io/api/v1/games?seasons[]=${year-1}&start_date=${date}&end_date=${date}`
          setGames(response.data.data);
          setLoading(false);
          setError('');
        }
        catch (error) {
          setGames([]);
          setLoading(false);
          setError("Error fetching games data");
          console.error('Error fetching scores:', error);
        }
      }
    };

    fetchGames();
  }, [selectedDate]);

  const handleClick = (id) => {
    gameId = id;
  }

  return (
    <div>
      <div className={styles.dateAndTitle}>
        <h1 className={styles.title}>NBA GAME SCHEDULE</h1>

        <div className={styles.datepicker}>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat="yyyy-MM-dd"
            placeholderText="Select a date"
          />
        </div>
      </div>

      <table class="scorestable">
        <thead>
          <tr>
            <th>DATE</th>
            <th>GAME ID</th>
            <th>GAME</th>
            <th>SCORE</th>
            <th>GAME STATS</th>
            {/* Add more columns as needed */}
          </tr>
        </thead>
        <tbody>
          {games.map((game) => (
            <tr key={game.id}>
              <td>{game.date}</td>
              <td>{game.id}</td>
              <td>{game.visitor_team.full_name} vs {game.home_team.full_name}</td>
              <td>{game.home_team_score}—{game.visitor_team_score}</td>
              <td><Button href="/livescores/playerstats" variant="info" size="sm" onClick={() => handleClick(game.id)}>View</Button></td>
              {/* Add more columns as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NBAScoreBoard;

// function AlternateScoreboard () {
// const handleSubmit = (event) => {
//   event.preventDefault();
//   fetchScores();
// };


// const handleClick = async (gameId) => {
//   console.log(gameId);
// }


// return (
//   <>
//     <div>
//       <p></p>
//       <h1 class="title">NBA Live Scoreboard</h1>

//       <form onSubmit={handleSubmit}>

//         <DatePicker class="datepicker" selected={selectedDate} onChange={handleDateChange} />
//         <Button class="fetchbutton" type="submit">Fetch Games</Button>
//       </form>

//       {loading && <Spinner animation="border" role="status">
//         <h3 className="visually-hidden">Loading scoreboard...</h3>
//       </Spinner>}

//       {error && <p>{error}</p>}

//       <table class="scorestable">
//         <thead>
//           <tr>
//             <th>GAME ID</th>
//             <th>GAME</th>
//             <th>SCORE</th>
//             <th>TIME REMAINING</th>
//             <th>STATS</th>

//           </tr>
//         </thead>
//         <tbody>
//           {scores.map(game => (
//             <tr key={game.id} onClick={() => handleClick(game.id)}>
//               <td>{game.id}</td>
//               <td>{game.visitor_team.full_name} @ {game.home_team.full_name}</td>
//               <td>{game.visitor_team_score} - {game.home_team_score}</td>
//               <td>{game.time}</td>
//               <td><Button href="/livescores/playerstats" className="infobutton" size="sm">Info</Button>{' '}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   </>
// );
// }