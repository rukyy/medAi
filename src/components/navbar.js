import { Link } from "react-router-dom";
import "../css/navbar.css"
import { useEffect, useRef, useState } from "react";
const NavBar = () => {

    const ref = useRef()
    const [disabled, setDisabled] = useState(false)
    const drop = ()=>{
        if(document.getElementById("navcontent").className==="navcontent"){
            document.getElementById("navcontent").className="collapse"
            setDisabled(true)
        }else{
            document.getElementById("navcontent").className="navcontent"
            setDisabled(false)
        }
    }

    useEffect(()=>{
        const handleclickOutside=(event)=>{
            if(!ref.current.contains(event.target)){
                if(document.getElementById("navcontent").className==="collapse"){
                    drop()
                }
            }
        }
        window.addEventListener('mousedown',handleclickOutside)
    },[])

    return (
        <div className="navbar">
            <div className="navbar_logo">Diagno<sup>+</sup></div>
            <button className="dropbtn"  onClick={()=>drop()} disabled={disabled}><i className="fa-solid fa-bars"></i></button>
            <div className="navcontent" id="navcontent" ref={ref}>
                <ul className="navlinks">
                    <li onClick={()=>{drop()}} ><Link to={"/"}>Home</Link> </li>
                    <li onClick={()=>{drop()}} ><Link>Research</Link></li>
                    <li onClick={()=>{drop()}} ><Link>About us</Link></li>
                    <li onClick={()=>{drop()}} ><Link>Contact</Link></li>
                </ul>
                
                <ul className="navregistry">
                    <li onClick={()=>{drop()}}><Link to={"/login"}><button style={{backgroundColor:"white"}} >Sign in </button></Link></li>
                    <li onClick={()=>{drop()}}><Link style={{color:"white"}} to={"/"}><button style={{color:"white", backgroundColor:"#18A6F5"}}>Sign Up</button></Link> </li>
                </ul>
            </div>
        </div>);
}

export default NavBar; <div className="navbar">
</div>
