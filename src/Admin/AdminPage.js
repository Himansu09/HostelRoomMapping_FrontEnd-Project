import React, { Component } from "react";
import Backi from "../image/back.png";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
const AdminPage = ({ component: roles }) => {
  const { user: currentUser } = useSelector((state) => state.auth);

  if (currentUser.roles == "ROLE_USER") {
    return <Redirect to="/studentpage" />;
  } else {
    return (
      <>
        <div>
          <a class="btn-c" href="/" role="button">
            <img src={Backi} class="rounded btn-c float-start" alt="..."></img>
          </a>
        </div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-sm-6">
              <div className="card">
                <div className="card-body shadow-lg">
                  <h5 className="card-title">BOOKING TABLE</h5>
                  <p className="card-text">
                    Here admin can show student list, whose are register for
                    hostel
                  </p>
                  <a href="/mappingtable" className="btn btn-primary">
                    Table
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card">
                <div className="card-body shadow-lg">
                  <h5 className="card-title">ATTENDANCE</h5>
                  <p className="card-text">
                    Here admin can give student Attendance
                  </p>
                  <a href="/AttendaceTable" className="btn btn-primary">
                    Attendance
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 mt-4">
              <div className="card">
                <div className="card-body shadow-lg">
                  <h5 className="card-title">STATUS PAGE</h5>
                  <p className="card-text">
                    Here admin give and edit hostel status
                  </p>
                  <a href="/statuspage" className="btn btn-primary">
                    Status
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};
export default AdminPage;
