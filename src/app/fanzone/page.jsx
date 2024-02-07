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
      {/* Add more sections as needed */}
    </div>
  );
};

export default Page;