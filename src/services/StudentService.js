import axios from "axios";
import authHeader from "./auth-header";

const HOSTEL_API_BASE_URL = "http://localhost:8080/api/v1/hostels";

console.log("backend connected" + HOSTEL_API_BASE_URL);

class StudentService {
  getHostels() {
    return axios.get(HOSTEL_API_BASE_URL, { headers: authHeader() });
  }

  createHostel(hostel) {
    return axios.post(HOSTEL_API_BASE_URL, hostel, {
      headers: authHeader(),
    });
  }

  getHostelById(hostelId) {
    return axios.get(HOSTEL_API_BASE_URL + "/" + hostelId, {
      headers: authHeader(),
    });
  }

  updateHostel(hostel, hostelId) {
    return axios.put(HOSTEL_API_BASE_URL + "/" + hostelId, hostel, {
      headers: authHeader(),
    });
  }
  // Delete
  deleteHostel(hostelId) {
    return axios.delete(HOSTEL_API_BASE_URL + "/" + hostelId, {
      headers: authHeader(),
    });
  }
}

export default new StudentService();
