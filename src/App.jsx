import React, { useState } from 'react';
import { puppyList } from './data.js';
import './App.css';
import './index.css';

function App() {
  const [puppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  const featuredPup = puppies.find((pup) => pup.id === featPupId);

  return (
    <div className="App">
      <h1>Puppies</h1>
      {featPupId && (
        <div className="details">
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
            {featuredPup.isCute && <li>Cute</li>}
            {featuredPup.tricks.length > 0 && (
              <li>
                Tricks: {featuredPup.tricks.map((trick, index) => (
                  <span key={trick.id}>
                    {index > 0 && ', '}
                    {trick.title}
                  </span>
                ))}

              </li>
            )}
          </ul>
        </div>
      )}
      {puppies.map((puppy) => (
        <div className="button" onClick={() => setFeatPupId(puppy.id)} key={puppy.id}>
          {puppy.name}
        </div>
      ))}
    </div>
  );
}

export default App;