import React, { useState } from 'react';
import {Route, Routes } from 'react-router-dom';
import Globalstyle from './globalstyle';

import Nav from './components/Nav';
import Home from './components/Home';

function App(){


  return(
    <>
    <Globalstyle />
    <Nav />
    <Routes>
      <Route exact path='/' element={() => {}}/>
    </Routes>
  </>
  )
}

export default App;