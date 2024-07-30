import { useState } from "react";
import "../css/registration.css"

const Registration = () => {

    const [selectdsp, setSelectdsp] = useState(true)

    const switchpage = () => {
        const patientBtn = document.getElementById("patientbtn")
        const physicianbtn = document.getElementById("physicianbtn")
        if (selectdsp === true) {
            physicianbtn.style.backgroundColor = "#18A6F5"
            patientBtn.style.backgroundColor = "#D1DBE3"
            setSelectdsp(false)
        }
        else {
            setSelectdsp(true)
            physicianbtn.style.backgroundColor = "#D1DBE3"
            patientBtn.style.backgroundColor = "#18A6F5"
        }
    }




    return (
        <div className="registration">
            <h2><strong>Welcome</strong>, provide the necessary details below to get started</h2>
            <div className="regpage">
                <div className="swipebar">
                    <button
                        onClick={() => { switchpage() }}
                        style={{ backgroundColor: "#18A6F5" }}
                        className="patientbtn" id="patientbtn"
                        disabled={selectdsp}
                    >
                        Patient
                    </button>
                    <button
                        onClick={() => { switchpage() }}
                        className="Physicianbtn"
                        id="physicianbtn"
                        disabled={!selectdsp}
                        >
                        Physician
                    </button>
                </div>
                <form className="patientloginform" action="">
                    {selectdsp && <span> <label htmlFor="email">Email/Card no.</label>
                        <input type="email" /></span>}

                    {!selectdsp && <span><label htmlFor="email">Email/id no</label>
                        <input type="email" /></span>}
                    <label htmlFor="password">Password</label>
                    <input type="password" />
                    <span style={{ fontSize: "80%", color: "#18A6F5" }}>Forgotten password?</span>
                </form>
                <button className="submitregform">Sign in</button>
                <p>A new user? Sign up</p>
            </div>
        </div>);
}

export default Registration;