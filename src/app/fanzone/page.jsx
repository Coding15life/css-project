/*

"use client";

import React from 'react';
import BasketballVideos from './BasketballVideos';
import SoccerVideos from './SoccerVideos';
import BaseballVideos from './BaseballVideos';
import './page.css';

const Page = () => {
  const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY; // Ensure this is set in your .env file
  
  return (
    <div className="page-container">
      <h1>Fan Zone</h1>
      <BasketballVideos apiKey={apiKey} />
      <SoccerVideos apiKey={apiKey} />
      <BaseballVideos apiKey={apiKey} />
      {/* Add more sections as needed  }
    </div>
  );
};

export default Page;
*/


import React from 'react';

export async function getServerSideProps(context) {
  // Replace 'YOUR_API_KEY' with your actual YouTube API key.
  const apiKey = 'AIzaSyDaiPgz2-lGZLN18ecQAXPaQQVVvpOAlyI';
  const res = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=NBA+highlights&type=video&key=${apiKey}`);
  const data = await res.json();
  
  // Pass the videos as props to the page component.
  return { props: { basketballVideos: data.items || [] } };
}

const Page = ({ basketballVideos }) => {
  return (
    <div className="page-container">
      <h1>Fan Zone</h1>
      <div>
        <h2>Basketball Videos</h2>
        <ul>
          {basketballVideos.map((video) => (
            <li key={video.id.videoId}>
              <a href={`https://www.youtube.com/watch?v=${video.id.videoId}`} target="_blank" rel="noopener noreferrer">
                <img src={video.snippet.thumbnails.default.url} alt={video.snippet.title} />
                <p>{video.snippet.title}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Page;



