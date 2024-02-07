import React from 'react';
import BasketballVideos from '../../components/BasketballVideos';
import BaseballVideos from '../../components/BaseballVideos';
import SoccerVideos from '../../components/SoccerVideos';
import FootballVideos from '../../components/FootballVideos'; 
import './page.css';
 // Adjust the path according to your project structure

const Page = () => {
  return (
    <div>
          <h1 className="fanzone-header">Fan Zone</h1>
          <BasketballVideos />
          <BaseballVideos />
          <SoccerVideos />
          <FootballVideos />
    </div>
  );
};

export default Page;
