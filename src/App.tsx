import React, { useEffect, useState } from 'react';
import {Routes, Route } from 'react-router-dom';

import Homepage from './pages/Homepage';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Games from './pages/Games';

import SnakePlus from './pages/games/SnakePlus';
import SnakePlusPlus from './pages/games/SnakePlusPlus';
import SnakePlusPlusPlus from './pages/games/SnakePlusPlusPlus';
import SnakeMinusMinusMinus from './pages/games/SnakeMinusMinusMinus';
import TechnicalArticle from './components/TechnicalArticle';


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

        <Route path="/projects/flight-tracker" element={<TechnicalArticle htmlFilePath= { "/articles/flight-tracker/flight-tracker.html" } />} />
        <Route path="/projects/ball-balancing-robot" element={<TechnicalArticle htmlFilePath= { "/articles/ball-balancing-robot/ball-balancing-robot.html" } />} />
        <Route path="/projects/pyequations" element={<TechnicalArticle htmlFilePath={ "/articles/pyequations/pyequations.html" } />} />
        {/* ADD-ARTICLE-HERE */}
        {/* See article-build.sh -- automatically generates routes for articles */}

        <Route path="/games" element={<Games />} />
        <Route path="/games/snake-plus" element={<SnakePlus />} />
        <Route path="/games/snake-plus-plus" element={<SnakePlusPlus />} />
        <Route path="/games/snake-plus-plus-plus" element={<SnakePlusPlusPlus />} />
        <Route path="/games/snake-minus-minus-minus" element={<SnakeMinusMinusMinus />} />

      </Routes>
    </div>
  );
};


export default App;
