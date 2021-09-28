import React, {useState} from 'react'
import { useParams } from 'react-router'
import ItemCount from "./ItemCount"
import  {productos} from './utils/mock'

const ItemDetail = () => {
    const {idDetalle}= useParams ()
    


const [cantidadSeleccionada,setCantidadSeleccionada] = useState(0) 
console.log(idDetalle)
    return (
        <div>
            <h2>{productos[idDetalle].detalle}</h2>
            <img src={productos[idDetalle].picture} style={{justifyContent: 'center',width: '20%', height: 'auto'}} alt=""/>
            <ItemCount initial={0} stock={5}  setCantidadSeleccionada={setCantidadSeleccionada}/> 
        </div>
    )
}

export default ItemDetail
