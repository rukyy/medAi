import "../css/navbar.css"
const NavBar = () => {
    return (
        <div className="navbar">
            <div className="navbar__logo">Diagno</div>
            <div className="navcontent">
                <ul className="navlinks">
                    <li>Home</li>
                    <li>Research</li>
                    <li>About us</li>
                    <li>Contact</li>
                </ul>
                <ul className="navregistry">
                    <li><button style={{backgroundColor:"white"}} >Sign Up</button></li>
                    <li><button style={{color:"white", backgroundColor:"#18A6F5"}}>Sign Up</button></li>
                </ul>
            </div>
        </div>);
}

export default NavBar; <div className="navbar">
</div>
