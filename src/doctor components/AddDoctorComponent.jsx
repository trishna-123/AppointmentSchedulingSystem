import React, { Component } from "react";
import DoctorService from "../services/DoctorService";
import '../css/AddDoctor.css';
import { NavBarAdmin } from "../NavBarAdmin";


export class AddDoctorComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            doctorName: '',
            specialization: '',
            consultant: '',
            fee: '',

        }
        this.changeDoctorNameHandler = this.changeDoctorNameHandler.bind(this);
        this.changeSpecializationHandler = this.changeSpecializationHandler.bind(this);
        this.changeConsultantHandler = this.changeConsultantHandler.bind(this);
        this.changeFeeHandler = this.changeFeeHandler.bind(this);

        this.saveDoctor = this.saveDoctor.bind(this);


    }

    saveDoctor = (d) => {
        d.preventDefault();
        let Doctor = {
            doctorName: this.state.doctorName,
            specialization: this.state.specialization,
            consultant: this.state.consultant,
            fee: this.state.fee,


        }
        console.log('Doctor =>' + JSON.stringify(Doctor))
        DoctorService.createDoctor(Doctor).then(res => {
            alert("Doctor added succcessfully...")
        })
        this.props.history.push("/listdoctor");

    }

    cancel() {
        alert("leaving without saving....")
    }

    changeDoctorNameHandler(event) {
        this.setState({ doctorName: event.target.value })
    }

    changeSpecializationHandler(event) {
        this.setState({ specialization: event.target.value })
    }

    changeConsultantHandler(event) {
        this.setState({ consultant: event.target.value })
    }
    changeFeeHandler(event) {
        this.setState({ fee: event.target.value })
    }

    render() {
        return (
            <>
                <NavBarAdmin />
                <div className="border">
                    <h2>Add Doctor</h2>
                    <form className="formcontainer">
                        <div className="formgroup first">
                            <input type="text" name="doctorName" id="" className="formcontrol" placeholder="Enter doctorName"
                                value={this.state.doctorName} onChange={this.changeDoctorNameHandler} />
                        </div>
                        <div className="formgroup">
                            <input type="text" name="specialization" id="" className="formcontrol" placeholder="Enter specialization"
                                value={this.state.specialization} onChange={this.changeSpecializationHandler} />
                        </div>
                        <div className="formgroup">

                            <input name="consultant" className="formcontrol" list="consultant" value={this.state.consultant}
                                placeholder="Select consultant" onChange={this.changeConsultantHandler} />
                            <datalist id="consultant">
                                <option value="online"></option>
                                <option value="inPerson"></option>
                            </datalist>
                            {/* <input type="text" name="consultant" id="" className="formcontrol" placeholder="Enter consultant"
                                value={this.state.consultant} onChange={this.changeConsultantHandler} /> */}
                        </div>
                        <div className="formgroup">
                            <input type="text" name="fee" id="" className="formcontrol" placeholder="Enter fee"
                                value={this.state.fee} onChange={this.changeFeeHandler} />
                        </div>

                        <div className="buttons">
                            <button type="button" className="success" onClick={this.saveDoctor}>Create</button>
                            <button type="button" className="danger" onClick={this.cancel.bind(this)}>Cancel</button>
                        </div>
                    </form>
                </div>
            </>
        )
    }

}