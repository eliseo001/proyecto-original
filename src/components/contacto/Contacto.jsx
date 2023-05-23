import React from "react";
// import { NavLink } from 'react-router-dom'; 
import "./Contacto.css";
import NavBar from "../navbar/Nav-Bar";
import emailJs from 'emailjs-com'
export default function Contacto() {

    (function () {
        emailJs.init('H0yqpWgsRFysK9aOK')
    })();

        // function enviarEmail(e){
        //     e.preventDefault();
        //     email.sendForm('service_n3fl0sj','template_sqb7rje',e.target,'user_vioczlp52qTH0DM92ei6').then(res=>{
        //         console.log(res);
        //     })
        // }
       
        function sendEmail(){
            var params = {
                nombre: document.getElementById("nombre").value,
                email:  document.getElementById("email").value,
                telefono:  document.getElementById("telefono").value,
                mensaje:  document.getElementById("mensaje").value,
                manera:  document.getElementById("manera").value,
                horario:  document.getElementById("horario").value,


                // probando
                // contacto_email:  document.getElementById("contacto_email").value,
                // contacto_telefono:  document.getElementById("contacto_telefono").value,
                // contacto_whatsapp:  document.getElementById("contacto_whatsapp").value,
                


            };
        
            const serviceID = "service_7zw9tsd"
            const templateID = "template_a7jm2bg"

            emailJs
                .send(serviceID,templateID,
                    params)
                .then((res)=>{
                    
                    document.getElementById("nombre").value = "";
                    document.getElementById("email").value = "";
                    document.getElementById("telefono").value = "";
                    document.getElementById("mensaje").value = "";
                    document.getElementById("manera").value = "";
                    document.getElementById("horario").value = "";



                    //probando
                    // document.getElementById("contacto_email").value = "";
                    // document.getElementById("contacto_telefono").value = "";
                    // document.getElementById("contacto_whatsapp").value = "";



                    
                    console.log(res);
                    alert("your message sending!!!")
                })
            
        .catch(err=>console.log(err));
        }
        return (
            
        
        <div className="container">
                <div>
                    <div className="proyectos">
                        <div className="navbar">
                     <NavBar> </NavBar> 
                     </div>
            
                     {/* <div className="centro"/> */}
                     </div>
            
             </div>

           
            <div className="container_contacto">
                {/* <script type="text/javascript">
                    (function () {
                        emailJs.init('H0yqpWgsRFysK9aOK')
                    })();

                </script> */}
                <h1 className="title-prin">Dejame un mensaje y pronto me pondre en contacto.</h1>
                 <form className="formulario" onSubmit={sendEmail}>
                    {/* <label for="nombreapellido" className="nombre">Nombre y Apellido</label> */}
                   <h5 className="title5" >Nombre</h5>
                    <input 
                        type="text"
                        className="form-control"
                        id="nombre" 
                        placeholder="Enter your name"                       

                      />
                      {/* <h5>Email</h5> */}
                      {/* <input 
                        type="email"
                        className="form-control"
                        id="email" 
                        placeholder="Enter your email"                       

                      /> */}

                     <h5 className="title5" >Correo electronico</h5>
                    <input type="email" id="email" class="input-padron" required placeholder="email@dominio.com"/>

                    <h5  className="title5" >Telefono</h5>
                    <input type="tel" id="telefono" class="input-padron" required placeholder="xx xxxx xxxxxx"/>


                    <h5 className="title5" >Mensaje</h5>
                    <textarea cols="70" rows="10" id="mensaje"></textarea>

                         <fieldset>
                            <legend className="title5">¿Como prefiere ser contactado?</legend>
                            <select id="manera">
                                <option>email</option>
                                <option>telefono</option>
                                <option>whatsapp</option>

                            </select>
                          </fieldset>
                        
                        <fieldset>
                            <legend className="title5">¿En cual horario prefiere ser atendido</legend>
                            <select id="horario">
                                <option>Mañana</option>
                                <option>Tarde</option>
                                <option>Noche</option>

                            </select>
                        </fieldset>
                          {/*  
                        // <label class="check-box">  <input type="checkbox" checked/>¿Le gustaria recibir novedades de la bicicleteria Eliseo?</label>
                         */}
                         <button
                type="button"
                className="enviar-button"
                onClick={sendEmail} 
                >enviar
                </button>
             

                                    {/* <a   className="link-button "   onClick={sendEmail}>enviar</a> */}
                    {/* </input> */}
                </form>
                {/* <table >
                    <thead >
                        <tr>
                            <th>Dia</th>
                            <th>Horario</th>
                        </tr>
                    </thead>
                  
                    <tbody >
                        <tr>
                            <td>Lunes</td>
                            <td>08hs - 20hs</td>
                        </tr>
                        <tr>
                            <td>Miercoles</td>
                            <td>08hs - 20hs</td>
                        </tr> 
                        <tr>
                            <td>Viernes</td>
                            <td>08hs - 20hs</td>
                        </tr>
                    </tbody>
                   
                </table>
             */}
            </div>
            <div>
                {/* <img class="logo" src="./logoo.png" alt="Logo de la bicicleteria Eliseo"/> */}

                <p class="copyright">&Copyright  Eliseo Masuelli - 2022</p>
            </div>
         
        
         </div>
       



    
        
            
     
    )

} 
