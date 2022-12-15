import axios from "axios";

class AppointmentService{

    getAllAppointments(){
        return axios.get("http://localhost:8686/appointment/appointment/viewallappointment");
    }

    createAppointment(appointment){
        return axios.post("http://localhost:8686/appointment/appointment/addappointment",appointment);
    }

    deleteAppointmentById(appointmentId){
        return axios.delete("http://localhost:8686/appointment/appointment/deleteappointmentbyid/"+appointmentId);
    }

    updateAppointment(appointment, id){
        return axios.put("http://localhost:8686/appointment/appointment/updateappointmentbyid/"+id,appointment);
    } 

    getAppointment(id){
        return axios.get("http://localhost:8686/appointment/appointment/getappointmentbyid/"+id);
    }

}

export default new AppointmentService();