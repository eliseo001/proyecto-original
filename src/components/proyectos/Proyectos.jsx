import React from "react";
// import { NavLink } from 'react-router-dom'; 
import "./Proyectos.css";
import NavBar from "../navbar/Nav-Bar";
import  { useState, useEffect } from 'react';
export default function Proyectos(props) {
   
const [darkMode, setDarkMode] = useState(false);

useEffect(() => {
  const isDark = localStorage.getItem('darkMode') === 'false';
  setDarkMode(isDark);
}, []);

useEffect(() => {
  localStorage.setItem('darkMode', darkMode);
}, [darkMode]);

function toggleDarkMode() {
  setDarkMode(!darkMode);
}

const modeClass = darkMode ? 'dark-mode' : 'light-mode';

    return (
        <div className={`landingpage ${modeClass}`}>
      {/* <div className={'proyectos ${modeClass}'}> */}
      <NavBar  darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

    
                
              

                  


                        <section id="contenedor_central" class="proyecto-skills">
                            
                        <section id="contenedor_arriba" class="presentacion">
                              <div className="uno">
                               <h2 className="Title">Aca pueden observar algunos de mis proyectos realizados </h2>
                              
                                
                              </div>

                      
                        </section>


                             <div class="Skill-conteiner">
                                <div class="contenido-diferenciales">
                                    <h3 class="SkillsTitle">Skills:</h3>
                                    <ul class="lista-diferenciales">
                                        <li class="itemS">javaSrcip </li>
                                        <li class="itemS">HTML </li>
                                        <li class="itemS">Reack</li>
                                        <li class="itemS">CSS</li>
                                        <li class="itemS">NodeJS</li>
                                        <li class="itemS">Redux</li>
                                        <li class="itemS">Express</li>
                                        <li class="itemS">PostgrsSql</li>
                                        <li class="itemS">Wordpress</li>



                                    </ul>
                                    </div>
                                </div>

                            <div class="Proyectos-conteiner">
                                    <div class="Proyecto_left">                                      
                                        <div class="Api-dogs">
                                         </div>
                                          
                                    </div>
                                  
                                    <div class="Proyecto_rigth">                                   
                                        <div class="encriptador">
                                        </div>
                                        
                                    </div>
                                    <div class="Proyecto_center">
                                       <div class="bicicleteria">                                                                                      
                                    </div>
                                        
                                     
                                 </div>
                               
                               

                                   
                                <div class="botones-enlace">

                                    
                                      <div class="button-apidogs">
                                        <a    href="https://eliseo001.github.io/bicicleteria.html">
                                            <input  class="btn-link" type="button" value="api-dogs"/>    
                                        </a> 
                                      </div>


                                      <div class="button-bicicleteria">

                                        <a  
                                        href="https://eliseo001.github.io/bicicleteria.html" >
                                        <input class="btn-link" type="button" value="bicicleteria"/>
                                        </a> 
                                      </div>


                                      <div class="button-encriptador">


                                          <a  href="https://eliseo001.github.io/bicicleteria.html">
                                              <input class="btn-link" type="button" value="encriptador"/>
                                          </a>
                                      </div>




                                  </div>



                            </div>

                                
                           

                            

                              
                        </section>
                         
                    
                  
                <div class="container-perfiles">
                   
                   <div class="container-perfiles">
                    <a href="https://github.com/eliseo001"target='_blank' rel='noopener noreferrer'><button class='perfilgithub'></button></a>
                    <a href="https://www.linkedin.com/in/eliseo-masuelli-7a1823209"target='_blank' rel='noopener noreferrer'><button class='perfillinkending'></button></a>
                     </div>
                   

              
                </div>
                <p class="copyright">&Copyright Eliseo Masuelli - 2023</p>
     

        </div>
            
     
    )
} 