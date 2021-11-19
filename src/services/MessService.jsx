import axios from "axios";

const BASE_URL = "http://localhost:8080/Student/addstudent"

class MessService {

    getStudent(){
        return axios.get(BASE_URL);
    }
    createMess(student){
        return axios.post(BASE_URL, student);
    }
    getMessById(studentId){
        return axios.get(BASE_URL + '/'  + studentId);
    }
    
    updateMess(student, studentId){
        return axios.put(BASE_URL + '/' + studentId, student)
    }
    deleteMess(studentId){
        return axios.delete(BASE_URL + '/' + studentId);
    }
}

export default new MessService()