import { useState, useEffect } from 'react';
import axios from 'axios';

const NewsSection = () => {
  const [dogImages, setDogImages] = useState([]);

  useEffect(() => {
    const fetchDogImages = async () => {
      try {
        const response = await axios.get('https://dog.ceo/api/breeds/image/random/5');
        setDogImages(response.data.message);
      } catch (error) {
        console.error('Error fetching dog images:', error);
      }
    };

    fetchDogImages();
  }, []);

  return (
    <section className="news-section">
      <h2>Latest Dog Images</h2>
      <div className="dog-images">
        {dogImages.map((image, index) => (
          <div key={index} className="dog-image">
            <img src={image} alt={`Dog ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default NewsSection;
