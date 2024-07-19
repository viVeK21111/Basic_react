import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <ul class="navbar-nav">
            <li class="nav-item"><a class="nav-link" href='/'>Home</a></li>
            <li class="nav-item"><a class="nav-link" href='/about'>About</a></li>
            <li class="nav-item"><a class="nav-link" href='/'>Cotact</a></li>
            <li class="nav-item"><a class="nav-link" href='/'>WorkAt@</a></li>
        </ul>

    );
};

export default Navbar;
