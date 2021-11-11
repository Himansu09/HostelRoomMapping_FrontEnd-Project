import React, { Component } from 'react'
import { Form, Row, Button } from "react-bootstrap";
import StudentService from "../services/StudentService";
import StatusService from "../services/StatusService";


export default class StatusBooking extends Component {
    constructor(props) {
    super(props);

    this.state = {
      // step 2
      id: this.props.match.params.id,
      name: '',
      phoneNo: '',
      email: '',
      roomNo: '',
      typeOfHostel: '',
      registrationNo: '',
      hostelType:'',
      roomNo:''
    }
    
    this.changeNameHandler = this.changeNameHandler.bind(this);
    this.changePhoneNoHandler = this.changePhoneNoHandler.bind(this);
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.changeRoomNoHandler = this.changeRoomNoHandler.bind(this);
    this.changeTypeOfHostelHandler = this.changeTypeOfHostelHandler.bind(this);
    this.changeRegistrationNoHandler =this.changeRegistrationNoHandler.bind(this);
    this.saveHostel = this.saveHostel.bind(this);
  }

  componentDidMount() {
    StatusService.getHostelStatusById(this.state.id).then((res) => {
      let hostelStatus = res.data;
       console.log("hostelstatus => " + JSON.stringify(hostelStatus));
      this.setState({
        hostelType: hostelStatus.hostelType,
        roomNo: hostelStatus.roomNo,
      });
    });
  }


  saveHostel = (e) => {
    e.preventDefault();
    let hostel = {
      name: this.state.name,
      phoneNo: this.state.phoneNo,
      email: this.state.email,
      roomNo: this.state.roomNo,
      typeOfHostel: this.state.typeOfHostel,
      registrationNo: this.state.registrationNo,
      hostelType: this.state.hostelType,
      roomNo: this.state.roomNo
    };
    console.log("hostel => " + JSON.stringify(hostel));

    StudentService.createHostel(hostel).then((res) => {
      this.props.history.push("/studentpage");
    });
  };


  changeNameHandler = (event) => {
    this.setState({ name: event.target.value });
  };

  changePhoneNoHandler = (event) => {
    this.setState({ phoneNo: event.target.value });
  };

  changeEmailHandler = (event) => {
    this.setState({ email: event.target.value });
  };

  changeRoomNoHandler = (event) => {
    this.setState({ roomNo: event.target.value });
  };

  changeTypeOfHostelHandler = (event) => {
    this.setState({ typeOfHostel: event.target.value });
    this.setState({ hostelType: event.target.value});
  };

  changeRegistrationNoHandler = (event) => {
    this.setState({ registrationNo: event.target.value });
  };

  cancel() {
    this.props.history.push("/studentpage");
  }

    render() {
        return (
           <div className="container mt-5">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3 shadow-lg">
            <h3 className="text-center text mt-2">Booking Here</h3>
            <div className="card-body">
              <Form striped bordered hover variant="light">
                <Row className="mb-3">
                  <Form.Group controlId="formGridZip">
                    <Form.Label>
                      Enter Your Name
                    </Form.Label>
                    
                    <Form.Control
                      type="text"
                      value={this.state.name}
                      onChange={this.changeNameHandler}
                    />
                  </Form.Group>
                  <Form.Group controlId="formGridZip">
                    <Form.Label>
                      Enter Your Registration No.
                    </Form.Label>
                   
                    <Form.Control
                      type="number"
                      value={this.state.registrationNo}
                      onChange={this.changeRegistrationNoHandler}
                    />
                  </Form.Group>
                  <Form.Group controlId="formGridZip">
                    <Form.Label>
                      Enter Your Mail
                    </Form.Label>
                   
                    <Form.Control
                      type="email"
                      value={this.state.email}
                      onChange={this.changeEmailHandler}
                    />
                  </Form.Group>
                  <Form.Group controlId="formGridZip">
                    <Form.Label>
                      Enter contact No.
                    </Form.Label>
                   
                    <Form.Control
                      type="number"
                      value={this.state.phoneNo}
                      onChange={this.changePhoneNoHandler}
                    />
                  </Form.Group>
                  <Form.Group controlId="formGridZip">
                    <Form.Label>
                      Enter Room No.
                    </Form.Label>
                    
                    <Form.Control
                      type="number"
                      value={this.state.roomNo}
                      onChange={this.changeRoomNoHandler}
                    />
                  </Form.Group>
                  <Form.Group controlId="formGridState">
                    <Form.Label>
                      Select Hostel
                    </Form.Label>
                    <Form.Select
                      type="text"
                      value={this.state.typeOfHostel}
                      onChange={this.changeTypeOfHostelHandler}
                      defaultValue="Choose..."
                    >
                       <option
                      >
                        Choose..
                      </option>
                      <option
                      
                      >
                        AC
                      </option>
                      <option 
                      >
                        NON-AC
                      </option>
                    </Form.Select>
                  </Form.Group>
                </Row>
                <Button
                  className="btn-center me-2"
                  variant="primary"
                  type="submit"
                  onClick={this.saveHostel}
                >
                  Submit
                </Button>
                 <Button
                  className="btn-center"
                  variant="primary"
                  type="submit"
                  onClick={this.cancel.bind(this)}
                > Cancel</Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
        )
    }
}
