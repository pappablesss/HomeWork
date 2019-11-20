import React from 'react';

export default function Home({ filtered }) {
  return (
    <div className="main">
      {
        filtered.map((photo) => (
          <div key={photo.id} className="img-container">
            <img src={photo.thumbnailUrl} alt={photo.title} />
          </div>
        ))
      }
    </div>
  );
}