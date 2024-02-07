/*
import React, { useState, useEffect } from 'react';

const BasketballVideos = () => {
  const [videos, setVideos] = useState([]);
  const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY

  useEffect(() => {
    const fetchVideos = async () => {
      console.log('about to fetch');
      try {
        const response = await fetch('https://www.googleapis.com/youtube/v3/search', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          params: JSON.stringify({
            part: 'snippet',
            maxResults: 10,
            q: 'NBA highlights',
            type: 'video',
            key: apiKey
          }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setVideos(data.items);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, [apiKey]);

  return (
    <div>
      <h2>Basketball Videos</h2>
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

export default BasketballVideos;*/
import React, { useState, useEffect } from 'react';

const BasketballVideos = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=NBA+highlights&type=video&key=AIzaSyDaiPgz2-lGZLN18ecQAXPaQQVVvpOAlyI')
      .then(response => response.json())
      .then(data => {
        setVideos(data.items);
        console.log(data.items); // Check if the items are being logged
      })
      .catch(error => console.error('Error fetching videos:', error));
  }, []);

  return (
    <div>
      <h2>Basketball Videos</h2>
      <ul>
        {videos.map(video => (
          <li key={video.id.videoId}>
            <a href={`https://www.youtube.com/watch?v=${video.id.videoId}`} target="_blank" rel="noopener noreferrer">
              <p>{video.snippet.title}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BasketballVideos;


