import React, { Component } from "react";
import { Form, Button, Row } from "react-bootstrap";

export default class contactform extends Component {
  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3 shadow-lg">
            <h3 className="text-center text mt-2">Enter Your Details</h3>
            <div className="card-body">
              <Form striped bordered hover variant="light">
                <Row className="mb-3">
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Enter Here</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>
                </Row>
                <Button
                  className="btn-center me-2"
                  variant="primary"
                  type="submit"
                  onClick=""
                >
                  Submit
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
