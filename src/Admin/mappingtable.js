import React, { Component } from "react";
import { Table } from "react-bootstrap";
import "../App.css";
import StudentService from "../services/StudentService";
import Backi from "../image/back.png";



export default class mappingtable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hostels:[]
    };
    this.editHostel = this.editHostel.bind(this);
    this.deleteHostel = this.deleteHostel.bind(this);
  }

  deleteHostel(id) {
    StudentService.deleteHostel(id).then((res) => {
      this.setState({
        hostels: this.state.hostels.filter(
          (hostel) => hostel.id !== id
        )
      });
    });
  }
 
  editHostel(id) {
    this.props.history.push(`/updatestudent/${id}`);
  }

  componentDidMount() {
    StudentService.getHostels().then((res) => {
      this.setState({ hostels: res.data });
    });
  }

  cancel() {
    this.props.history.push("/adminpage");
  }

 

  render() {
    return (
      <>
      <div>
          <a
            class="btn-c"
            href="#"
            role="button"
            onClick={this.cancel.bind(this)}
          >
            <img src={Backi} class="rounded btn-c float-start" alt="..."></img>
          </a>
        </div>
      <div className="container shadow-lg mt-5 table-data bg-light">
        <h1 className="text-center">BOOKING TABLE</h1>
        <Table striped bordered hover variant="light">          
          <thead>
            <tr>
              <th>Name</th>
              <th>Registration No.</th>
              <th>Mail</th>
              <th>contact No.</th>
              <th>Room No.</th>
              <th>Hostel</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.hostels.map((hostel) => (
              <tr key={hostel.id}>
                <td> {hostel.name} </td>
                <td> {hostel.registrationNo}</td>

                <td> {hostel.email}</td>
                <td> {hostel.phoneNo}</td>

                <td> {hostel.roomNo}</td>
                <td> {hostel.typeOfHostel}</td>
                <td>
                  <button
                    onClick={() => this.editHostel(hostel.id)}
                    className="btn btn-info"
                  >
                    Update
                  </button>
                  <button
                    style={{ marginLeft: "10px" }}
                    onClick={() => this.deleteHostel(hostel.id)}
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
