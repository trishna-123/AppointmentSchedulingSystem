import React, { Component } from "react";
import AppointmentService from "../services/AppointmentService";
import DoctorService from '../services/DoctorService';
// import { NavAfterLoginUser } from "../NavAfterLoginUser";

export default class AddAppointmentUser  extends Component{
    constructor(props) {
        super(props);
        this.state = {
            doctorName:'',
            consultant:'',
            specialization:'',
            appointmentDate: '',
            appointmentStatus: 'PENDING',
            userId: '',
            doctorId:this.props.match.params.id,
            fee: '',
        }

        this.changeAppointmentDateHandler = this.changeAppointmentDateHandler.bind(this);
        this.changeAppointmentStatusHandler = this.changeAppointmentStatusHandler.bind(this);
        this.changeUserIdHandler = this.changeUserIdHandler.bind(this);
        this.changeDoctorIdHandler = this.changeDoctorIdHandler.bind(this);
        this.changeFeeHandler = this.changeFeeHandler.bind(this);

        this.saveAppointment = this.saveAppointment.bind(this);


    }
    componentDidMount(){
        DoctorService.getDoctor(this.state.doctorId).then((res) =>{
            let newAppointment = res.data;
            this.setState({
                doctorName : newAppointment.doctorName,
                specialization : newAppointment.specialization,
                consultant : newAppointment.consultant,
                fee : newAppointment.fee,
                /* appointmentStatus : newAppointment.appointmentStatus,
                appointmentDate : newAppointment.appointmentDate */
            })
        })
    }
    

    saveAppointment = (a) => {
        a.preventDefault();
        let appointment = {
            appointmentDate: this.state.appointmentDate,
            appointmentStatus: this.state.appointmentStatus,
            userId: this.state.userId,
            doctorId: this.state.doctorId,
            fee: this.state.fee
        }
        console.log('appointment =>' + JSON.stringify(appointment))
        AppointmentService.createAppointment(appointment).then(res => {
            alert("Appointment added successfully....")
        })
        this.props.history.push("/appointmentadded");
    }
    

    cancel(){
        alert("leaving with out saving.....")
    }

    changeAppointmentDateHandler(event){
        this.setState({appointmentDate:event.target.value})
    }

    changeAppointmentStatusHandler(event){
        this.setState({appointmentStatus:event.target.value})
    }

    changeUserIdHandler(event){
        this.setState({userId:event.target.value})
    }

    changeDoctorIdHandler(event){
        this.setState({doctorId:event.target.value})
    }

    changeFeeHandler(event){
        this.setState({fee:event.target.value})
    }
    getAppointment = (a) => {
        a.preventDefault();
        let newAppointment = {
            /* appointmentStatus : this.state.appointmentStatus, */
            /* appointmentDate : this.state.appointmentDate */

            doctorName: this.state.doctorName,
            specialization: this.state.specialization,
            consultant : this.state.consultant,
            fee : this.state.fee
        }
        console.log('newAppointment =>' + JSON.stringify(newAppointment));
        AppointmentService.getAppointment(newAppointment,this.state.appointmentId).then(res => {
            alert("Appointment updated successfully....")
        })
        
        this.props.history.push("/appointmentadded");
    }

    render() {
        return (
            <div>
                {/* <NavAfterLoginUser /> */}
                <br ></br>
                <div className="container">
                    <div>
                        <form>
                            <h5>Doctor Name: {this.state.doctorName}</h5>
                            <h5>Specialization: {this.state.specialization}</h5>
                            <h5>Consultant: {this.state.consultant}</h5>
                            <h5>fee: {this.state.fee}</h5>
                            <input type="text" name="userId" placeholder="user id" value={this.state.userId} onChange={this.changeUserIdHandler}/>
                            <input type="datetime-local" placeholder="date" name="appointmentDate" value={this.state.appointmentDate} onChange={this.changeAppointmentDateHandler}/>
                            <div>
                                <button type="button" className="btn btn-success" onClick={this.saveAppointment}>Add</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        )
    }

}