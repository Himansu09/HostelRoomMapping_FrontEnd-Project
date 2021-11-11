import axios from "axios";

const HOSTEL_API_BASE_URL = "http://localhost:8080/api/v1/hostels"

console.log("backend connected" + HOSTEL_API_BASE_URL );

class StudentService{
     getHostels(){
        return axios.get(HOSTEL_API_BASE_URL);
    }

    createHostel(hostel){
        return axios.post(HOSTEL_API_BASE_URL, hostel);
    }

    getHostelById(hostelId){
        return axios.get(HOSTEL_API_BASE_URL + '/' + hostelId);
    }

    updateHostel(hostel, hostelId){
        return axios.put(HOSTEL_API_BASE_URL + '/' + hostelId, hostel);
    }

    deleteHostel(hostelId){
        return axios.delete(HOSTEL_API_BASE_URL + '/' + hostelId);
    }


}


export default new StudentService()