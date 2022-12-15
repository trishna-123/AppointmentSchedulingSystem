import React, { Component } from "react";
import { Link } from "react-router-dom";
import DoctorService from "../services/DoctorService";
/* import {DoctorService} from "../services/DoctorService"; */
import '../css/ListDoctor.css';
import { MainHeader } from "../MainHeader";
import { NavAfterLoginUser } from "../NavAfterLoginUser";



export class SearchDoctorBySpec extends Component {
    constructor(props) {
        super(props);
        this.state = {
            doctors: [],
            search: ''
        }
        this.ChangeSearchhandler = this.ChangeSearchhandler.bind(this);
    }

    ChangeSearchhandler(event) {
        this.setState({ search: event.target.value })
    }

    componentDidMount() {
        DoctorService.getAllDoctors().then((res) => {
            console.log(res.data);
            this.setState({ doctors: res.data });
        })

    }




    render() {
        return (
            <div>
            <NavAfterLoginUser />
                <h2 className="text-center"> Doctor  List </h2>
                <div>
                    <h6>Enter spect</h6>
                    <input type="text" value={this.state.search}
                        onChange={this.ChangeSearchhandler} />
                </div>

                <div className="row">
                    <table className="table table-striped table-inverse">
                        <thead className="thead-inverse">
                            <tr className="header">
                                <th>Doctor Name</th>
                                <th>specialization</th>
                                <th>consultant</th>
                                <th>fee</th>
                                <th>Book</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.doctors.filter(doctor => doctor.specialization.toLowerCase().includes(this.state.search.toLowerCase())).map(
                                    doctor =>
                                        <tr key={doctor.doctorId}>
                                            <td className="text-center align-middle">{doctor.doctorName}</td>
                                            <td className="text-center align-middle">{doctor.specialization}</td>
                                            <td className="text-center align-middle">{doctor.consultant}</td>
                                            <td className="text-center align-middle">{doctor.fee}</td>
                                            <td className="text-center align-middle">
                                                {/* <button className="appbutton"><a href='appointment'>Appointment</a></button> */}
                                                <button type="button">
                                                    <Link to={"/appointment/" +doctor.doctorId}>Appointment
                                                    </Link>
                                                </button>
                                            </td>

                                        </tr>
                                )}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}