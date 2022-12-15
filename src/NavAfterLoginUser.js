import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../src/css/NavBar.css';
import { Home } from "./frontend components/Home";

export class NavAfterLoginUser extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    loggedOut(){
        // l.preventDefault();
        alert("Logged out");
    }

    render() {
        return (
            <div className="header">

                <nav className="navbar">
                    <a  className="logo"> <i className="fas fa-heartbeat"></i> Care 4 All</a>
                    {/* <a href="/" ></a> */}
                    {/* <li ><a href="/home">Home</a></li> */}
                    
                    <li><a href="/searchbyspec">Doctor</a></li>
                    {/* <li><a href="/profile">Profile</a></li> */}
                    {/* <li><a href="/services">Service</a></li> */}
                    {/* <li><a href="/aboutus">About Us</a></li> */}
                    {/* <li><a href="/contactus">Contact Us</a></li> */}

                    <div>
                    <Link to ={"/"} className ="styleLink" onClick={this.loggedOut}>
                                             log out
                                            </Link>
                        {/* <button type="button" onClick ={this.loggedOut}>log out</button> */}
                    {/* <li><a href="/">Logout </a></li> */}                        
                    </div>
                    

                </nav>
                
            </div>

        );
    }



}