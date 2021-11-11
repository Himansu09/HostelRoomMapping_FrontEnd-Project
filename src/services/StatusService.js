import axios from "axios";
import authHeader from "./auth-header";

const HOSTEL_STATUS_API_BASE_URL = "http://localhost:8080/api/v1/hostelstatus";

console.log("backend connected" + HOSTEL_STATUS_API_BASE_URL);

class StatusService {
  getHostelStatus() {
    return axios.get(HOSTEL_STATUS_API_BASE_URL, { headers: authHeader() });
  }

  createHostelStatus(hostelstatus) {
    return axios.post(HOSTEL_STATUS_API_BASE_URL, hostelstatus, {
      headers: authHeader(),
    });
  }

  getHostelStatusById(hostelstatusId) {
    return axios.get(HOSTEL_STATUS_API_BASE_URL + "/" + hostelstatusId, {
      headers: authHeader(),
    });
  }

  updateHostelStatus(hostelstatus, hostelstatusId) {
    return axios.put(
      HOSTEL_STATUS_API_BASE_URL + "/" + hostelstatusId,
      hostelstatus,
      { headers: authHeader() }
    );
  }

  deleteHostelStatus(hostelstatusId) {
    return axios.delete(HOSTEL_STATUS_API_BASE_URL + "/" + hostelstatusId, {
      headers: authHeader(),
    });
  }
}

export default new StatusService();
