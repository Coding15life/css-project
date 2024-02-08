// Rex Joseph S10255849

// Importing React library for building the component
import React from 'react';
// Importing individual video components for different sports
import BasketballVideos from '../../components/BasketballVideos';
import BaseballVideos from '../../components/BaseballVideos';
import SoccerVideos from '../../components/SoccerVideos';
import FootballVideos from '../../components/FootballVideos'; 
// Importing CSS for styling the page
import './page.css';
// Note: Adjust the import paths according to your project structure

// Defining the Page component as a functional component
const Page = () => {
  // The component returns a div that wraps the entire content of the Page
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

// Exporting the Page component for use in other parts of the application
export default Page;


// api key = AIzaSyDaiPgz2-lGZLN18ecQAXPaQQVVvpOAlyI
