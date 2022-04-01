import React,{useState,useEffect,useRef} from 'react'


function Lideres(props){

    const [cerrarLideres2,setCerrarLideres2] = useState(true)

    console.log(cerrarLideres2)


    /*const cerrarLideres = () =>{
        console.log(cerrarLideres2)
        setCerrarLideres2(false)
    }*/

    const cerrarLideres = (x) =>{
      
        props.mostrarLideres(x)
        
    }

    return(
    <div className='container'>     
        <div className='row'> 
        {cerrarLideres2?
            <table>
                <thead>
                    <tr>
                        <th>Nombre del Lider</th>
                        <th>Foto del Lider</th>
                    </tr>
                </thead>
                <tbody>
                    {props.lideres.map( dato => {
                        
                        return (
                        <tr key={dato.id}>
                            <td>{dato.lider}</td>
                                <td><img  id="img" src={dato.foto} alt="..." /></td>
                        </tr>
                        )

                    })}
                    
                    <tr >
                        <td colSpan={2}> 

                            <button className="btn btn-success" onClick={() => cerrarLideres(false)}>CERRAR</button>              

                        </td>
                    </tr>

                </tbody> 
            </table> 
        :false}    
        </div>

        <br/>   


    </div>    
    )

}

export default Lideres