import "../css/landingpage.css"
import medaipic from "../assets/med-aihome.png"

const Home = () => {
    return (
        <div className="homepage">
            <div className="writeupcontent">
                <span><h1 style={{ margin: "0" }}>
                    Evolving <h1 style={{ color: "#18A6F5", margin: "0" }}>Medicine</h1> with Ai
                </h1></span>
                <p>Taking the next step in the health care sector</p>
                <div className="actionbtns">
                    <button style={{ backgroundColor: "white" }}>Ai Consultation</button>
                    <button style={{ backgroundColor: "#18A6F5", color: "white" }}>Login</button>
                </div>
            </div>
            <div className="imagecontent">
                <div className="blueunderline"><img src={medaipic} alt="" srcset="" /></div>

            </div>
        </div>);
}

export default Home;