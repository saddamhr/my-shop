import React from "react"
import './NavBar.css'

const NavBar = ({setKeyword}) => {
    const handleChange = (e) => {
        setKeyword(e.target.value);
    };
    return (<div className="nav-bar">
        <span>My Shop</span>
        <input placeholder="search" onChange={handleChange}/>
    </div>);
}

export default NavBar;