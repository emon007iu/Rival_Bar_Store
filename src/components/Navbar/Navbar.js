import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className="logo">
                <h2>Logo</h2>
            </div>
            <div className="menubar">
                <ul>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/cart">Cart</a></li>
                    <li><a href="/login">Login</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;