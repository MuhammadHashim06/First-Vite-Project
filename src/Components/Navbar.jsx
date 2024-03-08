// import React from 'react';
import './navbar.css';
import logo from './Images/Logo.png';
import homelogo from './Images/homelogo.png';

export default function Navbar() {
  return (
    <>
      <div className="topnav">
        <div className="topleftnav">
          <a href="#">Online</a>
          <a href="#">On Campus</a>
        </div>
        <div className="toprightnav">
          <p>+1 (438) 357-4008</p>
          <a href=''>Apply Now</a>
        </div>
      </div>
      <div id="" className="Navmid">
        <img src={logo} alt="Logo" />
        <div className='navlinks'>
        <a href="#">Programs and Courses</a>
        <a href="#">Programs and Courses</a>
        <a href="#">About</a>
        <a href="#">Blog</a>
        <a href="#">Request information</a>
        </div>
      </div>
      <div className='navlast'>
      <div className='box'>
        <img src={homelogo} alt=''></img>
        <p>&gt; Study Online</p>
        </div>
      </div>
    </>
  );
}
