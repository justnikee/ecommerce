import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Homepage from './page/homepage/homepage_component';
import ShopPage from './page/homepage/shoppage/shoppage.component';
import Header from './components/header-component';
import SigninAndSignUpPage from './page/homepage/Signin and signup page/Signin-and-signup-component';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route exact path='/' element={ <Homepage/> } />
          <Route path='/shop' element={ <ShopPage/> } />
          <Route path='/signin' element={ <SigninAndSignUpPage /> } />
        </Routes>
      </div> 
    </Router> 
  );
}

export default App;
