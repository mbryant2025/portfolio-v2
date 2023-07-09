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

  // Removes some of the filters that will be hard coded
  const omitted = ['soldering', 'computer', 'oscilloscopes', 'spice', 'smt', 'milling', 'lathes', 'altium'];

  const filtersToDisplay = filters.filter((filter) => !omitted.includes(filter));

  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/projects" element={<Projects filter={ undefined }/>} />
        <Route path="/skills" element={<Skills />} />
        {filtersToDisplay.map((filter) => (
          <Route
            key={filter}
            path={`/projects/${filter}`}
            element={<Projects filter={filter} />}
          />
        ))}

        {/* Hard code some routes due to not having projects labeled with common skills */}
        <Route path="/projects/soldering" element={<Projects filter={ "electronics-design" }/>} />
        <Route path="/projects/computer" element={<Projects filter={ "electronics-design" }/>} />
        <Route path="/projects/oscilloscopes" element={<Projects filter={ "electronics-design" }/>} />
        <Route path="/projects/altium" element={<Projects filter={ "electronics-design" }/>} />
        <Route path="/projects/spice" element={<Projects filter={ "electronics-design" }/>} />
        <Route path="/projects/smt" element={<Projects filter={ "electronics-design" }/>} />
        <Route path="/projects/milling" element={<Projects filter={ "metalworking" }/>} />
        <Route path="/projects/lathes" element={<Projects filter={ "metalworking" }/>} />

        <Route path="/games" element={<Games />} />
      </Routes>
    </div>
  );
};


export default App;
