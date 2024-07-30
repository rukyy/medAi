import { Link } from "react-router-dom";
import "../css/navbar.css"
const NavBar = () => {
    return (
        <div className="navbar">
            <div className="navbar__logo">Diagno</div>
            <div className="navcontent">
                <ul className="navlinks">
                    <li><Link>Home</Link> </li>
                    <li><Link>Research</Link></li>
                    <li><Link>About us</Link></li>
                    <li><Link>Contact</Link></li>
                </ul>
                <ul className="navregistry">
                    <li><button style={{backgroundColor:"white"}} ><Link to={"/login"}>Sign in</Link> </button></li>
                    <li><button style={{color:"white", backgroundColor:"#18A6F5"}}><Link style={{color:"white"}} to={"/"}>Sign Up</Link> </button></li>
                </ul>
            </div>
        </div>);
}

export default NavBar; <div className="navbar">
</div>
