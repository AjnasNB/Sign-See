import './App.css'
import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Convert from './Pages/Convert';
import Home from './Pages/Home';
import LearnSign from './Pages/LearnSign';

import Navbar from './Components/Navbar';





function App() {
  return(
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path='/signSee/home' element={<Home />} />
          <Route exact path='/signSee/convert' element={<Convert />} />
          <Route exact path='/signSee/learn-sign' element={<LearnSign />} />

          
          <Route exact path='*' element={<Home/>} />
        </Routes>
        
      </div>
    </Router>
  )
}

export default App;