import React from "react";
import logo from './logo.jpg';

const Header = () => {
return(
    <div className ="header">
        <img src={logo} alt="Logo" className ="header-image"/>
    </div>
);
};

export default Header;