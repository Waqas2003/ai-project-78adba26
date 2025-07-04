import React from 'react';
import CelebrityCard from '../components/CelebrityCard';

function Celebrities() {
  const celebrities = [
    { id: 1, name: 'Celebrity 1', bio: 'Bio 1' },
    { id: 2, name: 'Celebrity 2', bio: 'Bio 2' },
    { id: 3, name: 'Celebrity 3', bio: 'Bio 3' },
  ];

  return (
    <div>
      <h1>Celebrities</h1>
      <ul>
        {celebrities.map((celebrity) => (
          <li key={celebrity.id}>
            <CelebrityCard celebrity={celebrity} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Celebrities;