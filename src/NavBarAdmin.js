import React from "react";

export function NavBarAdmin(){

    return(
        <div className="header">

            <nav className="navbar">
                <a  className="logo"> <i className="fas fa-heartbeat"></i> Care 4 All</a>
                <a href="/adminhome" >Home</a>
                <li><a href="/listdoctor">Doctor</a></li>
                <li><a href="listpatient">Patient</a></li>
                <li><a href="/listappointments">Appointment</a></li>
                <li><a href="/">log out</a></li>
                

            </nav>
           
        </div>
    )
}