import React, { Component } from 'react'
import { Form, Row, Button } from "react-bootstrap";
import MessService from '../services/MessService';

class CreateComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            day: '',
            breakfast: '',
            lunch: '',
            snack: '',
            dinner: ''
        }
        this.changeDayHandler = this.changeDayHandler.bind(this);
        this.changeBreakfastHandler = this.changeBreakfastHandler.bind(this);
        this.changeLunchHandler = this.changeLunchHandler.bind(this);
        this.changeSnackHandler = this.changeSnackHandler.bind(this);
        this.changeDinnerHandler = this.changeDinnerHandler.bind(this);
        this.saveOrUpdateStudent = this.saveOrUpdateStudent.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            MessService.getMessById(this.state.id).then( (res) =>{
                let student = res.data;
                this.setState({
                    day: student.day,
                    breakfast: student.breakfast,
                    lunch : student.lunch,
                    snack: student.snack,
                    dinner: student.dinner
                    
                });
            });
        }        
    }
    saveOrUpdateStudent = (e) => {
        e.preventDefault();
        let student = {day: this.state.day,breakfast: this.state.breakfast, lunch: this.state.lunch, snack: this.state.snack,dinner: this.state.dinner};
        console.log('student => ' + JSON.stringify(student));

        // step 5
        if(this.state.id === '_add'){
            MessService.createMess(student).then(res =>{
                this.props.history.push('/messtable');
            });
        }else{
            MessService.updateMess(student, this.state.id).then( res => {
                this.props.history.push('/messtable');
            });
        }
    }
    
    changeDayHandler= (event) => {
        this.setState({day: event.target.value});
    }

    changeBreakfastHandler= (event) => {
        this.setState({breakfast: event.target.value});
    }

    changeLunchHandler= (event) => {
        this.setState({lunch: event.target.value});
    }

    changeSnackHandler= (event) => {
        this.setState({snack: event.target.value});
    }

    changeDinnerHandler= (event) => {
        this.setState({dinner: event.target.value});
    }

   
    cancel(){
        this.props.history.push('/mess');
    }

    
    
    render() {
        return (
            <div className="container mt-5">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3 shadow-lg">
            <h3 className="text-center text mt-2">Update Canteen Timetable</h3>
            <div className="card-body">
              <Form striped bordered hover variant="light">
                <Row className="mb-3">
                  <Form.Group controlId="formGridZip">
                    <Form.Label>Enter Day</Form.Label>

                    <Form.Control
                      type="text"
                      value={this.state.day}
                      onChange={this.changeDayHandler}
                    />
                  </Form.Group>
                  <Form.Group controlId="formGridZip">
                    <Form.Label>Available in Breakfast</Form.Label>

                    <Form.Control
                      type="text"
                      value={this.state.breakfast}
                      onChange={this.changeBreakfastHandler}
                    />
                  </Form.Group>
                  <Form.Group controlId="formGridZip">
                    <Form.Label>Available in Lunch</Form.Label>

                    <Form.Control                
                      className="text"
                      value={this.state.lunch}
                      onChange={this.changeLunchHandler}
                    />
                  </Form.Group>
                  <Form.Group controlId="formGridZip">
                    <Form.Label> Available in Snack </Form.Label>

                    <Form.Control                
                      className="text"
                      value={this.state.snack}
                      onChange={this.changeSnackHandler}
                    />
                  </Form.Group>
                  <Form.Group controlId="formGridZip">
                    <Form.Label> Available in Dinner </Form.Label>

                    <Form.Control                
                      className="text"
                      value={this.state.dinner}
                      onChange={this.changeDinnerHandler}
                    />
                  </Form.Group>
                </Row>
                <Button
                  className="btn-center me-2"
                  variant="primary"
                  type="submit"
                  onClick={this.saveOrUpdateStudent}
                >
                  Submit
                </Button>
                <Button
                  className="btn-center"
                  variant="primary"
                  type="submit"
                  onClick={this.cancel.bind(this)}
                >
                  
                  Cancel
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
        )
    }
}

export default CreateComponent