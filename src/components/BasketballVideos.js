"use client";

import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

async function getBasketballVideos() {
    try {
        const res = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=basketball+highlights&type=video&key=AIzaSyDaiPgz2-lGZLN18ecQAXPaQQVVvpOAlyI`);
        if (!res.ok) {
            throw new Error('Failed to fetch data');
        }
        return res.json();
    } catch (error) {
        console.error('Error fetching basketball videos:', error);
        throw error;
    }
}

function BasketballVideos() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        async function fetchVideos() {
            const data = await getBasketballVideos();
            setVideos(data.items);
        }
        fetchVideos();
    }, []);

    return (
        <div>
            <h2 className="sports-header">Latest Basketball Highlights</h2>
            <Carousel>
                {videos.map((video, index) => (
                    <Carousel.Item key={index} className="video-carousel-item">
                        <a href={`https://www.youtube.com/watch?v=${video.id.videoId}`} target="_blank" rel="noopener noreferrer" className="video-link">
                            <div className="video-thumbnail-wrapper">
                                <img
                                    className="d-block w-100 video-thumbnail"
                                    src={video.snippet.thumbnails.high.url}
                                    alt={video.snippet.title}
                                />
                                <div className="play-button">▶</div> {/* Replace with your play button icon */}
                            </div>
                            <Carousel.Caption>
                                <h3>{video.snippet.title}</h3>
                            </Carousel.Caption>
                        </a>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
}

export default BasketballVideos;





//AIzaSyDaiPgz2-lGZLN18ecQAXPaQQVVvpOAlyI