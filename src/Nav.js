import React from "react";
import { Link } from 'react-router-dom';

const Nav = () => {
return(
    <>
        <ul className ="nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/booking">Booking</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
        </ul>
    </>
);
};

export default Nav;