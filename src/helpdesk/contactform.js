import React, { Component } from "react";
import { Form, Button, Row } from "react-bootstrap";
import HelpDeskService from "../services/HelpDeskService";

export default class contactform extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      data: "",
      regdno: "",
      email: "",
    };
    this.changeNameHandler = this.changeNameHandler.bind(this);
    this.changeDataHandler = this.changeDataHandler.bind(this);
    this.changeRegdHandler = this.changeRegdHandler.bind(this);
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.saveFeed = this.saveFeed.bind(this);
  }

  saveFeed = (e) => {
    e.preventDefault();

    let feed = {
      name: this.state.name,
      data: this.state.data,
      regdno: this.state.regdno,
      email: this.state.email,
    };

    console.log("feed =>" + JSON.stringify(feed));

    HelpDeskService.Createfeed(feed).then((res) => {
      this.props.history.push("/success");
    });
  };

  changeDataHandler(event) {
    this.setState({ data: event.target.value });
  }

  changeNameHandler(event) {
    this.setState({ name: event.target.value });
  }

  changeRegdHandler(event) {
    this.setState({ regdno: event.target.value });
  }

  changeEmailHandler(event) {
    this.setState({ email: event.target.value });
  }

  render() {
    return (
      <>
        <div className="container mt-5">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3 shadow">
              <h3 className="text-center text mt-2">Enter Your Details</h3>
              <div className="card-body">
                <Form striped bordered hover variant="light">
                  <Row className="mb-3">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        value={this.state.name}
                        onChange={this.changeNameHandler}
                        rows={1}
                      />
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                      >
                        <Form.Label>Registration no.</Form.Label>
                        <Form.Control
                          type="number"
                          value={this.state.regdno}
                          onChange={this.changeRegdHandler}
                          rows={1}
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                      ></Form.Group>
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        value={this.state.email}
                        onChange={this.changeEmailHandler}
                        placeholder="name@example.com"
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label>Enter Here</Form.Label>
                      <Form.Control
                        as="textarea"
                        value={this.state.data}
                        onChange={this.changeDataHandler}
                        rows={3}
                      />
                    </Form.Group>
                  </Row>

                  <Button
                    className="btn-center me-2"
                    variant="primary"
                    type="submit"
                    onClick={this.saveFeed}
                  >
                    Submit
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
