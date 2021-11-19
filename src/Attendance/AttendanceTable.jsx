import React, { Component } from "react";
import { Table } from "react-bootstrap";
import StudentService from "../services/StudentService";
import Backi from "../image/back.png";

export default class AttendanceTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      atten_data: [],
    };
    

    this.addAttendance = this.addAttendance.bind(this);
    this.editAttendance = this.editAttendance.bind(this);
    this.deleteAttendance = this.deleteAttendance.bind(this);
  }

  deleteAttendance(id) {
    StudentService.deleteAttendance(id).then((res) => {
      this.setState({
        atten_data: this.state.atten_data.filter(
          (attendance) => attendance.id !== id
        ),
      });
    });
  }
  editAttendance(id) {
    this.props.history.push(`/updateattendace/${id}`);
  }
  
  componentDidMount() {
    StudentService.getAttendance().then((res) => {
      this.setState({ atten_data: res.data });
    });
  }
  addAttendance() {
    this.props.history.push("/AddAtendace");
  }
   cancel() {
    this.props.history.push("/adminpage");
  }
  
  render() {
    return (
      <>
      <a
            class="btn-c"
            href="#"
            role="button"
            onClick={this.cancel.bind(this)}
          >
            <img src={Backi} class="rounded btn-c float-start" alt="..."></img>
          </a>
        <div className=" container  mt-5 ">                    
          <button
            type="button"
            style={{ marginLeft: "980px" }}
            className="btn btn-primary"
            onClick={this.addAttendance}
          >
            ATTENDANCE
          </button>
          </div>
        <div className="container shadow-lg mt-5 table-data bg-light">
          <h1 className="text-center">ATTENDANCE TABLE</h1>
          <Table striped bordered hover variant="light">
            <thead>
              <tr>
                <th>Name</th>
                <th>Room No</th>
                <th>Registration No</th>
                <th>Status</th>
                <th>Hostel Type</th>
              </tr>
            </thead>
            <tbody>
              {this.state.atten_data.map(attendance => (
                <tr key={attendance.id}>
                  <td> {attendance.name} </td>
                  <td>{attendance.roomno}</td>
                  <td> {attendance.regdno}</td>

                  <td> {attendance.attend}</td>
                  <td> {attendance.hostelType}</td>
                  <td>
                    <button
                      onClick={() => this.editAttendance(attendance.id)}
                      className="btn btn-info"
                    >
                      Update
                    </button>
                    <button
                      style={{ marginLeft: "10px" }}
                      onClick={() => this.deleteAttendance(attendance.id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </>
    );
  }
}
