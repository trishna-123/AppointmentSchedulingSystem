import React, { Component } from "react";
import PatientService from "../services/PatientService";
import { Link } from "react-router-dom";
import '../css/Listpatient.css';
import { NavBarAdmin } from "../NavBarAdmin";

export class ListPatientComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            patients: [],
        };
    }
    componentDidMount() {
        PatientService.getAllPatients().then((res) => {
            console.log(res.data);
            this.setState({ patients: res.data });
        });
    }
    deletePatient(userId){
        PatientService.deletePatient(userId).then(res => {
            this.setState({ patients: this.state.patients.filter(patient => patient.userId !== userId) });
            alert("Deleted successfully");
          })
    }

    updatePatient(userId){

    }

    render() {
        return (
            <div>
                <NavBarAdmin/>
                <h2>Patient List</h2>
                <div className="row">
                    <table className="table table-striped table-inverse">
                        <thead className="thead-inverse">
                            <tr className="header">
                                {/* <th>User Id</th> */}
                                <th>User Name</th>
                                <th>Patient Name</th>
                                <th>Address</th>
                                <th>Password</th>
                                <th>User mail id</th>
                                <th>Phone Number</th>
                                <th>Date of Birth</th>
                                <th>Gender</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            this.state.patients.map(
                                patient =>
                                    <tr key={patient.userId}>
                                        <td className="text-center align-middle">{patient.userName}</td>
                                        <td className="text-center align-middle">{patient.patientName}</td>
                                        <td className="text-center align-middle">{patient.address}</td>
                                        <td className="text-center align-middle">{patient.password}</td>
                                        <td className="text-center align-middle">{patient.userEmail}</td>
                                        <td className="text-center align-middle">{patient.phoneNo}</td>
                                        <td className="text-center align-middle">{patient.dob}</td>
                                        <td className="text-center align-middle">{patient.gender}</td>
                                        <div>
                                            
                                        <td className="button">
                                            <button type="button" className="warning" style={{ marginRight: "10px" }}> 
                                                <Link to={"/updatepatientbyid/" + patient.userId} >
                                                    Update
                                                </Link>
                                            </button>                                 
                                            <button className="danger" onClick={() => this.deletePatient(patient.userId)}>Delete</button>
                                        </td>
                                        </div>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}