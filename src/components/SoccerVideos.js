    // Rex Joseph S10255849

"use client";
// Import necessary React functionalities and the Carousel component from react-bootstrap for UI, along with Bootstrap's CSS for styling
import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensures Bootstrap CSS is imported for styling purposes

// Asynchronous function to fetch soccer highlights videos from the YouTube API
async function getSoccerVideos() {
    try {
        // Fetch request to YouTube API with parameters for searching soccer highlights videos
        const res = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=soccer+highlights&type=video&key=AIzaSyDaiPgz2-lGZLN18ecQAXPaQQVVvpOAlyI`);
        if (!res.ok) {
            // If the fetch request fails, throw an error
            throw new Error('Failed to fetch data');
        }
        // Return the JSON response from the API if successful
        return res.json();
    } catch (error) {
        // Log any errors that occur during the fetch operation
        console.error('Error fetching soccer videos:', error);
        throw error;
    }
}

// React component for displaying soccer videos
function SoccerVideos() {
    // State hook to store the fetched videos
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        // Fetch videos from the API and update state when the component mounts
        async function fetchVideos() {
            const data = await getSoccerVideos();
            setVideos(data.items); // Update the videos state with the fetched data
        }
        fetchVideos();
    }, []); // Empty dependency array ensures this effect runs once on mount

    // Component render method
    return (
        <div className="soccer-videos-section">
            <h2 className="sports-header">Latest Soccer Highlights</h2> {/* Heading for the video section */}
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

// Export the SoccerVideos component for use in other parts of the application
export default SoccerVideos;

