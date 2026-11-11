import { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import HomePage from './HomePage';
import Bonus from './Bonus';
import Level1 from './Level1';
import Level2 from './Level2';
import Level3 from './Level3';
import Level4 from './Level4';
import Level5 from './Level5';
import Level6 from './Level6';
import Level7 from './Level7';
import Level8 from './Level8';
import Level9 from './Level9';
import Level10 from './Level10';
import Concept from './Concept';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      {/* Public Routes */}
      <Route path='/' element={<HomePage />} />

      {/* Levels & Activities */}
      <Route path='/level1' element={<Level1 />} />
      <Route path='/level2' element={<Level2 />} />
      <Route path='/level3' element={<Level3 />} />
      <Route path='/level4' element={<Level4 />} />
      <Route path='/level5' element={<Level5 />} />
      <Route path='/level6' element={<Level6 />} />
      <Route path='/level7' element={<Level7 />} />
      <Route path='/level8' element={<Level8 />} />
      <Route path='/level9' element={<Level9 />} />
      <Route path='/level10' element={<Level10 />} />
      <Route path='/bonus' element={<Bonus />} />
      <Route path='/concept' element={<Concept />} />
    </Routes>
  );
}

export default App;
