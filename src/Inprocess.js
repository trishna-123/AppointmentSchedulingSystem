import React, { Component } from "react";
import { MainHeader } from "./MainHeader";
import inprocess from '../src/images/working2.gif';
import '../src/css/Inprocess.css';
export default class InProcess extends Component{
    render(){
        return(
            <>
            <MainHeader />
            <h1 className="working">This page in process</h1>
            <img src={inprocess} className="workingimg" alt="" />
            </>
        )
    }
}