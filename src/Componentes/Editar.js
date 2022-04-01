import {Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label} from 'reactstrap';
import React,{ useEffect,useState } from 'react';

function Editar(props){
    const [activarModal,setActivarModal] = useState(props.modalEditar)

    const [nombre,setNombre] = useState('')
    const [apellido,setApellido] = useState('')
    const [edad,setEdad] = useState('')
    const [email,setEmail] = useState('')
    const [celular,setCelular] = useState('')


    const modalStyles={
        position: "absolute",
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    }

    const cerrar = () => {
        setActivarModal(false)   
    }

    useEffect(()=>{
       console.log("EPALE ESTOY EN COMPONENTE EDITAR con modalEditar en: "+activarModal)

       setNombre(props.solicitanteParaModal.nombre)
       setApellido(props.solicitanteParaModal.apellido)
       setEdad(props.solicitanteParaModal.edad)
       setEmail(props.solicitanteParaModal.email)
       setCelular(props.solicitanteParaModal.celular)

    },[activarModal])

    return(
    <div>
        <Modal isOpen={activarModal} style={modalStyles}>
        <ModalHeader>
         Modal para Modificar Datos
        </ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label for="nombre">{nombre}</Label>
          </FormGroup>
          <FormGroup>
            <Label for="nombre">{apellido}</Label>
          </FormGroup>
          <FormGroup>
            <Label for="nombre">{edad}</Label>
          </FormGroup>
          <FormGroup>
            <Label for="nombre">{email}</Label>
          </FormGroup>
          <FormGroup>
            <Label for="nombre">{celular}</Label>
          </FormGroup>
        </ModalBody>

        <ModalFooter>
            <Button color="secondary" onClick={cerrar}>Cerrar</Button>
        </ModalFooter>
      </Modal>

    </div>
    )
} 

export default Editar