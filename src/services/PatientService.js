import axios from "axios";

class PatientService{
    getAllPatients(){
        return axios.get("http://localhost:8686/appointment/patient/getallpatient");
    }
    deletePatient(userId){
        return axios.delete("http://localhost:8686/appointment/patient/deletepatientbyid/"+userId);
    }
    createPatient(patient){
        return axios.post("http://localhost:8686/appointment/patient/addpatient",patient);
    }
    updatePatient(patient,id){
        // return axios.put("http://localhost:8686/appointment/patient/updatepatientbyid/"+id, patient);
        return axios.put("http://localhost:8686/appointment/patient/updatepatientbyid/"+id,patient);
    }
    getPatient(id){
        return axios.get("http://localhost:8686/appointment/patient/getpatientbyid/"+id);
    }

}
export default new PatientService();