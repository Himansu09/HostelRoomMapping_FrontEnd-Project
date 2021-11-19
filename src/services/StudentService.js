import axios from "axios";
import authHeader from "./auth-header";

const HOSTEL_API_BASE_URL = "http://localhost:8080/api/v1/hostels";
const URL_ATT = "http://localhost:8080/attendance/addpre";

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

  getAttendance() {
    return axios.get(URL_ATT, { headers: authHeader() });
  }

  createAttendance(attendance) {
    return axios.post(URL_ATT, attendance, { headers: authHeader() });
  }
  createAttendance(attendance) {
    return axios.post(URL_ATT, attendance, { headers: authHeader() });
  }
  getAttendanceById(attendanceId) {
    return axios.get(URL_ATT + "/" + attendanceId, { headers: authHeader() });
  }

  updateAttendance(attendance, attendanceId) {
    return axios.put(URL_ATT + "/" + attendanceId, attendance, {
      headers: authHeader(),
    });
  }
  deleteAttendance(attendanceId) {
    return axios.delete(URL_ATT + "/" + attendanceId, {
      headers: authHeader(),
    });
  }
}

export default new StudentService();
