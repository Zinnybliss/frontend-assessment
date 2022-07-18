import React from 'react';
import './Nav.css';
import { Link } from "react-router-dom";


const Nav = () => {
  return (
    <div>
        <ul className='d-flex'>
        <img src={require('./Img/Logo.png')} alt='logo' />
        <div className='list'>
            <li>ABOUT US</li>
            <li>BLOG</li>
            <li><Link to="/github">GITHUB</Link></li>
            <li className='line3'> <Link to="/contact">CONTACT US</Link> </li>
            </div>
        </ul>

    </div>
  )
}

export default Nav