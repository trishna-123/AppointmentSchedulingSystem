import React from "react";
import { Link, useHistory } from "react-router-dom";
// import { NavBar } from "./frontend components/NavBar";
// import { NavAfterLoginUser } from "./NavAfterLoginUser";
import '../src/css/NavBar.css';


export function MainHeader(props) {
    const history = useHistory();
    const regPatient = localStorage.getItem('patient');

    const loggedIn = (
        <div className="header">

            <nav className="navbar">
                <li><a href="/" className="logo"> <i className="fas fa-heartbeat"></i> Care 4 All</a></li>
                <li><a href="/" >Home</a></li>
                <li><a href="/services">Service</a></li>
                <li><a href="/aboutus">About Us</a></li>
                <li><a href="/contactus">Contact</a></li>
                <li>
                    <div>
                        <button type="button" className="dropdown-toggle" data-toggle="dropdown" >
                            Sign in
                        </button>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="/signin">Patient</a>
                            <a className="dropdown-item" href="/signinasadmin">Admin</a>
                        </div>
                    </div>
                </li>

            </nav>
            {/* <a href="/signin">Sign in</a> */}
        </div>
    );

    const loggedOut = (

        <div className="header">

            <nav className="navbar">
                <a className="logo"> <i className="fas fa-heartbeat"></i> Care 4 All</a>
                
                <li><a href="/listdoctor">Doctor</a></li>
                <li><a href="/services">Service</a></li>
                <li><a href="/aboutus">About Us</a></li>
                <li><a href="/contactus">Contact Us</a></li>
                <li><a href="/">Log out</a></li>
                {/* <li>
                        <div>
                            <button type="button" className="dropdown-toggle" data-toggle="dropdown" >
                                Sign in
                            </button>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="/signin">Patient</a>
                                <a className="dropdown-item" href="/signinasadmin">Admin</a>
                            </div>
                        </div>
                    </li> */}
            </nav>
        </div>
    );

    return (
        <div>
            {/* copypaste */}
            <nav>
                <div className="container-fluid">
                    {/* {console.log(localStorage.getItem('user'))} */}
                    {localStorage.getItem('patient') ? loggedOut : loggedIn}
                </div>
                {/* copypaste */}
            </nav>
        </div>
    )
}