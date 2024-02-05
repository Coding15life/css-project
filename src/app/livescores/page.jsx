"use client";

import "src/app/globals.css";
import Image from "next/image";
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
    <div class="logo">
      <Image src={image1} width={100} height={100}/>
    </div>
    <div class="logo">
      <Image src={image2} width={100} height={100}/>
    </div>
  </div>

    
    <div class="teamName">
      <h2>{team1} vs {team2}</h2>
    </div>
    <div class="teamScore">
      <h3>{team1score} — {team2score}</h3>
    </div>
    
    </>
  );
}


// use vanilla fetch as fetcher
// deserialize the fetched data as json


export default function App()
{
  
    return (
      <section>
        <h1 class="title">Games</h1>
        
        <div class="game">
        <Game team1="GSW" team2="ATL" team1score="119" team2score="121" image1="/gsw-logo.png" image2="/atl-logo.jpg"/>
        </div>
        <p> 
          <h1>------------------------------</h1>
        </p>
        <div class="game">
        <Game team1="GSW" team2="DEN" team1score="127" team2score="135" image1="/gsw-logo.png" image2="/atl-logo.jpg"/>
        </div>
        <p> 
          <h1>------------------------------</h1>
        </p>
        <div class="game">
        <Game team1="LAC" team2="ATL" team1score="162" team2score="92" image1="/gsw-logo.png" image2="/atl-logo.jpg"/>
        </div>
      </section>
    );
}


const key = process.env.BASKETBALL_API_KEY;

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