import React, { Component } from "react";
import HelpDeskService from "../services/HelpDeskService";
import Backi from "../image/back.png";

export default class HelpdeskTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      helpdesk: [],
    };
    this.deletefeed = this.deletefeed.bind(this);
  }

  deletefeed(id) {
    HelpDeskService.deletefeed(id).then((res) => {
      this.setState({
        helpdesk: this.state.helpdesk.filter((feed) => feed.id !== id),
      });
    });
  }

  componentDidMount() {
    HelpDeskService.getfeed().then((res) => {
      this.setState({ helpdesk: res.data });
    });
  }

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
        <div className="container mt-5 bg-light">
          <h2 className="text-center">Helpdesk Table</h2>

          <div className="row">
            <table className="table table-striped  table-bordered">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Registration No</th>
                  <th>Mail Id</th>
                  <th>About Problem</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {this.state.helpdesk.map((feed) => (
                  <tr key={feed.id}>
                    <td> {feed.name} </td>
                    <td> {feed.regdno} </td>
                    <td> {feed.email} </td>
                    <td> {feed.data} </td>
                    <td>
                      <button
                        style={{ marginLeft: "10px" }}
                        onClick={() => this.deletefeed(feed.id)}
                        className="btn btn-danger"
                      >
                        Contacted
                      </button>{" "}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
}
