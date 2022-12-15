import React, { Component } from "react";
import PatientService from "../services/PatientService";

export class UpdatePatientComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            // userId: this.props.match.params.id,
            userId: this.props.match.params.id,
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
        this.changePatientPasswordHandler  = this.changePatientPasswordHandler.bind(this);
        this.changePatientEmailHandler = this.changePatientEmailHandler.bind(this);
        this.changePatientPhoneNoHandler = this.changePatientPhoneNoHandler.bind(this);
        this.changePatientDOBHandler = this.changePatientDOBHandler.bind(this);
        this.changePatientGenderHandler = this.changePatientGenderHandler.bind(this)

        this.updatePatient = this.updatePatient.bind(this)

    }

    componentDidMount(){
        PatientService.getPatient(this.state.userId).then((res) =>{
            console.log(res.data)
            let patient = res.data;
            this.setState({
                userName: patient.userName,
                patientName: patient.patientName,
                address: patient.address,
                password: patient.password,
                userEmail: patient.userEmail,
                phoneNo: patient.phoneNo,
                dob: patient.dob,
                gender: patient.gender,
            });
        });
    }

    updatePatient = (p) => {
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
        console.log('patient =>' + JSON.stringify(patient));

        PatientService.updatePatient(patient, this.state.userId).then(res => {
            alert("Patient updated successfully...")
        });

        this.props.history.push("/listpatient");
       
    }
    cancel() {
        alert("Cancelling without updating ..");
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
                <br />
                <div className="container">
                    <div>
                        <div className="card col-md-6 offset-md-3">
                            <h2>Edit patient</h2>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label ></label>
                                    <input type="text" name="userName" className="form-control"
                                        placeholder="Enter Username" value={this.state.userName} onChange={this.changeUserNameHandler} />
                                </div>
                                <div className="form-group">
                                    <label></label>
                                    <input type="text" name="patientName"  className="form-control"
                                        placeholder="Enter patient name" value={this.state.patientName} onChange={this.changePatientNameHandler} />
                                </div>
                                <div className="form-group">
                                    <label></label>
                                    <input type="text" name="address"  className="form-control"
                                        placeholder="Enter Patient Address" value={this.state.address} onChange={this.changePatientAddressHandler} />
                                </div>
                                <div className="form-group">
                                    <label></label>
                                    <input type="password" name="password"  className="form-control"
                                        placeholder="Enter password" value={this.state.password} onChange={this.changePatientPasswordHandler} />
                                </div>
                                <div className="form-group">
                                    <label></label>
                                    <input type="text" name="userEmail"  className="form-control"
                                        placeholder="Enter Patient email id" value={this.state.userEmail} onChange={this.changePatientEmailHandler} />
                                </div>
                                <div className="form-group">
                                    <label></label>
                                    <input type="text" name="phoneNo"  className="form-control"
                                        placeholder="Enter Patient Phone Number" value={this.state.phoneNo} onChange={this.changePatientPhoneNoHandler} />
                                </div>
                                <div className="form-group">
                                    <label></label>
                                    <input type="date" name="dob"  className="form-control"
                                        placeholder="Enter Date of Birth" value={this.state.dob} onChange={this.changePatientDOBHandler} />
                                </div>
                                <div className="form-group">
                                    <label></label>
                                    <input type="text" name="gender"  className="form-control"
                                        placeholder="Enter gender" value={this.state.gender} onChange={this.changePatientGenderHandler} />
                                </div>
                                <button type="button" className="btn btn-warning" onClick={this.updatePatient}>Update</button>
                                <button type="button" className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}