import axios from "axios";

const HOSTEL_STATUS_API_BASE_URL = "http://localhost:8080/api/v1/hostelstatus"

console.log("backend connected" + HOSTEL_STATUS_API_BASE_URL );

class StatusService{
     getHostelStatus(){
        return axios.get(HOSTEL_STATUS_API_BASE_URL);
    }

    createHostelStatus(hostelstatus){
        return axios.post(HOSTEL_STATUS_API_BASE_URL, hostelstatus);
    }

    getHostelStatusById(hostelstatusId){
        return axios.get(HOSTEL_STATUS_API_BASE_URL + '/' + hostelstatusId);
    }

    updateHostelStatus(hostelstatus, hostelstatusId){
        return axios.put(HOSTEL_STATUS_API_BASE_URL + '/' + hostelstatusId, hostelstatus);
    }

    deleteHostelStatus(hostelstatusId){
        return axios.delete(HOSTEL_STATUS_API_BASE_URL + '/' + hostelstatusId);
    }


}


export default new StatusService()