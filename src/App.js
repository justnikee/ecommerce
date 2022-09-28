import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './App.css';
import Homepage from './page/homepage/homepage_component';
import ShopPage from './page/homepage/shoppage/shoppage.component';
import Header from './components/header-component';

function App() {
  return (
    <Router>
      <div>
      <Header />
        <Routes>
          <Route exact path='/' element={ <Homepage/> } />
          <Route path='/shop' element={ <ShopPage/> } />
        </Routes>
      </div> 
    </Router> 
  );
}

export default App;
