// NewsPage.js
import React, { useEffect, useState } from 'react';
import './style.css';

const NewsPage = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch news data from the API
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('https://newsdata.io/api/1/news?apikey=pub_63770f5a8347c53c5d9b2da7d15f712ded8ae&q=law&country=in&language=en&category=business,crime,domestic,education');
        const data = await response.json();
        if (data.results) {
          setNewsData(data.results);
        } else {
          console.error('No news data found');
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching news:', error);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="news-page">
      <h1 className="news-heading">Latest News</h1>
      {loading ? (
        <p className="news-loading">Loading news...</p>
      ) : (
        <ul className="news-list">
          {newsData.map((news, index) => (
            <li key={index} className="news-item">
              <h2 className="news-title">{news.title}</h2>
              <p className="news-description">{news.description || 'No description available.'}</p>
              {news.link && (
                <a href={news.link} target="_blank" rel="noopener noreferrer" className="news-link">
                  Read more
                </a>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NewsPage;
