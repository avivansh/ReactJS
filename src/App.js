import logo from './logo.svg';
import './App.css';

import React from 'react';

// importing different components of the app
import Footer from './components/Footer'
import Topbar from './components/Topbar';
import Home from './components/Home';
import About from './components/About';
import Cart from './components/Cart';
import Contact from './components/Contact';
import Cards from './components/Topbar/cards';
import Jumbotron from './components/Topbar/jumbotron';
import PDP from './components/PDP'
import PLP from './components/PLP'
import { BrowserRouter,Switch,Route } from 'react-router-dom';

const App = () => {

  const path=process.env.PUBLIC_URL
  
  return (
    <div>
      
      <BrowserRouter>
      <Topbar/>
      <Switch>
        <Route path ={`${path}/`} exact component={Home}/>
        <Route path ={`${path}/about`} component={About}/>
        <Route path ={`${path}/cart`} component={Cart}/>
        <Route path ={`${path}/contact`} component={Contact}/>
        <Route path ={`${path}/products`} exact component={PLP}/>
        <Route path ={`${path}/products/:id`} component={PDP}/>
        <Route component={()=><h1>404</h1>}/>
      </Switch>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}
 
export default App;
