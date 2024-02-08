// Rex Joseph S10255849

"use client";
// Importing necessary React functionalities, Carousel component from react-bootstrap, and Bootstrap's CSS
import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

// Asynchronous function to fetch baseball video highlights from YouTube API
async function getBaseballVideos() {
    try {
        // Making a fetch request to YouTube's search API with specific query parameters
        const res = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=baseball+highlights&type=video&key=AIzaSyDaiPgz2-lGZLN18ecQAXPaQQVVvpOAlyI`);
        if (!res.ok) {
            // If the response is not ok, throw an error
            throw new Error('Failed to fetch data');
        }
        // Returning the JSON response if successful
        return res.json();
    } catch (error) {
        // Logging any errors that occur during the fetch operation
        console.error('Error fetching baseball videos:', error);
        throw error;
    }
}

// React component for displaying baseball videos
function BaseballVideos() {
    // State to hold the list of videos fetched from the API
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        // Fetching videos when the component mounts
        async function fetchVideos() {
            const data = await getBaseballVideos();
            setVideos(data.items); // Updating the videos state with the fetched data
        }
        fetchVideos();
    }, []); // Empty dependency array means this effect runs once on mount

    // Rendering the component
    return (
        <div className="baseball-videos-section">
            <h2 className="sports-header">Latest Baseball Highlights</h2>
            <Carousel>
                {videos.map((video, index) => (
                    // Mapping through videos to create a Carousel.Item for each video
                    <Carousel.Item key={index} className="video-carousel-item">
                        <a href={`https://www.youtube.com/watch?v=${video.id.videoId}`} target="_blank" rel="noopener noreferrer" className="video-link">
                            <div className="video-thumbnail-wrapper">
                                <img
                                    className="d-block w-100 video-thumbnail"
                                    src={video.snippet.thumbnails.high.url} // Video thumbnail image
                                    alt={video.snippet.title} // Alt text for the image
                                />
                                <div className="play-button">▶</div> {/* Custom play button overlay */}
                            </div>
                            <Carousel.Caption>
                                <h3>{video.snippet.title}</h3> {/* Video title */}
                            </Carousel.Caption>
                        </a>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
}

// Exporting the BaseballVideos component for use in other parts of the application
export default BaseballVideos;

