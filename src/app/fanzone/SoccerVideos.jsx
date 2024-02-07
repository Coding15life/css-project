
"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SoccerVideos = () => {
  const [videos, setVideos] = useState([]);
  const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
          params: {
            part: 'snippet',
            maxResults: 10,
            q: 'football highlights',
            type: 'video',
            key: apiKey
          }
        });
        setVideos(response.data.items);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, [apiKey]);

  return (
    <div>
      <h2>Soccer Videos</h2>
      <ul>
        {videos.map(video => (
          <li key={video.id.videoId}>
            <a href={`https://www.youtube.com/watch?v=${video.id.videoId}`} target="_blank" rel="noopener noreferrer">
              <img src={video.snippet.thumbnails.default.url} alt={video.snippet.title} />
              <p>{video.snippet.title}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SoccerVideos;
