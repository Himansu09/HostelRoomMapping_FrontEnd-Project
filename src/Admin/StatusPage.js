import React, { Component } from "react";
import Backi from "../image/back.png";

export default class StatusPage extends Component {
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
        <div className="container mt-5">
          <div className="row">
            <div className="col-sm-6">
              <div className="card">
                <div className="card-body shadow-lg">
                  <h5 className="card-title">GIVE STATUS</h5>
                  <p className="card-text">Here admin can give hostel status</p>
                  <a href="/statusform" className="btn btn-primary">
                    Give Status
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card">
                <div className="card-body shadow-lg">
                  <h5 className="card-title">UPDATE STATUS</h5>
                  <p className="card-text">Here admin edit hostel status</p>
                  <a href="/adminstatustable" className="btn btn-primary">
                    Edit Status
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
