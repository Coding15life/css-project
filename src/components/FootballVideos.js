// Rex Joseph S10255849

"use client";
// Importing necessary React functionalities and components
import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS for styling

// Asynchronous function to fetch NFL football highlights videos from YouTube's API
async function getFootballVideos() {
    try {
        // Fetch request to YouTube API with parameters for searching NFL highlights videos
        const res = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=NFL+highlights&type=video&key=AIzaSyDaiPgz2-lGZLN18ecQAXPaQQVVvpOAlyI`);
        if (!res.ok) {
            // If the fetch request is unsuccessful, throw an error
            throw new Error('Failed to fetch data');
        }
        // Return the JSON response from the API if successful
        return res.json();
    } catch (error) {
        // Log any errors that occur during the fetch operation
        console.error('Error fetching NFL football videos:', error);
        throw error;
    }
}

// React component for displaying NFL football videos
function FootballVideos() {
    // State hook to store the fetched videos
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        // Fetch videos from the API and update state when the component mounts
        async function fetchVideos() {
            const data = await getFootballVideos();
            setVideos(data.items); // Update the videos state with the fetched data
        }
        fetchVideos();
    }, []); // Empty dependency array ensures this effect runs once on mount

    // Component render method
    return (
        <div className="football-videos-section">
            <h2 className="sports-header">Latest NFL Football Highlights</h2> {/* Heading for the video section */}
            <Carousel> {/* Bootstrap Carousel component for sliding through videos */}
                {videos.map((video, index) => (
                    // Map through videos state to render a Carousel.Item for each video
                    <Carousel.Item key={index} className="video-carousel-item">
                        <a href={`https://www.youtube.com/watch?v=${video.id.videoId}`} target="_blank" rel="noopener noreferrer" className="video-link">
                            {/* Link to the video on YouTube, opens in a new tab */}
                            <div className="video-thumbnail-wrapper">
                                {/* Thumbnail image of the video */}
                                <img
                                    className="d-block w-100 video-thumbnail"
                                    src={video.snippet.thumbnails.high.url}
                                    alt={video.snippet.title}
                                />
                                <div className="play-button">▶</div> {/* Custom play button overlay */}
                            </div>
                            <Carousel.Caption>
                                <h3>{video.snippet.title}</h3> {/* Video title displayed on hover/click */}
                            </Carousel.Caption>
                        </a>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
}

// Export the FootballVideos component for use in other parts of the application
export default FootballVideos;

