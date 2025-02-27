import React from 'react';
import {Routes, Route } from 'react-router-dom';

import Homepage from './pages/Homepage';
import About from './pages/About';
import Projects from './components/Projects';
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
import TravelMap from './pages/TravelMap';
import FitnessMapperPrivacyPolicy from './pages/FitnessMapperPrivacy';
import FitnessMapperSupportPage from './pages/FitnessMapperSupport';


const App: React.FC = () => {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/projects" element={<Projects filter={ undefined }/>} />
        <Route path="/about" element={<About />} />
        <Route path="/travel-map" element={<TravelMap />} />
        <Route path="/coming-soon" element={<ComingSoon />} />

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
        <Route path="/projects/programmable-magna-tiles" element={<TechnicalArticle htmlFilePath={ "/articles/programmable-magna-tiles/programmable-magna-tiles.html" } />} />
        <Route path="/projects/programmable-tiles" element={<ProgrammableTiles />} />
        <Route path="/projects/spoken-digit-recognition" element={<SpokenDigit />} />
        <Route path="/projects/maze-solver" element={<TechnicalArticle htmlFilePath={ "/articles/maze-solver/maze-solver.html" } />} />
        <Route path="/projects/patient-watch" element={<TechnicalArticle htmlFilePath={ "/articles/patient-watch/patient-watch.html" } />} />
        <Route path="/projects/ur5e-3d-printer" element={<TechnicalArticle htmlFilePath={ "/articles/ur5e-3d-printer/ur5e-3d-printer.html" } />} />
        <Route path="/projects/universal-inverse-solver" element={<TechnicalArticle htmlFilePath={ "/articles/universal-inverse-solver/universal-inverse-solver.html" } />} />
        <Route path="/projects/robot-dog" element={<TechnicalArticle htmlFilePath={ "/articles/robot-dog/robot-dog.html" } />} />
        <Route path="/projects/dorm-window-display" element={<TechnicalArticle htmlFilePath={ "/articles/dorm-window-display/dorm-window-display.html" } />} />
        <Route path="/projects/bird-feeder" element={<TechnicalArticle htmlFilePath={ "/articles/bird-feeder/bird-feeder.html" } />} />
        <Route path="/projects/fitness-mapper" element={<TechnicalArticle htmlFilePath={ "/articles/fitness-mapper/fitness-mapper.html" } />} />
        {/* ADD-ARTICLE-HERE */}
        {/* See article-build.sh -- automatically generates routes for articles */}

        <Route path="/games" element={<Games />} />
        
        <Route path="/games/maze-solver" element={<MazeSolver />} />
        <Route path="/games/super-meme-bros" element={<SuperMemeBros />} />
        <Route path="/games/super-meme-bros/player" element={<SuperMemeBrosPlayer />} />
        <Route path="/games/eight-queens" element={<EightQueens />} />

        <Route path="/games/snake" element={<Snake />} />
        <Route path="/games/snake/snake-plus" element={<SnakePlus />} />
        <Route path="/games/snake/snake-plus-plus" element={<SnakePlusPlus />} />
        <Route path="/games/snake/snake-plus-plus-plus" element={<SnakePlusPlusPlus />} />
        <Route path="/games/snake/snake-minus-minus-minus" element={<SnakeMinusMinusMinus />} />

        <Route path="/fitness-mapper-privacy-policy" element={<FitnessMapperPrivacyPolicy />} />
        <Route path="/fitness-mapper-support" element={<FitnessMapperSupportPage />} />

      </Routes>
    </div>
  );
};


export default App;
