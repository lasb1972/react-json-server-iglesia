import React,{useState,useEffect,useRef} from 'react'
import axios from 'axios'
import {Table,Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../Iglesias.css'
import $ from 'jquery'
import DetalleIglesia from './DetalleIglesia'

function Iglesias() {

    const [iglesias,setIglesias] = useState([])
    const [goDetalle,setGoDetalle] = useState(false)
    const [iSeleccionada,setISeleccionada] = useState(0)
    
    useEffect(()=>{
        axios
           //.get('http://localhost:3001/iglesias') 
          .get('/iglesias') 
          .then(response =>{
             const data = response.data
             console.log(data)
             setIglesias(data)
          })
  
     },[])

    const iglesiaSeleccionada = (e) => {
        setGoDetalle(true)
        setISeleccionada(e.target.value)


    }

    return(
        <div className="iglesias" >
        <br/>    
            <div className='container'>
                <a>PROYECTO REACT CON BASE DE DATOS FALSA USANDO JSON SERVER</a>
                <div className='row'>                
                        <div className='form-group'>
                            <select name="iglesias" className='form-control' onChange={iglesiaSeleccionada}>
                            <option defaultValue={0}>Seleccionar</option>
                                { iglesias.map(iglesia =>(
                                    <option key={iglesia.id} value={iglesia.id}>{iglesia.nombre}</option>
                                ))            
                                }
                            </select>
                        </div> 
                </div>        
            </div>    
            {goDetalle?
             <div><DetalleIglesia iSeleccionada={iSeleccionada}/></div>
             :false
            }  
        </div>  
   )

}

export default Iglesias