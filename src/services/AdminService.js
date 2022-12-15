import axios from "axios";

class AdminService{
    getAllAdmin(){
        return axios.get("http://localhost:8686/appointment/adminapi/getalladmins");
    }
}

export default new AdminService();