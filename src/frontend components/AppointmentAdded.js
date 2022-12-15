import React, { Component } from "react"; 
import '../css/AppointmentAdded.css';
import { NavAfterLoginUser } from "../NavAfterLoginUser";

export default class AppointmentAdded extends Component{
    render(){
    return(
        <>
        <NavAfterLoginUser />
        <div className="appointmentadd">
        <span className="appointment-text">
                Appointment created successfully!!
                <br /><br/>
        </span>

        <marquee>The status will be updated to you soon...</marquee>
        
    </div>
    </>
    )
    }
    
}