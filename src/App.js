import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import Cardbody from "./components/cardbody";
import Bookingform from "./Student/BookingForm";
import Mappingtable from "./Admin/mappingtable";
import UpdateStudent from "./Admin/UpdateStudent";
import AdminPage from "./Admin/AdminPage";
import StudentPage from "./Student/StudentPage";
import StatusTable from "./Student/StatusTable";
import StatusForm from "./Admin/StatusForm";
import AdminStatusTable from "./Admin/AdminStatusTable";
import StatusPage from "./Admin/StatusPage";
import UpdateStatusForm from "./Admin/UpdateStatusForm";
import StatusBooking from "./Student/StatusBooking";
import Navbar from "./components/navbar";
import CreateComponent from "./mess/CreateComponent";
import ListMessComponent from "./mess/ListMessComponent";
import AttendanceTable from "./Attendance/AttendanceTable";
import AddAtendace from "./Attendance/AddAtendance";
import UpdateAttendance from "./Attendance/UpdateAttendance";
import MessTable from "./mess/MessTable";
import Contactform from "./helpdesk/contactform";
import HelpdeskTable from "./helpdesk/HelpdeskTable";
import Successful from "./helpdesk/Successful";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div
          className="
         mt-3"
        >
          <Switch>
            <Route exact path={["/", "/home"]} component={Cardbody} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/" component={Cardbody} />
            <Route path="/BookingForm" component={Bookingform} />
            <Route path="/mappingtable" component={Mappingtable} />
            <Route path="/contactform" component={Contactform} />
            <Route path="/updatestudent/:id" component={UpdateStudent} />
            <Route path="/adminpage" component={AdminPage} />
            <Route path="/studentpage" component={StudentPage} />
            <Route path="/statustable" component={StatusTable} />
            <Route path="/statusform" component={StatusForm} />
            <Route path="/adminstatustable" component={AdminStatusTable} />
            <Route path="/statuspage" component={StatusPage} />
            <Route path="/updatestatusform/:id" component={UpdateStatusForm} />
            <Route path="/statusbooking/:id" component={StatusBooking} />
            <Route exact path="/AttendaceTable" component={AttendanceTable} />
            <Route exact path="/AddAtendace" component={AddAtendace} />
            <Route
              exact
              path="/updateattendace/:id"
              component={UpdateAttendance}
            />
            <Route exact path="/messtable" component={ListMessComponent} />
            <Route
              exact
              path="/updatemesstable/:id"
              component={CreateComponent}
            />
            <Route exact path="/messtablestudent" component={MessTable} />
            <Route exact path="/helpdesktable" component={HelpdeskTable} />
            <Route exact path="/success" component={Successful} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
