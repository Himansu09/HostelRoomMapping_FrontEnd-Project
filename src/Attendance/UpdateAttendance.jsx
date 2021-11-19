import React, { Component } from "react";
import StudentService from "../services/StudentService";
import { Form, Row, Button } from "react-bootstrap";

export default class UpdateAttendance extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      attend: "",
      hostelType: "",
      name: "",
      roomno: "",
      regdno: "",
    };
    this.changeAttendHandler = this.changeAttendHandler.bind(this);
    this.changeHosteTypelHandler = this.changeHostelTypeHandler.bind(this);
    this.changeNameHandler = this.changeNameHandler.bind(this);
    this.changeRoomnoHandler = this.changeRoomnoHandler.bind(this);
    this.changeRegdnoHandler = this.changeRegdnoHandler.bind(this);
    this.updateAttendance = this.updateAttendance.bind(this);
  }

  componentDidMount() {
    StudentService.getAttendanceById(this.state.id).then((res) => {
      let attendance = res.data;
      this.setState({
        attend: attendance.attend,
        hostelType: attendance.hostelType,
        name: attendance.name,
        roomno: attendance.roomno,
        regdno: attendance.regdno,
      });
    });
  }
  updateAttendance = (e) => {
    e.preventDefault();

    let attendance = {
      attend: this.state.attend,
      hostelType: this.state.hostelType,
      name: this.state.name,
      roomno: this.state.roomno,
      regdno: this.state.regdno,
    };
    console.log("attendance =>" + JSON.stringify(attendance));
    console.log("id =>" + JSON.stringify(this.state.id));
    StudentService.updateAttendance(attendance, this.state.id).then((res) => {
      this.props.history.push("/AttendaceTable");
    });
  };
  changeAttendHandler(event) {
    this.setState({ attend: event.target.value });
  }

  changeHostelTypeHandler(event) {
    this.setState({ hostelType: event.target.value });
  }

  changeNameHandler(event) {
    this.setState({ name: event.target.value });
  }
  changeRoomnoHandler(event) {
    this.setState({ roomno: event.target.value });
  }
  changeRegdnoHandler(event) {
    this.setState({ regdno: event.target.value });
  }

  cancel() {
    this.props.history.push("/AttendaceTable");
  }

  render() {
    return (
      <>
        <div>
          <div className="card col-md-6 pt-9 offset-md-3 offset-md-3  bg-light shadow-lg rounded">
            <h3 className="text-center text mt-2">ATTENDANCE</h3>
            <div className="card-body">
              <Form striped bordered hover variant="light">
                <Row className="mb-3">
                  <Form.Group controlId="formGridZip">
                    <Form.Label>Mark Status</Form.Label>

                    <Form.Select
                      type="text"
                      value={this.state.attend}
                      onChange={this.changeAttendHandler}
                    >
                      <option>Present</option>
                      <option>Absent</option>
                      </Form.Select>
                  </Form.Group>
                  <Form.Group controlId="formGridZip">
                    <Form.Label>Hostel Type</Form.Label>

                    <Form.Select
                      type="text"
                      value={this.state.hostelType}
                      onChange={this.changeHostelTypeHandler}
                    >
                      <option>AC</option>
                      <option>NON-AC</option>
                      </Form.Select>
                  </Form.Group>
                  <Form.Group controlId="formGridZip">
                    <Form.Label>Enter Student Name</Form.Label>

                    <Form.Control
                      type="text"
                      value={this.state.name}
                      onChange={this.changeNameHandler}
                    />
                  </Form.Group>
                  <Form.Group controlId="formGridZip">
                    <Form.Label>Room</Form.Label>

                    <Form.Control
                      type="number"
                      value={this.state.roomno}
                      onChange={this.changeRoomnoHandler}
                    />
                  </Form.Group>
                  <Form.Group controlId="formGridZip">
                    <Form.Label>Regdno</Form.Label>
                    <Form.Control
                      type="number"
                      value={this.state.regdno}
                      onChange={this.changeRegdnoHandler}
                    />
                  </Form.Group>
                </Row>
                <button
                  onClick={this.updateAttendance}
                  className="btn btn-primary"
                >
                  Update{" "}
                </button>

                <button
                 className="btn btn-primary ms-2"                  
                  onClick={this.cancel.bind(this)}
                >
                  Cancel
                </button>
              </Form>
            </div>
          </div>
        </div>
      </>
    );
  }
}
