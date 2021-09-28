
import Navbar from "react-bootstrap/Navbar"
import { NavDropdown } from "react-bootstrap" 
import CartWidget from "./CartWidget"
import "./NavBar.css" 
import esla from "./assets/images/esla.jpg"
import { Link } from "react-router-dom"
import Nav from "react-bootstrap/Nav"





const NabVar=()=>{

  return(

    <Navbar>
        <Link exact to="/">
        <img className="esla" alt="algo" src={esla}></img> 
        </Link>


    

   

   

      <Navbar className="menu">

        
          <Link exact to="/" className="inicio1"> <Nav className="inicio">Inicio</Nav> </Link>

          <Link exact to="/categoria/Buzos"  className="buzos2"> <Nav className="buzos">Buzos</Nav> </Link>

          <Link exact to="/categoria/Remeras" className="remeras2"> <Nav  className=" remeras" >Remeras</Nav> </Link>
          
          <NavDropdown.Item href="https://www.instagram.com/eslapercha.showroom/">Contacto</NavDropdown.Item>

          <Link exact to="/cart"> <CartWidget/> </Link>

        </Navbar>

      </Navbar>
    

    

    
    )

}


export default NabVar
