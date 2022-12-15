import React, { Component } from "react";
import AppointmentService from "../services/AppointmentService";
// import { NavAfterLoginUser } from "../NavAfterLoginUser";

export class AddAppointmentComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            appointmentDate: '',
            appointmentStatus: '',
            userId: '',
            doctorId:'',
            fee: '',
        }

        this.changeAppointmentDateHandler = this.changeAppointmentDateHandler.bind(this);
        this.changeAppointmentStatusHandler = this.changeAppointmentStatusHandler.bind(this);
        this.changeUserIdHandler = this.changeUserIdHandler.bind(this);
        this.changeDoctorIdHandler = this.changeDoctorIdHandler.bind(this);
        this.changeFeeHandler = this.changeFeeHandler.bind(this);

        this.saveAppointment = this.saveAppointment.bind(this);


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

    render() {
        return (
            <div>
                {/* <NavAfterLoginUser /> */}
                <br ></br>
                <div className="container">
                    <div>
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h2>Add an Appointment</h2>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                  <label >Appointment Date</label>
                                  <input type="datetime-local" name="appointmentDate"  className="form-control" placeholder="Enter Appointment Date" 
                                   value={this.state.appointmentDate} onChange={this.changeAppointmentDateHandler} />
                                </div>
                                <div className="form-group">
                                  <label >Appointment Status</label>
                                  <input type="text" name="appointmentStatus"  className="form-control" placeholder="Enter Appointment Status" 
                                   value={this.state.appointmentStatus} onChange={this.changeAppointmentStatusHandler} />
                                </div>
                                <div className="form-group">
                                  <label >User Id</label>
                                  <input type="text" name="userId"  className="form-control" placeholder="Enter User Id" 
                                   value={this.state.userId} onChange={this.changeUserIdHandler} />
                                </div>
                                <div className="form-group">
                                  <label >Doctor Id</label>
                                  <input type="text" name="doctorId"  className="form-control" placeholder="Enter Doctor Id" 
                                   value={this.state.doctorId} onChange={this.changeDoctorIdHandler} />
                                </div>
                                <div className="form-group">
                                  <label >Fee</label>
                                  <input type="text" name="fee"  className="form-control" placeholder="Enter Fee" 
                                   value={this.state.fee} onChange={this.changeFeeHandler} />
                                </div>
                                <button type="button" className="btn btn-success" onClick={this.saveAppointment}>Add appointment</button>
                                <button type="button" className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }

}