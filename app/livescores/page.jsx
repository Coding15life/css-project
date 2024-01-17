"use client";
import Image from "next/image";
import "src/app/globals.css";

function Player ({name, team, image}) 
{
  return (
    <>
    <h3>{name}</h3>
    <h4>Team: {team}</h4>

    <Image src={image} width={1500} height={850}/>
    </>
  );
}

export default function App(){
  return (
    <section>
      <h1>My Top 3 Basketball Players</h1>
      <Player name="Stephen Curry" team="Golden State Warriors" image="/stephen curry portrait wallpaper.jpg"/>
      <Player name="Kobe Bryant" team="Los Angeles Lakers" image="/kobe bryant dribbling wallpaper.jpg"/>
      <Player name="Kyrie Irving" team="Dallas Mavericks" image="/kyrie irving portrait wallpaper.jpeg"/>
    </section>
  );
}
  
