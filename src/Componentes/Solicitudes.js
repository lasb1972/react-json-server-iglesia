import axios from 'axios'
import TablaSolicitudes from './TablaSolicitudes'
import React,{useState,useEffect,useRef} from 'react'
import {Table,Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label} from 'reactstrap';


function Solicitudes (){
    const [solicitudes2,setSolicitudes2] = useState([])
    const [entrar,setEntrar] = useState(false)
    const [entrarUseEffec,setEntrarUseEffec] = useState(false)
     
    useEffect(async()=>{
 
        if (entrar){ 
            console.log("entrando a useEffect de Solicitudes con entrar en: "+entrar)

            console.log("longitud de l arreglo es: ")
            console.log(solicitudes2.length)

            let nombreS = document.getElementById("nombre").value           
            let apellidoS = document.getElementById("apellido").value
            let edadS = parseInt(document.getElementById("edad").value)        
            let emailS = document.getElementById("email").value       
            let celularS = document.getElementById("celular").value

            console.log("nombreS: "+nombreS)
            console.log("apellidoS: "+apellidoS)
            console.log("edadS: "+edadS)
            console.log("celularS: "+celularS)
    
            if(nombreS!=="" && apellidoS!=="" && edadS!=="" && emailS!=="" && celularS!==""){

                let json = {
                    nombre: nombreS,
                    apellido: apellidoS,
                    edad: edadS,
                    email: emailS,
                    celular: celularS
                }

                await axios({
                        method:'post',
                        url:'http://localhost:3001/solicitantes',  
                        data: json
                    })
                    .then((response)=>{
                        const data = response.data
                        console.log("Solicitud: "+data)
                        //setSolicitudes2(data)

                    })
                    .catch((error)=>{
                        console.log(error)
                    })

        }else{
             alert("LOS CAMPOS DE LA SOLICITUD NO DEBEN ESTAR EN BLANCO")
        }
        
        } 

    },[entrar])

    
    const solicitud = (x) =>{
       console.log("le di click al boton solicitud")
       setEntrar(x)
    }

    console.log("voy a pintar solicitudes")
    
    return(
        
    <div className='container'>
        <div className='row'>  
             <table>
                 <thead>
                     <tr>
                         <th colSpan={6}>Si desea formar parte de una Iglesia llene el siguiente formulario con sus datos y luego haga click en el boton ENVIAR SOLICITUD</th>
                     </tr>
                 </thead>    
                 <tbody>

                     <tr>
                         <td>
                             <input className="form-control" id="nombre" placeholder='nombre del solicitante'></input>
                         </td>        
                         <td>
                             <input className="form-control" id="apellido" placeholder='apellido del solicitante'></input>
                         </td>    
                         <td>
                             <input className="form-control" id="edad" placeholder='edad del solicitante'></input>
                         </td>    
                         <td>
                             <input className="form-control" id="email" placeholder='email del solicitante'></input>
                         </td>    
                         <td>
                             <input className="form-control" id="celular" placeholder='celular del solicitante'></input>
                         </td>    
                         <td>
                            <button className="btn btn-success" onClick={() => solicitud(true)}>ENVIAR SOLICITUD</button>
                         </td>   
                     </tr>
                 </tbody>
             </table>
         </div>

        <br/>
        <div>
        
              <TablaSolicitudes entrar={entrar} solicitud ={solicitud}/>
    
        </div>
    </div>

    )

}

export default Solicitudes