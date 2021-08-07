import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import LandingPage from './components/LandingPage/LandingPage';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <LandingPage />
    </div>
  );
}

export default App;
