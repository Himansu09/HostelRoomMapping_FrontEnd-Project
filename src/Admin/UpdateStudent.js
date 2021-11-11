import React, { Component } from "react";
import { Form, Row, Button } from "react-bootstrap";
import StudentService from "../services/StudentService";

export default class UpdateStudent extends Component {
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
      registrationNo: ''
    };

    this.changeNameHandler = this.changeNameHandler.bind(this);
    this.changePhoneNoHandler = this.changePhoneNoHandler.bind(this);
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.changeRoomNoHandler = this.changeRoomNoHandler.bind(this);
    this.changeTypeOfHostelHandler = this.changeTypeOfHostelHandler.bind(this);
    this.changeRegistrationNoHandler =
      this.changeRegistrationNoHandler.bind(this);
    this.updateHostel = this.updateHostel.bind(this);
  }

  componentDidMount() {
    StudentService.getHostelById(this.state.id).then((res) => {
      let hostel = res.data;
      this.setState({
        name: hostel.name,
        phoneNo: hostel.phoneNo,
        email: hostel.email,
        roomNo: hostel.roomNo,
        typeOfHostel: hostel.typeOfHostel,
        registrationNo: hostel.registrationNo,
      });
    });
  }

  updateHostel = (e) => {
    e.preventDefault();
    let hostel = {
      name: this.state.name,
      phoneNo: this.state.phoneNo,
      email: this.state.email,
      roomNo: this.state.roomNo,
      typeOfHostel: this.state.typeOfHostel,
      registrationNo: this.state.registrationNo,
    };
    console.log("hostel => " + JSON.stringify(hostel));
    console.log('id =>' + JSON.stringify(this.state.id));
    StudentService.updateHostel(hostel, this.state.id).then((res) => {
      this.props.history.push('/mappingtable');
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
  };

  changeRegistrationNoHandler = (event) => {
    this.setState({ registrationNo: event.target.value });
  };

  cancel() {
    this.props.history.push("/mappingtable");
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3 shadow-lg">
            <h3 className="text-center text mt-2">Update Student</h3>
            <div className="card-body">
              <Form striped bordered hover variant="light">
                <Row className="mb-3">
                  <Form.Group controlId="formGridZip">
                    <Form.Label className="text">
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
                    <Form.Label >
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
                  onClick={this.updateHostel}
                >
                  Update
                </Button>
                <Button
                  className="btn-center"
                  variant="primary"
                  type="submit"
                  onClick={this.cancel.bind(this)}
                >
                  cancel
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
