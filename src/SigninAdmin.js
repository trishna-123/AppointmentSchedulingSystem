import React from "react";
import { Component } from "react";
import AdminService from "./services/AdminService";

export class SigninAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Admin: [],
            adminName: '',
            Password: '',
            adm: '',
        }

        this.changeAdminName = this.changeAdminName.bind(this);
        this.changePassword = this.changePassword.bind(this);

        this.validateAdmin = this.validateAdmin.bind(this);
    }

    changeAdminName = (event) => {
        this.setState({ adminName: event.target.value })
    }

    changePassword = (event) => {
        this.setState({ Password: event.target.value })
    }

    validateAdmin = (a) => {
        a.preventDefault();
        let find = 0;

        for (let i = 0; i < this.state.adm.length; i++) {

            if ((this.state.adminName === "admin") && (this.state.Password === "admin@123")) {
                alert("Welcome " + this.state.adm[i].adminName);
                find = 1;
                this.props.history.push("/adminhome");
            }
        }

        if (find === 0) {
            alert("Invalid");
        }
    }

    componentDidMount(){
        let Admin = {
            adminName:this.state.adminName,
            Password:this.state.Password
        }
        console.log(this.state.adminName)
        console.log('Admin => '+JSON.stringify(Admin));

        AdminService.getAllAdmin().then((res) => {
            this.setState({Admin:res.data})
            this.state.adm = (res.data);
            console.log(this.state.adm);
        })
    }

    render() {
        return (
            <div >
                <div className="container">
                    
                    <div className="form-container sign-in-container">
                        <form action="#">
                            <h1>Sign in as ADMIN</h1> <br />
                            
                            <input type="text" placeholder="Username" name = "adminName" value={this.state.adminName} onChange={this.changeAdminName}/>
                            <input type="password" placeholder="Password" name = "Password" value={this.state.Password} onChange={this.changePassword}/>
                            {/* <input  name="role"  list = "role" placeholder="Role" />
                            <datalist id="role">
                                <option value="patient"></option>
                                <option value="admin"></option>
                            </datalist> */}
                            
                            <button onClick={this.validateAdmin}>Sign In</button>
                        </form>
                    </div>
                    
                </div>
            </div>
        )
    }
}
