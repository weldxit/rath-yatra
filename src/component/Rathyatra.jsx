import React from "react";
import YouTube from "react-youtube";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Rathyatra.css"; // Create and import your CSS file for styling

const RathYatra = () => {
  const videoId = "cfx4oUHcPVk"; // Replace with your YouTube video IDconst
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("https://propickproperty.in/backend/category-web/10")
      .then((response) => response.json())
      .then((data) => setArticles(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="rath-yatra-container">
      <h1 className="heading">Lord Jagannath's Rath Yatra</h1>
      <div className="image-container">
        <img
          src={require("../images/rathyatra.jpg")}
          alt="Rath Yatra"
          className="full-screen-image"
        />
      </div>
      <div className="youtube-player-container">
        <h2>Watch on YouTube </h2>
        <YouTube videoId={videoId} className="youtube-player" />
      </div>
      <div>
        <h2 style={{ fontSize: "25px" }}>
          Rath Yatra 2024 <span style={{ color: "red" }}>|</span> Related
          Updates
        </h2>
        {/* <hr style={{ width: "10%", height: "5px", backgroundColor: "red" }} /> */}
      </div>
      <div className="articles-container">
        {articles.map((article, index) => (
          <div key={index} className="article-card">
            <img
              src={article.image}
              alt={article.title}
              className="article-image"
            />
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <a href={'thequiver.in'} target="_blank" rel="noopener noreferrer">
              Read more
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RathYatra;
