import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";

export default class Successful extends Component {
  render() {
    return (
      <div className="container mt-5">
        <div className="container">
          <Card className="text-center shadow-lg">
            <Card.Body>
              <Card.Title>Successfully Submitted</Card.Title>
              <Card.Text>We will reach you soon...</Card.Text>
              <Button variant="primary" href="/">
                OK
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}
