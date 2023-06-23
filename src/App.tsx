import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Homepage from './pages/Homepage';
import Skills from './pages/Skills';
import Projects from './pages/Projects';


const App: React.FC = () => {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="skills" element={<Skills />} />
        <Route path="projects" element={<Projects filter={undefined} />} />
      </Routes>
    </div>
  );
};

export default App;

