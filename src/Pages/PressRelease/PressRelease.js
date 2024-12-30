// PressReleasePage.js
import React, { useEffect, useState } from 'react';
import './style.css';

const PressReleasePage = () => {
  const [pressReleases, setPressReleases] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch press release data from the API
  useEffect(() => {
    const fetchPressReleases = async () => {
      try {
        const response = await fetch('https://newsdata.io/api/1/news?apikey=pub_63770f5a8347c53c5d9b2da7d15f712ded8ae&q=press-release&country=in&language=en&category=business');
        const data = await response.json();
        if (data.results) {
          setPressReleases(data.results);
        } else {
          console.error('No press release data found');
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching press releases:', error);
        setLoading(false);
      }
    };

    fetchPressReleases();
  }, []);

  return (
    <div className="news-page">
      <h1 className="news-heading">Press Releases</h1>
      {loading ? (
        <p className="news-loading">Loading press releases...</p>
      ) : (
        <ul className="news-list">
          {pressReleases.map((release, index) => (
            <li key={index} className="news-item">
              <h2 className="news-title">{release.title}</h2>
              <p className="news-description">{release.description || 'No description available.'}</p>
              {release.link && (
                <a href={release.link} target="_blank" rel="noopener noreferrer" className="news-link">
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

export default PressReleasePage;
