import { useState, useEffect } from 'react';
import axios from 'axios';

const NewsSection = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios.get('https://site.api.espn.com/apis/site/v2/sports/{sport}/{league}/news')
      .then(response => {
        setNews(response.data.articles);
      })
      .catch(error => {
        console.error('Error fetching news:', error);
      });
  }, []);

  return (
    <section className="news-section">
      <h2>Latest News</h2>
      <div className="news-articles">
        {news.map((article, index) => (
          <div key={index} className="news-article">
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default NewsSection;