import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UpcomingEventsSection = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('https://');
        setImages(response.data);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <section className="upcoming-events-section">
      <h2>Upcoming Events</h2>
      <div className="image-list">
        {images.map((image, index) => (
          <div key={index} className="image-item">
            <img src={image.url} alt={`Event ${index}`} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default UpcomingEventsSection;
