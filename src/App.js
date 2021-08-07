import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import LandingPage from './components/LandingPage/LandingPage';
import UserDashboard from './components/Dashboard/UserDashboard';
import LoginUser from './components/Login/LoginUser';
import RegisterUser from './components/Register/RegisterUser';
import Footer from './components/Footer/Footer';
import { ApolloProvider } from '@apollo/react-hooks';


function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
      <Navbar />
      <Route path='/LandingPage'>
      <LandingPage />
      </Route>
      <Route path='/UserDashboard'>
      <UserDashboard />
      </Route>
      <Route path='/LoginUser'>
      <LoginUser />
      </Route>
      <Route path='/RegisterUser'>
      <RegisterUser />
      </Route>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
