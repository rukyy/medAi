import "../css/landingpage.css"
import medaipic from "../assets/med-aihome.png"
import stars from "../assets/landing page stars.png"
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="homepage">
            <div className="writeupcontent">
                <span><h1 style={{ margin: "0" }}>
                    Evolving <br /><p style={{ color: "#18A6F5", margin: "0", display:"inline" }}>Medicine</p> with <br /> AI
                </h1></span>
                <p>Taking the next step in the health care sector</p>
                <div className="actionbtns">
                    <Link to={"/forms"}><button style={{ backgroundColor: "white" }}>Ai Consultation</button></Link>
                    <Link to={"/login"}><button style={{ backgroundColor: "#18A6F5", color: "white" }}>Login</button></Link>
                </div>
            </div>
            <div className="imagecontent">
                <div className="blueunderline"><img src={medaipic} alt="" srcset="" /></div>
                <img className="stars" src={stars} alt="" />
                <div className="actionbtns">
                    <Link to={"/forms"}><button style={{ backgroundColor: "white" }}>Ai Consultation</button></Link>
                    <Link to={"/login"}><button style={{ backgroundColor: "#18A6F5", color: "white" }}>Login</button></Link>
                </div>
            </div>
        </div>);
}

export default Home;