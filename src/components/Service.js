import React, { Component } from "react";
import Backi from "../image/back.png";


export default class Service extends Component {
  cancel() {
    this.props.history.push("/");
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
                <h5 className="card-title">Student Page</h5>
                <p className="card-text">
                  Only Student Can Click on Button
                </p>
                <a href="/studentpage" className="btn btn-primary">
                  Student
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body shadow-lg">
                <h5 className="card-title">Admin Page</h5>
                <p className="card-text">
                  Only Admin  Can Click on Button
                </p>
                <a href="/adminpage" className="btn btn-primary">
                  Admin
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
