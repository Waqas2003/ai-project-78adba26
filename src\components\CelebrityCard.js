import React from 'react';

function CelebrityCard({ celebrity }) {
  return (
    <div>
      <h2>{celebrity.name}</h2>
      <p>{celebrity.bio}</p>
    </div>
  );
}

export default CelebrityCard;