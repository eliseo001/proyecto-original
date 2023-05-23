import React from "react";
import { NavLink } from 'react-router-dom'; 
// import "../../components/landingPage/LandingPage.css"
import "./Nav-bar.css";

export default function NavBar(props) {
    const { darkMode, toggleDarkMode } = props;

    // const modeClass = darkMode ? 'dark-mode' : 'light-mode';
    return (
     
        <nav className="navlink">
        <ul>
          <li><a className="link" href="./">Home</a></li>
          <li><NavLink  to ="/proyectos">Poryectos</NavLink></li>
          <li><NavLink  to ="/contacto">Contactame</NavLink></li>
          <li><button onClick={toggleDarkMode}>{darkMode ? 'dark⚫' : '⚪light'} </button></li>
          {/* <li><button onClick={() => toggleDarkMode()}></button></li> */}
        </ul>
      </nav>
            
     
    )
} 