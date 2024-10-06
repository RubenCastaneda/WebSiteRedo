import React from "react";
import { Link } from "react-router-dom";

const HomePage = ({ forums }) => {
  return (
    <div>
      <h2>All Forums</h2>
      {forums.length === 0 ? (
        <p>No forums available. Be the first to create one!</p>
      ) : (
        forums.map((forum, index) => (
          <div key={index}>
            <h3>{forum.title}</h3>
            <p>{forum.description}</p>
            <Link to={`/forum/${index}`}>View Forum</Link>
          </div>
        ))
      )}
    </div>
  );
};

export default HomePage;
