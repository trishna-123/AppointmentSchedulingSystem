/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Component } from "react";
import '../css/Home.css';
import purplereception from '../images/purplereception.gif'
import { MainHeader } from "../MainHeader";
import { foot } from "./Foot";

export class Home extends Component{
    constructor(props){
        super(props);
        this.state ={

        }
    }
    render(){
        return(
            <>
                <MainHeader />
            <section className="home" id = "home">
                <div className="image">
                    <img src={purplereception} alt="purplereception" />
                </div>
                <div className="content">
                    <h3 className="hello-there">Hello There!</h3>
                    <h6 className="content1">Always caring about your health!</h6>
                    <h6 className="content1">We are here to help you!!</h6>
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
            <foot />
            </>
        )
    }
}