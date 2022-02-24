import React from 'react';
import '../css/Navbar.css'
import logo from '../images/logo.png'
import SearchBar from './SearchBar';

function Navbar() {

  return <div className='Navbar'>
    <div className='Brand'>
      <img className='Applogo'src={logo} />
      <p className='Appname'>Movie db</p>
    </div>
  
    <SearchBar />
  </div>;
}

export default Navbar;
