import React from "react";
import { Link, useHistory } from "react-router-dom";
import { MainHeader } from "../MainHeader";
import purplereception from '../images/purplereception.gif'
import { NavAfterLoginUser } from "../NavAfterLoginUser";


export function HomeBasedOnLogin(props){
    const history=useHistory();


    const loggedIn=(
        <>
        <NavAfterLoginUser />
        
            <section className="home" id = "home">
                <div className="image">
                    <img src={purplereception} alt="purplereception" />
                </div>
                <div className="content">
                    <h3>Hello There!</h3>
                    <h6>Always caring about your health!</h6>
                    <h6>We are here to help you!!</h6>
                    <a href="/signin" className="btn"> Book an Appointment with Us <i className="fa-solid fa-chevron-right"></i></a>
                </div>
            </section>

            <section className="icons-container">
                <div className="icons">
                <i className="fa-solid fa-user-doctor"></i>
                    <h3>100+</h3>
                    <p>Doctors at work</p>
                </div>
                <div className="icons">
                <i className="fa-solid fa-bed"></i>
                    <h3>140+</h3>
                    <p>Beds available</p>
                </div>
                <div className="icons">
                <i className="fa-solid fa-users"></i>
                    <h3>1400+</h3>
                    <p>Satisfied Patients</p>
                </div>
                <div className="icons">
                <i className="fa-solid fa-truck-medical"></i>
                    <h3>40+</h3>
                    <p>Ambulance on service</p>
                </div>
                
            </section>
            </>
    );

    const loggedOut = (
        <>
        <MainHeader />
            <section className="home" id = "home">
                <div className="image">
                    <img src={purplereception} alt="purplereception" />
                </div>
                <div className="content">
                    <h3>Hello There!</h3>
                    <h6>Always caring about your health!</h6>
                    <h6>We are here to help you!!</h6>
                    <a href="/signin" className="btn"> Book an Appointment with Us <i className="fa-solid fa-chevron-right"></i></a>
                </div>
            </section>

            <section className="icons-container">
                <div className="icons">
                <i className="fa-solid fa-user-doctor"></i>
                    <h3>100+</h3>
                    <p>Doctors at work</p>
                </div>
                <div className="icons">
                <i className="fa-solid fa-bed"></i>
                    <h3>140+</h3>
                    <p>Beds available</p>
                </div>
                <div className="icons">
                <i className="fa-solid fa-users"></i>
                    <h3>1400+</h3>
                    <p>Satisfied Patients</p>
                </div>
                <div className="icons">
                <i className="fa-solid fa-truck-medical"></i>
                    <h3>40+</h3>
                    <p>Ambulance on service</p>
                </div>
                
            </section>
            </>
    );

    return(
        <div>
            {localStorage.getItem('user') ? loggedIn : loggedOut}
        </div>
    );
}