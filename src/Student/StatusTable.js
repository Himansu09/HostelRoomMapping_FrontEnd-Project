import React, { Component } from "react";
import Backi from "../image/back.png";
import { Table } from "react-bootstrap";
import StatusService from "../services/StatusService";

export default class StatusTable extends Component {

  constructor(props) {
    super(props);

    this.state = {
      hostelStatus : []
    };
    this.editHostelStatus = this.editHostelStatus.bind(this);
    this.deleteHostelStatus = this.deleteHostelStatus.bind(this);
  }

 

  deleteHostelStatus(id) {
    StatusService.deleteHostelStatus(id).then((res) =>{
      this.setState({
        hostelStatus: this.state.hostelStatus.filter(
          (hostelStatus) => hostelStatus.id !== id
        )
      })
    })
  }

  editHostelStatus(id){
    this.props.history.push(`/statusform/${id}`)
  }

 
  componentDidMount() {
    StatusService.getHostelStatus().then((res) =>{
      this.setState({hostelStatus: res.data})
    })
  }


  cancel() {
    this.props.history.push("/studentpage");
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
        <h1 className="text-center">Hostel Status</h1>
        <Table striped bordered hover variant="light">          
          <thead>
            <tr>
              <th>Room No</th>
              <th>Available Bed</th>
              <th>Features</th>
              <th>Hostel Type</th>              
            </tr>
          </thead>
          <tbody>
            {this.state.hostelStatus.map((hostelStatus) => (
              <tr key={hostelStatus.id}>
                <td> {hostelStatus.roomNo} </td>
                <td> {hostelStatus.availableBed}</td>

                <td> {hostelStatus.feature}</td>
                <td> {hostelStatus.hostelType}</td>  
                <td> 
                  <a class="btn btn-primary" href={'/statusbooking'} role="button">Book</a>               
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
