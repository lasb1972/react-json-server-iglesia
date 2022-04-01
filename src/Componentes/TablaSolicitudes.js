import {Table,Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import React,{ useEffect,useState } from 'react';
import axios from 'axios'
import Editar from './Editar'

function TablaSolicitudes(props){
    const [solicitudes,setSolicitudes] = useState([])
    const [entrar,setEntrar] = useState(true)

    const [cerrarTabla,setCerrarTabla] = useState(true)

    const [actualizarSegundoUseEffect,setActualizarSegundoUseEffect] = useState(true)

    const [activarModal,setActivarModal] = useState(false)


    const [dataModal,setDataModal]=useState([])    

    const [id,setId]=useState(0)

    const modalStyles={
        position: "absolute",
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    }



    useEffect(async()=>{
console.log("EL PROPS.ENTRAR ES: "+props.entrar)

           await axios
            //.get('http://localhost:3001/solicitantes') 
            .get('/solicitantes') 
            .then(response =>{
            const data = response.data
            console.log("TODOS LOS SOLICITANTES SON:")
            console.log(data)
            setSolicitudes(data)
            props.solicitud(false)
            setCerrarTabla(true)
           })



    },[props.entrar])

    const cerrarTablaSolicitudes = () =>{
        setCerrarTabla(false)
    }

    const borrar = async(id) =>{
        await axios
        //.get('http://localhost:3001/solicitantes') 
        .delete('/solicitantes/'+id)
        .then(response =>{
        const data = response.data
        console.log("ELEMENTO BORRADO:")
        console.log(data)
        setActualizarSegundoUseEffect(true)
       })
    } 

    useEffect(async()=>{
        console.log("EL PROPS.ENTRAR ES: "+props.entrar)
        
                   await axios
                    //.get('http://localhost:3001/solicitantes') 
                    .get('/solicitantes') 
                    .then(response =>{
                    const data = response.data
                    console.log("TODOS LOS SOLICITANTES en 2do UseEffect SON:")
                    console.log(data)
                    setSolicitudes(data)
                    setActualizarSegundoUseEffect(false)

                   })    
        
        
    },[actualizarSegundoUseEffect])


    
    useEffect(async()=>{

        if (id!==0){
            await axios
            //.get('http://localhost:3001/solicitantes') 
            .get('/solicitantes/'+id)
            .then(response =>{
            const data = response.data
            console.log("ELEMENTO EDITADO:")
            console.log(data)
            setDataModal(data)
            })
        }
    },[activarModal])


    const editar = (id) =>{
      setId(id)  
      setActivarModal(true)
    }

    const cerrar = () => {
        setActivarModal(false)   
    }

    return(
        <div className="container">
            <div className="row">
               {cerrarTabla? 
                <Table>
                    <thead>
                        <tr>
                        <th colSpan={8}>LISTA DE SOLICITANTES</th>
                        </tr>
                        <tr>                       
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Edad</th>
                        <th>Email</th>
                        <th>Celular</th>
                        <th>Eliminar</th>
                        <th>Editar</th>
                        </tr>
                    </thead>    
                    <tbody>              
                    {solicitudes.map( dato => (            
                            <tr key={dato.id}>
                                <td>{dato.nombre}</td>
                                <td>{dato.apellido}</td>
                                <td>{dato.edad}</td>
                                <td>{dato.email}</td>
                                <td>{dato.celular}</td>
                                <td><i onClick={()=>borrar(dato.id)} className="far fa-trash-alt" style={{ cursor: 'pointer'}}></i></td>
                                <td>{<i onClick={() => editar(dato.id)} className="fa fa-pencil-square-o" style={{ cursor: 'pointer'}}></i>}</td>
                            </tr>
                        ))}
                        <tr>
                            <td colSpan={7}>
                              <button className="btn btn-success" onClick={cerrarTablaSolicitudes}>CERRAR</button>              
                            </td>
                        </tr>
                    </tbody>  
                </Table>
                :false}
            </div>

            {/*modalEditar?
            <div>
               <Editar solicitanteParaModal={solicitanteParaModal}  modalEditar={modalEditar} />
            </div>
            :false*/}
<div>
        <Modal isOpen={activarModal} style={modalStyles}>
        <ModalHeader>
         Modal para Modificar Datos
        </ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label for="nombre">{dataModal.nombre}</Label>
          </FormGroup>
          <FormGroup>
            <Label for="nombre">{dataModal.apellido}</Label>
          </FormGroup>
          <FormGroup>
            <Label for="nombre">{dataModal.edad}</Label>
          </FormGroup>
          <FormGroup>
            <Label for="nombre">{dataModal.email}</Label>
          </FormGroup>
          <FormGroup>
            <Label for="nombre">{dataModal.celular}</Label>
          </FormGroup>
        </ModalBody>

        <ModalFooter>
            <Button color="secondary" onClick={cerrar}>Cerrar</Button>
        </ModalFooter>
      </Modal>

    </div>










        </div>
    )
}

export default TablaSolicitudes