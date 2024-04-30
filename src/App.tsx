import React, { useEffect, useState } from 'react';
import {Routes, Route } from 'react-router-dom';

import Homepage from './pages/Homepage';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Games from './pages/Games';
import ComingSoon from './pages/ComingSoon';

import Snake from './pages/games/Snake';
import SnakePlus from './pages/games/snake-plus/SnakePlus';
import SnakePlusPlus from './pages/games/snake-plus/SnakePlusPlus';
import SnakePlusPlusPlus from './pages/games/snake-plus/SnakePlusPlusPlus';
import SnakeMinusMinusMinus from './pages/games/snake-plus/SnakeMinusMinusMinus';
import MazeSolver from './pages/games/MazeSolver';
import SuperMemeBros from './pages/games/super-meme-bros/SuperMemeBros';
import SuperMemeBrosPlayer from './pages/games/super-meme-bros/SuperMemeBrosPlayer';
import EightQueens from './pages/games/EightQueens';

import TechnicalArticle from './components/TechnicalArticle';
import ProgrammableTiles from './pages/depth-articles/Tiles';
import SpokenDigit from './pages/depth-articles/SpokenDigit';

import SociologyArcade from './pages/games/Sociology';
import SociologyConnections from './pages/games/sociology/Connections';
import SociologyWordHunt from './pages/games/sociology/WordHunt';


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
  const omitted = ['soldering', 'computer', 'oscilloscopes', 'spice', 'smt', 'milling', 'lathes', 'altium', 'git'];

  const filtersToDisplay = filters.filter((filter) => !omitted.includes(filter));

  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/projects" element={<Projects filter={ undefined }/>} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
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

        {/* For git, just redirect to projects with no filter */}
        <Route path="/projects/git" element={<Projects filter={ undefined }/>} />

        <Route path="/projects/flight-tracker" element={<TechnicalArticle htmlFilePath= { "/articles/flight-tracker/flight-tracker.html" } />} />
        <Route path="/projects/ball-balancing-robot" element={<TechnicalArticle htmlFilePath= { "/articles/ball-balancing-robot/ball-balancing-robot.html" } />} />
        <Route path="/projects/pyequations" element={<TechnicalArticle htmlFilePath={ "/articles/pyequations/pyequations.html" } />} />
        <Route path="/projects/satellite-antenna" element={<TechnicalArticle htmlFilePath={ "/articles/satellite-antenna/satellite-antenna.html" } />} />
        <Route path="/projects/vision-guided-robot" element={<TechnicalArticle htmlFilePath={ "/articles/vision-guided-robot/vision-guided-robot.html" } />} />
        <Route path="/projects/cell-society" element={<TechnicalArticle htmlFilePath={ "/articles/cell-society/cell-society.html" } />} />
        <Route path="/projects/slogo" element={<TechnicalArticle htmlFilePath={ "/articles/slogo/slogo.html" } />} />
        <Route path="/projects/plane-gan" element={<TechnicalArticle htmlFilePath={ "/articles/plane-gan/plane-gan.html" } />} />
        <Route path="/projects/patient-watch" element={<TechnicalArticle htmlFilePath={ "/articles/patient-watch/patient-watch.html" } />} />
        <Route path="/projects/blue-devil-horns" element={<TechnicalArticle htmlFilePath={ "/articles/blue-devil-horns/blue-devil-horns.html" } />} />
        {/* <Route path="/projects/programmable-magna-tiles" element={<TechnicalArticle htmlFilePath={ "/articles/programmable-magna-tiles/programmable-magna-tiles.html" } />} /> */}
        <Route path="/projects/programmable-tiles" element={<ProgrammableTiles />} />
        <Route path="/projects/spoken-digit-recognition" element={<SpokenDigit />} />
        <Route path="/projects/maze-solver" element={<TechnicalArticle htmlFilePath={ "/articles/maze-solver/maze-solver.html" } />} />
        <Route path="/projects/patient-watch" element={<TechnicalArticle htmlFilePath={ "/articles/patient-watch/patient-watch.html" } />} />
        <Route path="/projects/ur5e-3d-printer" element={<TechnicalArticle htmlFilePath={ "/articles/ur5e-3d-printer/ur5e-3d-printer.html" } />} />
        <Route path="/projects/universal-inverse-solver" element={<TechnicalArticle htmlFilePath={ "/articles/universal-inverse-solver/universal-inverse-solver.html" } />} />
        {/* ADD-ARTICLE-HERE */}
        {/* See article-build.sh -- automatically generates routes for articles */}

        <Route path="/games" element={<Games />} />
        
        <Route path="/games/maze-solver" element={<MazeSolver />} />
        <Route path="/games/super-meme-bros" element={<SuperMemeBros />} />
        <Route path="/games/super-meme-bros/player" element={<SuperMemeBrosPlayer />} />
        <Route path="/games/eight-queens" element={<EightQueens />} />

        <Route path="/games/sociology-arcade" element={<SociologyArcade />} />
        <Route path="/games/sociology-arcade/connections" element={<SociologyConnections />} />
        <Route path="/games/sociology-arcade/word-hunt" element={<SociologyWordHunt />} />

        <Route path="/games/snake" element={<Snake />} />
        <Route path="/games/snake/snake-plus" element={<SnakePlus />} />
        <Route path="/games/snake/snake-plus-plus" element={<SnakePlusPlus />} />
        <Route path="/games/snake/snake-plus-plus-plus" element={<SnakePlusPlusPlus />} />
        <Route path="/games/snake/snake-minus-minus-minus" element={<SnakeMinusMinusMinus />} />


      </Routes>
    </div>
  );
};


export default App;
