import React,{useState,useEffect,useRef} from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css';
import Lideres from './Lideres'
import Solicitudes from './Solicitudes'

function DetalleIglesia(props){
    const [detalleIglesia,setDetalleIglesia] = useState([])
    const [goLideres,setGoLideres] = useState(false)
    const [lideres,setLideres] = useState([])

    useEffect(()=>{
        console.log(props.iSeleccionada)

        axios
        //.get('http://localhost:3001/detalle?id='+`${e.target.value}`) 
        .get('/detalle?id='+`${props.iSeleccionada}`) 
        .then(response =>{
           const data = response.data
           console.log(data)
           //const lideres = data[0].lideres[0].foto
           console.log("EL ARREGLO DE LIDERES ES: "+data[0].lideres)
           setDetalleIglesia(data)
           setLideres(data[0].lideres)
        })

  
     },[props.iSeleccionada])


    const mostrarLideres = (x) =>{
        setGoLideres(x)
    }

    return(
    <div className='container'> 
        <div className='row'>
            <table border="1">
                <thead>
                    <tr>
                        <th>Nombre del Pastor</th>
                        <th>Edad del Pastor</th>
                        <th>Foto del Pastor o la Pastora</th>
                    </tr>
                </thead>
                <tbody>
                    {detalleIglesia.map( dato => {
                    
                        return (
                        <tr key={dato.id}>
                            <td>{dato.pastor}</td>
                            <td>{dato.edad}</td>
                                <td><img  id="img" src={dato.avatar} alt="..." /></td>
                        </tr>
                        )

                    })}

                <tr>
                    <td colSpan={2} style={{fontWeight: 'bold'}}>
                      Para ver los lideres de esta iglesia haga click en el boton LIDERES            
                    </td>
                    <td>
                      <button className="btn btn-success" onClick={()=>mostrarLideres(true)}>LIDERES</button> 
                    </td>
                </tr>

                </tbody>  

            </table> 
        </div>
        <br/>
        <div>
            {goLideres?
              <Lideres lideres={lideres} mostrarLideres={mostrarLideres}/>
             :false
            }
        </div>
    
        <Solicitudes/>

    </div>    
    )

}

export default DetalleIglesia