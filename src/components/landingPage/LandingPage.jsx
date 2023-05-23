import React from "react";
// import { NavLink } from 'react-router-dom'; 
import "./LandingPage.css";
import  { useState, useEffect } from 'react';
import NavBar from "../navbar/Nav-Bar";
// import { getDogs, orderbyName, orderbyWeight, filterDogsCreated, filterDogTemp, getTemperaments } from "../../actions";

export default function LandingPage() {
//     const [darkMode, setDarkMode] = useState(false);

//   // Cuando se monta el componente, se verifica si el usuario ha establecido un modo en el pasado
//   useEffect(() => {
//     const isDark = localStorage.getItem('darkMode') === 'true';
//     setDarkMode(isDark);
//   }, []);

//   // Cuando cambia el modo, se guarda en localStorage
//   useEffect(() => {
//     localStorage.setItem('darkMode', darkMode);
//   }, [darkMode]);

//   // Función para cambiar el modo
//   function toggleDarkMode() {
//     setDarkMode(!darkMode);
//   }

//   // Clase CSS dinámica para el modo
//   const modeClass = darkMode ? 'dark-mode' : 'light-mode';

const [darkMode, setDarkMode] = useState(false);

useEffect(() => {
  const isDark = localStorage.getItem('darkMode') === 'true';
  setDarkMode(isDark);
}, []);

useEffect(() => {
  localStorage.setItem('darkMode', darkMode);
}, [darkMode]);

function toggleDarkMode() {
  setDarkMode(!darkMode);
}

const modeClass = darkMode ? 'light-mode' : 'dark-mode';

    return (
      
        <div id="container" className={`landingpage ${modeClass}`}>
            <div className="navbar">
               <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            </div>
              <div className="center">
                    <div className="fond-izquierda">
                        <div className="title-position">
                        <h1 className="homeTitle">Eliseo Masuelli:</h1>
                        <h2 className="especial">Full Stack Developer</h2>
                        <h2 className="descripcion">Hola soy Eliseo Masuelli full stack developer, con mayor orientacion al front end. actualmente estoy cursando la carrera de ingienieria en software</h2>
                        </div>


                        <div className='contenedor_izquierda_abajo' >
                
                            
                                <div id='item' >
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="" />
                                    <h2>Javascript</h2>
                                </div>
                                <div id='item'>                     
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="" />
                                    <h2>HTML</h2>
                                </div>
                                <div id='item'>
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="" />
                                    <h2>CSS</h2>
                                </div>
                                <div id='item'>
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="" />
                                    <h2>React</h2>
                                </div>
                                <div id='item'>
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="" />
                                    <h2>Redux</h2>
                                </div>
                                <div id='item'>
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="" />
                                    <h2>Express</h2>
                                </div>
                                <div id='item'>
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="" />
                                    <h2>PostgreSQL</h2>
                                </div>
                            
                       </div>      
                    

                 </div>

            {/* <Link to="/home"><button className="xx" >home</button></Link> */}
            {/* </div>
             <div className='about'>
                 <h1 className='infoH1'>Dogs-API</h1>
                <p className='infoP'>Este proyecto se creó como parte de mi formación como desarrollador fullstack  . Para mapear todas las diferentes razas, esta aplicación consume datos de la <a className='linkDescription' href='https://thedogapi.com/' target='_blank' rel='noopener noreferrer'>Api Dogs</a>. También es posible crear una nueva raza de perro, ingresando un nombre, peso, altura, años de vida y temperamentos..</p>
                <p className='infoP'>pueden visitarme en:</p>            </div>
                <h1 className='infoH1'></h1>
                <div className='contenedor-git-link'>
                    <a href="https://github.com/eliseo001"target='_blank' rel='noopener noreferrer'><button className='github'></button></a>
                     <a href="https://www.linkedin.com/in/eliseo-masuelli-7a1823209"target='_blank' rel='noopener noreferrer'><button className='linkending'></button></a>
                </div>
                <div className='titel-skills'>
                 <h1 className='infoH1'>Use en este proyecto:</h1>
            </div> */}
            {/* <div className='item' id="item7">
            
                     
                 </div> */}

                 {/* div contenedor de las skills */}
               
           
                        {/* div de la derecha contenedora de la foto */}
                        <div className="fondo-derecha">
                        <div className="foto_perfil"></div>
                        </div>
               </div>
     
        </div>
         
     
    )
} 