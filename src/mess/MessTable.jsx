import React, { Component } from 'react'
import MessService from '../services/MessService';
import Backi from "../image/back.png";

export class MessTable extends Component {


     constructor(props){
        super(props)

        this.state = {
                studentdetails: []
        }


    }

    componentDidMount(){
        MessService.getStudent().then((res) => {
            this.setState({ studentdetails: res.data});
        });
    }


     cancel() {
    this.props.history.push("/studentpage");
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
                <h2 className="text-center">Canteen Details</h2>
                

                <div className = "row">
                    <table className = "table table-striped  table-bordered">

                        <thead>
                            <tr>                               
                                <th>Day</th>
                                <th>Breakfast</th>
                                <th>Lunch</th>
                                <th>Snack</th>
                                <th>Dinner</th>
                                
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.studentdetails.map(
                                    student =>
                                    <tr key =  {student.id}>                                        
                                        <td> {student.day} </td>
                                        <td> {student.breakfast} </td>
                                        <td> {student.lunch} </td>
                                        <td> {student.snack} </td>
                                        <td> {student.dinner} </td>
                                        <td>
                                                 
                                                 
                                                 
                                             </td>
                                       

                                    </tr>
                                )
                            }
                        </tbody>

                    </table>
                </div>            


            </div>
            </>
        )
    }
}

export default MessTable;
