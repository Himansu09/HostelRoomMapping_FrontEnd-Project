import axios from 'axios';
import authHeader from "./auth-header";


const URL_ATT = "http://localhost:8080/attendance/addpre";

class Service {


    // for Bus
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
export default new Service();