import React, { Component } from "react";
import PatientService from "../services/PatientService";
import '../css/Addpatient.css'
import purplereception from '../images/doctorchecking.gif'
export class AddPatientComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            patientName: '',
            address: '',
            password: '',
            userEmail: '',
            phoneNo: '',
            dob: '',
            gender: '',

        }

        this.changeUserNameHandler = this.changeUserNameHandler.bind(this);
        this.changePatientNameHandler = this.changePatientNameHandler.bind(this);
        this.changePatientAddressHandler = this.changePatientAddressHandler.bind(this);
        this.changePatientPasswordHandler = this.changePatientPasswordHandler.bind(this);
        this.changePatientEmailHandler = this.changePatientEmailHandler.bind(this);
        this.changePatientPhoneNoHandler = this.changePatientPhoneNoHandler.bind(this);
        this.changePatientDOBHandler = this.changePatientDOBHandler.bind(this);
        this.changePatientGenderHandler = this.changePatientGenderHandler.bind(this);

        this.savePatient = this.savePatient.bind(this);

    }
    savePatient = (p) => {
        p.preventDefault();
        let patient = {
            userName: this.state.userName,
            patientName: this.state.patientName,
            address: this.state.address,
            password: this.state.password,
            userEmail: this.state.userEmail,
            phoneNo: this.state.phoneNo,
            dob: this.state.dob,
            gender: this.state.gender
        }
        console.log('patient =>' + JSON.stringify(patient))
        PatientService.createPatient(patient).then(res => {
            alert("Patient added successfully...")
        })

        this.props.history.push("/listpatient");

    }
    cancel() {
        alert("Cancelling without adding ..")
    }
    changeUserNameHandler(event) {
        this.setState({ userName: event.target.value })
    }
    changePatientNameHandler(event) {
        this.setState({ patientName: event.target.value })
    }
    changePatientAddressHandler(event) {
        this.setState({ address: event.target.value })
    }
    changePatientPasswordHandler(event) {
        this.setState({ password: event.target.value })
    }
    changePatientEmailHandler(event) {
        this.setState({ userEmail: event.target.value })
    }
    changePatientPhoneNoHandler(event) {
        this.setState({ phoneNo: event.target.value })
    }
    changePatientDOBHandler(event) {
        this.setState({ dob: event.target.value })
    }
    changePatientGenderHandler(event) {
        this.setState({ gender: event.target.value })
    }

    render() {
        return (
            <div>
                {/* <div className="image"> */}
                {/* </div> */}
                <br />
                <div className="border">
                <h2 className="sign">Sign Up</h2>
                    <form className="formcontainer">
                        <div className="formgroup">
                            <label ></label>
                            <input type="text" name="userName" className="formcontrol first"
                                placeholder="Enter Username" value={this.state.userName} onChange={this.changeUserNameHandler} />
                        </div>
                        <div className="formgroup">
                            <label></label>
                            <input type="text" name="patientName" className="formcontrol"
                                placeholder="Enter patient name" value={this.state.patientName} onChange={this.changePatientNameHandler} />
                        </div>
                        <div className="formgroup">
                            <label></label>
                            <input type="text" name="address" className="formcontrol"
                                placeholder="Enter your Address" value={this.state.address} onChange={this.changePatientAddressHandler} />
                        </div>
                        <div className="formgroup">
                            <label></label>
                            <input type="password" name="password" className="formcontrol"
                                placeholder="Enter password" value={this.state.password} onChange={this.changePatientPasswordHandler} />
                        </div>
                        <div className="formgroup">
                            <label></label>
                            <input type="text" name="userEmail" className="formcontrol"
                                placeholder="Enter your email id" value={this.state.userEmail} onChange={this.changePatientEmailHandler} />
                        </div>
                        <div className="formgroup">
                            <label></label>
                            <input type="text" name="phoneNo" className="formcontrol"
                                placeholder="Enter your Phone Number" value={this.state.phoneNo} onChange={this.changePatientPhoneNoHandler} />
                        </div>
                        <div className="formgroup">
                            <label></label>
                            <input type="date" name="dob" className="formcontrol"
                                placeholder="Enter Date of Birth" value={this.state.dob} onChange={this.changePatientDOBHandler} />
                        </div>
                        <div className="formgroup">
                            <label></label>
                            <input name="gender" className="formcontrol" list="gender" value={this.state.gender}
                                placeholder="Select gender" onChange={this.changePatientGenderHandler} />
                            <datalist id="gender">
                                <option value="male"></option>
                                <option value="female"></option>
                                <option value="others"></option>
                            </datalist>

                            {/* <input  name="role"  list = "role" placeholder="Role" />
                                                                    <datalist id="role">
                                                                        <option value="patient"></option>
                                                                        <option value="admin"></option>
                                                                    </datalist> */}
                        </div>
                            
                        <div className="buttons">
                        <button type="button" className="success" onClick={this.savePatient}>Create</button>
                        <button type="button" className="danger" onClick={this.cancel.bind(this)}>Cancel</button>
                        </div>


                    </form>
                        <img className="image2" src={purplereception} alt="purplereception" />
                </div>
            </div>


        )
    }
}