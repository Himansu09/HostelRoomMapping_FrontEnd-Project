import React, { Component } from 'react'
import Service from '../Service';
import { Form, Row, Button } from "react-bootstrap";

export default class addAtendance extends Component {
    constructor(props) {
        super(props);
    
    
        this.state = {
          
    attend: '',
    hostelType: '',
    name:'',
    roomno:'',
    regdno:''
    
        }
        this.changeAttendHandler = this.changeAttendHandler.bind(this);
        this.changeHostelTypeHandler = this.changeHostelTypeHandler.bind(this);
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeRoomnoHandler = this.changeRoomnoHandler.bind(this);
        this.changeRegdnoHandler = this.changeRegdnoHandler.bind(this);

        this.saveAttendance = this.saveAttendance.bind(this);
      }
  
      saveAttendance = (e) =>{
        e.preventDefault();
    
        let attendance = {
          attend: this.state.attend,
          hostelType : this.state.hostelType,
          name:this.state.name,
          roomno:this.state.roomno,
          regdno:this.state.regdno }
        console.log('attendance =>' + JSON.stringify(attendance));
    
        Service.createAttendance(attendance).then(res =>{
          this.props.history.push('/AttendaceTable');
        });
    
        
      }
      changeAttendHandler(event){
        this.setState({attend: event.target.value})
      }
    
      changeHostelTypeHandler(event){
        this.setState({hostelType: event.target.value})
      }
   
      changeNameHandler(event){
        this.setState({name: event.target.value})
      }
    
      changeRoomnoHandler(event){
        this.setState({roomno: event.target.value})
      }
      changeRegdnoHandler(event){
        this.setState({regdno: event.target.value})
      }

      
      cancel(){
        this.props.history.push("/AttendaceTable");
      }
    
      render() {
        return (
    
    <>
    
    <div>
         <div className="card col-md-6 pt-9 offset-md-3 offset-md-3  bg-light shadow-lg rounded">
            <h3 className="text-center text mt-2">ATTENDANCE</h3>
            <div className="card-body">
              <Form striped bordered hover variant="light">
                <Row className="mb-3">
                    <Form.Group controlId="formGridState">
                      <Form.Label>
                        Mark Status
                      </Form.Label>
                      
                      <Form.Select
                        type="text"
                        value={this.state.attend}
                        onChange={this.changeAttendHandler}
                         defaultValue=" "
                      >
                        <option>Choose..</option>
                        <option>Present</option>
                        <option>Absent</option>                        
                        </Form.Select>
                    </Form.Group>
                    <Form.Group controlId="formGridState">
                      <Form.Label>
                        Hostel Type
                      </Form.Label>
                    
                      <Form.Select
                        type="text"
                        value={this.state.hostelType}
                        onChange={this.changeHostelTypeHandler}
                      >
                        <option>AC</option>
                        <option>NON-AC</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group controlId="formGridZip">
                      <Form.Label>
                        Enter Your Name
                      </Form.Label>
                    
                      <Form.Control
                        type="text"
                        value={this.state.name}
                        onChange={this.changeNameHandler}
                      />
                    </Form.Group>
                    <Form.Group controlId="formGridZip">
                      <Form.Label>
                        room
                      </Form.Label>
                    
                      <Form.Control
                        type="Number"
                        value={this.state.roomno}
                        onChange={this.changeRoomnoHandler}
                      />
                    </Form.Group>
                    <Form.Group controlId="formGridZip">
                      <Form.Label>
                        regdno
                      </Form.Label>
                      <Form.Control
                        type="Number"
                        value={this.state.regdno}
                        onChange={this.changeRegdnoHandler}
                      />
                  </Form.Group>
                </Row>
                <Button
                  className="btn-center me-2"
                  variant="primary"
                  type="submit"
                  onClick={this.saveAttendance}
                >
                  Submit
                </Button>
                 <Button
                  className="btn-center"
                  variant="primary"
                  type="submit"
                  onClick={this.cancel.bind(this)}
                > Cancel</Button>
              </Form>
            </div>
          </div>
        </div>
      
  
          </>
        );
      }
}
