import React, { Component } from "react";
import { Form, Row, Button } from "react-bootstrap";
import StatusService from "../services/StatusService";

export default class StatusForm extends Component {
    constructor(props){
        super(props);

        this.state = {
            id: this.props.match.params.id,
            availableBed:'',
            feature:'',
            hostelType:'',
            roomNo:''
        }

        this.changeAvailableBedHandler = this.changeAvailableBedHandler.bind(this);
        this.changeFeatureHandler = this.changeFeatureHandler.bind(this);
        this.changeHostelTypeHandler = this.changeHostelTypeHandler.bind(this);
        this.changeRoomNoHandler = this.changeRoomNoHandler.bind(this);
        this.saveHostelStatus =this.saveHostelStatus.bind(this);
    }  

        saveHostelStatus = (e) => {
            e.preventDefault();
            let hostelStatus = {
                availableBed: this.state.availableBed,
                feature: this.state.feature,
                hostelType: this.state.hostelType,
                roomNo: this.state.roomNo
            }
            console.log("hostelStatus => " + JSON.stringify(hostelStatus));

            StatusService.createHostelStatus(hostelStatus).then((res) => {
                this.props.history.push("/adminpage")
            });
        };

        changeAvailableBedHandler = (event) => {
            this.setState({ availableBed: event.target.value });
        };

        changeFeatureHandler = (event) => {
            this.setState({ feature: event.target.value });
        };

        changeHostelTypeHandler = (event) => {
            this.setState({ hostelType: event.target.value });
        };

        changeRoomNoHandler = (event) => {
            this.setState({ roomNo: event.target.value});
        };



    cancel() {
    this.props.history.push("/statuspage");
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
                    <Form.Label>Room No</Form.Label>

                    <Form.Control
                      type="number"
                      value={this.state.roomNo}
                      onChange={this.changeRoomNoHandler}
                    />
                  </Form.Group>
                  <Form.Group controlId="formGridZip">
                    <Form.Label>Available Bed</Form.Label>

                    <Form.Control
                      type="number"
                      value={this.state.availableBed}
                      onChange={this.changeAvailableBedHandler}
                    />
                  </Form.Group>
                  <Form.Group controlId="formGridZip">
                    <Form.Label> Enter Features Of Hostel </Form.Label>

                    <Form.Control
                      as="textarea"
                      row={3}
                      className="text"
                      value={this.state.feature}
                      onChange={this.changeFeatureHandler}
                    />
                  </Form.Group>
                  <Form.Group controlId="formGridState">
                    <Form.Label>Select Hostel Type</Form.Label>
                    <Form.Select
                      type="text"
                      value={this.state.hostelType}
                      onChange={this.changeHostelTypeHandler}
                      defaultValue="Choose..."
                    >
                      <option>Choose..</option>
                      <option>AC</option>
                      <option>NON-AC</option>
                    </Form.Select>
                  </Form.Group>
                </Row>
                <Button
                  className="btn-center me-2"
                  variant="primary"
                  type="submit"
                  onClick={this.saveHostelStatus}
                >
                  Submit
                </Button>
                <Button
                  className="btn-center"
                  variant="primary"
                  type="submit"
                  onClick={this.cancel.bind(this)}
                >
                  
                  Cancel
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
