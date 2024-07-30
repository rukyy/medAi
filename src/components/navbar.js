import { Link } from "react-router-dom";
import "../css/navbar.css"
const NavBar = () => {
    return (
        <div className="navbar">
            <div className="navbar__logo">Diagno</div>
            <div className="navcontent">
                <ul className="navlinks">
                    <li><Link to={"/"}>Home</Link> </li>
                    <li><Link>Research</Link></li>
                    <li><Link>About us</Link></li>
                    <li><Link>Contact</Link></li>
                </ul>
                <ul className="navregistry">
                    <li><Link to={"/login"}><button style={{backgroundColor:"white"}} >Sign in </button></Link></li>
                    <li><Link style={{color:"white"}} to={"/"}><button style={{color:"white", backgroundColor:"#18A6F5"}}>Sign Up</button></Link> </li>
                </ul>
            </div>
        </div>);
}

export default NavBar; <div className="navbar">
</div>
