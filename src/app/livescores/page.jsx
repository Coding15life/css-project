"use client";

import styles from './page.module.css';
import "./livescores.jsx";

import Image from "next/image";
//import "src/app/livescores/livescores.jsx";
import { useState, useEffect } from "react";
import useSWR from "swr";
import Spinner from "react-bootstrap/Spinner";
import LiveScores from "./livescores";

import axios from 'axios';


const fetcher = (...args) => fetch(...args).then((res) => res.json());

function Game ({team1, team2, team1score, team2score, image1, image2}) 
{
  return (  
    <>
  <div class="container">
    <div className={styles.gameName}>
      <Image src={image1} width={140} height={150}/>
      <div className={styles.teamName}>
      <h2>{team1} vs {team2}</h2>
        </div>
      <Image src={image2} width={140} height={110}/>
    </div>
  </div>
    
    <div className={styles.teamScore}>
      <h3>{team1score} — {team2score}</h3>
      <h5>Q4: 4:35</h5>
    </div>
    
    </>
  );
}



export default function App()
{
  
    return (
      <section>
        <h1 className={styles.title}>Games</h1>
        
        <div className={styles.game}>
        <Game team1="GSW" team2="ATL" team1score="119" team2score="121" image1="/gsw-logo.png" image2="/atl-logo.jpg"/>
        </div>
        <div className={styles.line}></div>

        <div className={styles.game}>
        <Game team1="GSW" team2="DEN" team1score="127" team2score="135" image1="/gsw-logo.png" image2="/denver-logo.png"/>
        </div>
        <div className={styles.line}></div>

        <div className={styles.game}>
        <Game team1="GSW" team2="OKC" team1score="162" team2score="92" image1="/gsw-logo.png" image2="/okc-logo.png"/>
        </div>
      </section>
    );
}


/*
export function getData()
{
  const [data, setData] = useState([]);
  //const { data, error, isLoading } = useSWR("https://freeipapi.com/api/json/", fetcher);

  useEffect(() => {
    fetch('https://api.data.gov.sg/v1/environment/2-hour-weather-forecast')
       .then((response) => response.json())
       .then((data) => {
          console.log(data);
          setPosts(data);
       })
       .catch((err) => {
          console.log(err.message);
       });
 }, []);

 return (
  <div>
    <h2>Data: {data.name}</h2>
  </div>
 )
}
*/




//const key = process.env.BASKETBALL_API_KEY;

/*
const getData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('https://free-nba.p.rapidapi.com/teams/', {
        params: {
          search: 'curry'
        },
        headers: {
          'x-rapidapi-host': 'free-nba.p.rapidapi.com',
          'x-rapidapi-key': key // Make sure to replace with your actual API key
        }
      });

      setData(result.data);
    };

    fetchData();
  }, [data]);

  return (
    <div className="container">
      <h1 className="text-center">Title</h1>
      <h2>Data: {data.name}</h2>
    </div>
  );
};

getData;
*/


// const GamesList = () => {
//     const [games, setGames] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await fetch('https://v1.basketball.api-sports.io/games?date=2024-02-05', {
//                     headers: {
//                         'x-rapidapi-host': 'free-nba.p.rapidapi.com',
//                         'x-rapidapi-key': key // Make sure to replace with your actual API key
//                     }
//                 });
//                 const data = await response.json();
//                 setGames(data.response);
//                 setLoading(false);
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//                 setLoading(false);
//             }
//         };

//         fetchData();
//     }, []);

//     return (
//         <div>
//             <h2>Games List</h2>
//             {loading ? (
//                 <p>Loading...</p>
//             ) : (
//                 <ul>
//                     {games.map(game => (
//                         <li key={game.id}>
//                             <div>
//                                 <h3>{game.league.name}</h3>
//                                 <p>{game.league.country}</p>
//                                 <p>{game.league.flag}</p>
//                                 {/* Add more information as needed */}
//                             </div>
//                         </li>
//                     ))}
//                 </ul>
//             )}
//         </div>
//     );
// };

// export default GamesList;




/*
const options = {
  method: 'GET',
  url: 'https://free-nba.p.rapidapi.com/players',
  params: {
    page: '0',
    per_page: '25',
    search: 'curry'
  },
  headers: {
    'X-RapidAPI-Key': '5ceebaf68cmsh6cfe63162c7997dp18d0c2jsn53ac01d5ae39',
    'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data.name);
} catch (error) {
	console.error(error);
}

*/




/*function getData()
{
  const [posts, setPosts] = useState([]);
  //const { data, error, isLoading } = useSWR("https://freeipapi.com/api/json/", fetcher);


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
       .then((response) => response.json())
       .then((data) => {
          console.log(data);
          setPosts(data);
       })
       .catch((err) => {
          console.log(err.message);
       });
 }, []);


 return (
  <div className="posts-container">
     {posts.map((post) => {
        return (
           <div className="post-card" key={post.id}>
              <h2 className="post-title">{post.title}</h2>
              <p className="post-body">{post.body}</p>
              <div className="button">
              <div className="delete-btn">Delete</div>
              </div>
           </div>
        );
     })}
  </div>
  );
}

export default getData;
*/