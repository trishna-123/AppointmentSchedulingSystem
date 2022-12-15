import React, { Component } from "react";
import AppointmentService from "../services/AppointmentService";
import { NavBarAdmin } from "../NavBarAdmin";
import '../css/ListAppointment.css';
import { Link } from "react-router-dom";

 
export class ListAppointmentComponent extends Component{
   
    constructor(props){
        super(props);
        //declaring state of react component
        this.state ={
            appointments : []
        }

    }

    componentDidMount(){
        AppointmentService.getAllAppointments().then((res) =>{
            console.log(res.data);
            this.setState({appointments : res.data})
        })
    }


    deleteAppointmentById(appointmentId){
        AppointmentService.deleteAppointmentById(appointmentId).then(res =>{
            this.setState({appointments:this.state.appointments.filter(appointment => appointment.appointmentId !== appointmentId)});
            alert("Deleted successfully");
        })
    }

    updateAppointment(appointmentId){
            
    }


    render(){
        return(
            <>
            <NavBarAdmin />
                <h2 className = "text-center">Appointments List</h2>
                <div className="row">
                    <table className="table table-striped table-inverse">
                        <thead className="thead-inverse">
                            <tr>
                                <th>Appointment Date</th>
                                <th>Appointment Status</th>
                                <th>User Id</th>
                                <th>Doctor Id</th>
                                <th>Fee</th>
                                <th>Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                              {
                                this.state.appointments.map(
                                    appointment =>
                                    <tr key={appointment.appointmentId}>
                                        <td className="text-center align-middle">{appointment.appointmentDate}</td>
                                        <td className="text-center align-middle">{appointment.appointmentStatus}</td>
                                        <td className="text-center align-middle">{appointment.userId}</td>
                                        <td className="text-center align-middle">{appointment.doctorId}</td>
                                        <td className="text-center align-middle">{appointment.fee}</td>
                                        <td className="text-center align-middle">
                                        <button type="button" className="success">
                                           <Link className="update" to={"/updateappointment/" + appointment.appointmentId}>
                                                update
                                            </Link>
                                        </button>
                                        <button className="danger" onClick={()=>this.deleteAppointmentById(appointment.appointmentId)}>Delete</button>
                                        </td>
                                    </tr>
                                )
                              }
                            </tbody>
                    </table>
                </div>
            </>
        )
    }

}

export default ListAppointmentComponent