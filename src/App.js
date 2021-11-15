import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import EventBus from "./common/EventBus";
import Cardbody from "./components/cardbody";
import Bookingform from "./Student/BookingForm";
import Mappingtable from "./Admin/mappingtable";
import Contactform from "./components/contactform";
import UpdateStudent from "./Admin/UpdateStudent";
import Service from "./components/Service";
import AdminPage from "./Admin/AdminPage";
import StudentPage from "./Student/StudentPage";
import StatusTable from "./Student/StatusTable";
import StatusForm from "./Admin/StatusForm";
import AdminStatusTable from "./Admin/AdminStatusTable";
import StatusPage from "./Admin/StatusPage";
import UpdateStatusForm from "./Admin/UpdateStatusForm";
import StatusBooking from "./Student/StatusBooking";
import Navbar from "./components/navbar";

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
            <Route path="/service" component={Service} />
            <Route path="/adminpage" component={AdminPage} />
            <Route path="/studentpage" component={StudentPage} />
            <Route path="/statustable" component={StatusTable} />
            <Route path="/statusform" component={StatusForm} />
            <Route path="/adminstatustable" component={AdminStatusTable} />
            <Route path="/statuspage" component={StatusPage} />
            <Route path="/updatestatusform/:id" component={UpdateStatusForm} />
            <Route path="/statusbooking/:id" component={StatusBooking} />
          </Switch>
        </div>

        {/* <AuthVerify logOut={logOut}/> */}
      </div>
    </Router>
  );
}
// fgjg

export default App;
