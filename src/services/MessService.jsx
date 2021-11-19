import axios from "axios";
import authHeader from "./auth-header";

const BASE_URL = "http://localhost:8080/Student/addstudent"

class MessService {

    getStudent(){
        return axios.get(BASE_URL, { headers: authHeader() });
    }
    createMess(student){
        return axios.post(BASE_URL, student, { headers: authHeader() });
    }
    getMessById(studentId){
        return axios.get(BASE_URL + '/'  + studentId, { headers: authHeader() });
    }
    
    updateMess(student, studentId){
        return axios.put(BASE_URL + '/' + studentId, student, { headers: authHeader() })
    }
    deleteMess(studentId){
        return axios.delete(BASE_URL + '/' + studentId, { headers: authHeader() });
    }
}

export default new MessService()