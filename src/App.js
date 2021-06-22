import logo from './logo.svg';
import './App.css';

import React from 'react';

// importing different components of the app
import Footer from './components/Footer'
import PlacesGrid from './components/PlacesGrid';
import Topbar from './components/Topbar';

const App = () => {
  return (
    <div>
      <Topbar name="anil" age="21"/>
      <PlacesGrid/>
      <Footer/>
    </div>
  )
}
 
export default App;
