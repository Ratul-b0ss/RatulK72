import React, { useRef, useState } from 'react'
import Projets from '../componants/Projets';
import Agence from '../componants/Agence';
import { Routes, Route, useLocation } from "react-router";
import Home from '../componants/Home';
import Homeandvideo from '../componants/homeandvideo';
import Animation from '../componants/animation';
import Nav from '../componants/nav';
import Menubar from '../componants/menubar';

const App = () => {

  const [isMenuon, setisMenuon] = useState(false);

  return (

    <div>
      <Nav value={ [isMenuon, setisMenuon]} />
      <Menubar value={ [isMenuon, setisMenuon]}/>
      
     <Animation>
        <Routes>
          <Route path="/agence" element={<Agence />} />
          <Route path="/" element={<Homeandvideo />} />
          <Route path="/projets" element={<Projets />} />
        </Routes>
      </Animation>
    </div>

  )
}

export default App