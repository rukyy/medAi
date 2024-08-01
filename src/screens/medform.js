import "../css/medforms.css"

const Medform = () => {
    return (<div className="medform">
        <h2 style={{margin:"1% 0", color:"#18A6F5"}}>AI Consultation</h2>
        <p style={{margin:"0 auto", width:"80%"}}>In the form below, kindly input the correct details; do give every detailof how you're feeling and Dr.Diagno(Our Consultant AI)  will diagnose and tell you what's wrong, readily available medications </p>
        <div className="formpage">
            <h3 style={{ textAlign:"center", width:"100%", color:"#18A6F5"}}>Diagnosis form</h3>
            <h4 className="formheader">Contact Info</h4>
            <form className="contactform" action="">
                <span className="contactformelement">
                    <label htmlFor="name"><h5>Name</h5></label>
                    <input placeholder="John Doe" type="text" name="name" id="" />
                    <label htmlFor="Phoneno"><h5>Phone Number</h5></label>
                    <span>
                        <select style={{ width: "19%" }} name="" id="">
                            <option value="naija">+234</option>
                            <option value="ghana">+284</option>
                            <option value="benin">+543</option>
                            <option value="southafrica">+322</option>
                        </select>
                        <input placeholder="806-8**-**49" style={{ width: "78%" }} type="number" />
                    </span>
                </span>
                <span className="contactformelement">
                    <label htmlFor="DOB"><h5>Date of Birth</h5></label>
                    <input type="date" name="DOB" id="" />
                    <label htmlFor="address"><h5>House Address</h5></label>
                    <input placeholder="house no.2, atiku street wuse II, Abuja, Nigeria" type="text" name="address" id="" />
                </span>
            </form>


            <h4 className="formheader">Let's Talk about you</h4>
            <form className="aboutform" action="">
                <span className="aboutformelement">
                    <label htmlFor="concerns"><h5>Primary health concern</h5></label>
                    <textarea placeholder="what concerns do you have?" name="concerns" id=""rows="10" ></textarea>
                    <label htmlFor=""> <h5>Medication</h5></label>
                    <ul>
                        <li>Are you currently on medications ?</li>
                        <li>If yes, please list medications otherwise skip</li>
                    </ul>
                    <textarea name="" rows="5" ></textarea>
                </span>
                <span className="aboutformelement">
                    <label htmlFor="symptoms"><h5>Symtomps</h5> </label>
                    <textarea name="symtomps" placeholder="what symptoms do you have?" id="" rows="10"></textarea>
                    <label htmlFor="Allergies :"><h5>Allergies</h5></label>
                    <ul>
                        <li>Do you have any known allergies</li>
                        <li>If yes,please list them other wise skip</li>
                    </ul>
                    <textarea name="" rows="5" ></textarea>
                </span>
            </form>
            <button className="submitformbtn">Submit</button>
        </div>

    </div>);
}

export default Medform;