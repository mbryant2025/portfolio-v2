import React, { useEffect, useState } from 'react';
import {Routes, Route } from 'react-router-dom';

import Homepage from './pages/Homepage';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Games from './pages/Games';

const App: React.FC = () => {
  const [filters, setFilters] = useState<string[]>([]);

  useEffect(() => {
    fetch('/name-map.json')
      .then((response) => response.json())
      .then((data) => {
        const filters = Object.keys(data);
        setFilters(filters);
      })
      .catch((error) => {
        console.error('Error fetching filters:', error);
      });
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/projects" element={<Projects filter={ undefined }/>} />
        <Route path="/skills" element={<Skills />} />
        {filters.map((filter) => (
          <Route
            key={filter}
            path={`/projects/${filter}`}
            element={<Projects filter={filter} />}
          />
        ))}
        <Route path="/games" element={<Games />} />
      </Routes>
    </div>
  );
};


export default App;
