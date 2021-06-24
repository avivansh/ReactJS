import logo from './logo.svg';
import './App.css';

import React from 'react';

// importing different components of the app
import Footer from './components/Footer'
import PlacesGrid from './components/PlacesGrid';
import Topbar from './components/Topbar';
import Cards from './components/Topbar/cards';

import Jumbotron from './components/Topbar/jumbotron';
const App = () => {
  return (
    <div>
      
      <PlacesGrid/>
      
      <Jumbotron/>

      <Cards/>
    </div>
  )
}
 
export default App;
