import React, { Component } from "react";
import { Link } from "react-router-dom";
import { NavBarAdmin } from "./NavBarAdmin";
import '../src/css/AdminHome.css';
import cooladmin from '../src/images/cooladmin.gif'
export function AdminHomePage() {
    

    return(
        <>
        <NavBarAdmin />
        <h2>Welcome Admin</h2>
        <img src={cooladmin} alt="admin" />
        </>
    )
    
}