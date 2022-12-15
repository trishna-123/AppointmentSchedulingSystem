import React, { Component } from "react";
import image1 from '../images/dermatology1.jpg';
import image2 from '../images/general1.png';
import image3 from '../images/Gynaecology.jpg';
import image4 from '../images/paediatrics1.jpg';
import '../css/Services.css';
import { MainHeader } from "../MainHeader";
import { foot } from "./Foot";

export default class TopServices extends Component {

    render() {
        return (
            <>
                <MainHeader />
                <div className="container">
                    <h2><b>Search Doctor, Make an Appointment</b></h2>
                    <h4>Discover the best doctors nearest to you</h4>
                    <h3><b><u>TOP SPECIALITIES</u></b></h3>
                    <div className="container1" style={{ marginTop: "10%" }}></div>
                    <div className="card-deck">
                        <div className="card" style={{ height: "14rem" }}>
                            <img className="card-img-top" src={image1} alt="" />
                            <h5 className="card-title">
                                <button><a href="/inprocess">Dermatology</a></button></h5>
                        </div>
                        <div className="card" style={{ height: "14rem" }}>
                            <img className="card-img-top img2" src={image2} alt="" />
                            <h5 className="card-title">
                                <button><a href="/inprocess">General Physician</a></button></h5>
                        </div>
                        <div className="card" style={{ height: "14rem" }}>
                            <img className="card-img-top" src={image3} alt="" />
                            <h5 className="card-title">
                                <button><a href="/inprocess">Gynaecology</a></button></h5>
                        </div>
                        <div className="card" style={{ height: "14rem" }}>
                            <img className="card-img-top" src={image4} alt="" />
                            <h5 className="card-title">
                                <button><a href="/inprocess">Paediatrics</a></button></h5>
                        </div>
                    </div>
                        
                   
                    <div className="newsection">
                    <h3 className="top-doctors" style={{ position: "relative", top: "10px" }}><b><u>TOP DOCTORS</u></b></h3>
                    <div className="container2" style={{ marginTop: "5%" }}></div>
                    <div className="card-deck">
                        <div className="card" style={{ height: "12rem" }}>
                            <h6 className="card-title" style={{ color: "blue" }}>Dr. Akash Singh</h6>
                            <div className="card-body history">Dermatologist
                                <br />15 yrs exp.
                                <br />
                                MBBS, MD(Derma)
                                <br />
                                Rs. 800
                                <br />
                                {/* <div class="card-footer text-center">
                    <button className="button button1">
                        <a href="online">Online</a></button>
                    <button className="button button2">
                        <a href="inperson">In Person</a></button>
                </div> */}
                            </div>
                        </div>
                        <div className="card" style={{ height: "12rem" }}>
                            <h6 className="card-title" style={{ color: "blue" }}>Dr. Meenakshi</h6>
                            <div className="card-body history">Gynaecologist
                                <br />8 yrs exp.
                                <br />
                                MBBS, MD
                                <br />
                                Rs. 950
                                <br />
                                {/* <div class="card-footer text-center">
                    <button className="button button1">
                        <a href="online">Online</a></button>
                    <button className="button button2">
                        <a href="inperson">In Person</a></button>
                </div> */}
                            </div>
                        </div>
                        <div className="card" style={{ height: "12rem" }}>
                            <h6 className="card-title" style={{ color: "blue" }}>Dr. Nishant Sri</h6>
                            <div className="card-body history">ENT Specialist
                                <br />10 yrs exp.
                                <br />
                                MBBS, MD(ENT)
                                <br />
                                Rs. 700
                                <br />
                                {/* <div class="card-footer text-center">
                    <button className="button button1">
                    <a href="online">Online</a></button>
                    <button className="button button2">
                        <a href="inperson">In Person</a></button>
                </div> */}
                            </div>
                        </div>
                        <div className="card" style={{ height: "12rem" }}>
                            <h6 className="card-title" style={{ color: "blue" }}>Dr. Rimi Ghosh</h6>
                            <div className="card-body history">Paediatrics
                                <br />8 yrs exp.
                                <br />
                                MBBS, MD
                                <br />
                                Rs. 750
                                <br />
                                {/* <div class="card-footer text-center">
                    <button className="button button1">
                        <a href="online">Online</a></button>
                    <button className="button button2">
                        <a href="inperson">In Person</a></button>
                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <br /><br />
                <foot/>
            </>
        )
    }


}