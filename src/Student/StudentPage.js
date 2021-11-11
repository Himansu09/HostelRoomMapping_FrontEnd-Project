import React, { Component } from "react";
import Backi from "../image/back.png";

export default class StudentPage extends Component {
  cancel() {
    this.props.history.push("/Service");
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
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body shadow-lg">
                <h5 className="card-title">STATUS</h5>
                <p className="card-text">
                  Here student can show status of hostel
                </p>
                <a href="/statustable" className="btn btn-primary">
                  Status 
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body shadow-lg">
                <h5 className="card-title">BOOKING FORM</h5>
                <p className="card-text">
                  Here student can book hostel
                </p>
                <a href="/BookingForm" className="btn btn-primary">
                  Book
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    );
  }
}
