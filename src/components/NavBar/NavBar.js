import React, { useContext } from "react";
import './NavBar.css'
import ThemeContext from '../../ThemeContext';

const NavBar = ({ setKeyword }) => {
    const { dark, toggle } = useContext(ThemeContext);
    const handleChange = (e) => {
        setKeyword(e.target.value);
    };
    return (
        <div className="nav-bar">
            <span>My Shop {dark ? 'dark' : 'light'}</span>
            <input placeholder="search" onChange={handleChange} />
            <button onClick={toggle}>Change Theme</button>
        </div>

    );
};

export default NavBar;