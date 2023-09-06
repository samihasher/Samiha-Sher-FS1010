import React, { useState } from 'react';
import './App.css';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import AboutUs from './Pages/AboutUs';
import Home from './Pages/Home';
import Routines from './Pages/Routines';


function App() {
  const [numBlankCards, setNumBlankCards] = useState(0);
  return (
    <Router>
           
   

<div>
        <NavBar />
        <Routes>
        <Route path="/" exact element = {<Home/>}/>
 
        <Route path="/home" exact element = {<Home/>}/>

        <Route path="/about" element = {<AboutUs/>}/>
        <Route path="/routines" element = {<Routines/>}/>
      </Routes>
        
      <Footer />
  </div>
    </Router>
  );
}

export default App;
