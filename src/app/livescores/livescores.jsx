"use client";
import Image from "next/image"; 

import Spinner from "react-bootstrap/Spinner";
import useSWR from "swr";

// use vanilla fetch as fetcher
// deserialize the fetched data as json
const fetcher = (...args) => fetch(...args).then((res) => res.json());


function ScoreBoard ({className, team, image}) 
{
  return (
    <>
    <h3>{className}</h3>
    <h4>{team}</h4>

    <Image src={image} width={300} height={285}/>
    </>
  );
}

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
      <h1>My Top 3 Basketball Players</h1>
      <ScoreBoard className={data.continent} team={data.cityName} image="/gsw-logo.png"/>
      <ScoreBoard className="Kobe Bryant" team="Los Angeles Lakers" image="/kobe bryant dribbling wallpaper.jpg"/>
      <ScoreBoard className="Kyrie Irving" team="Dallas Mavericks" image="/kyrie irving portrait wallpaper.jpeg"/>
    </section>
  );
}
  
