import React, { Component } from 'react';
import MessService from '../services/MessService';
import Backi from "../image/back.png";

class ListMessComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
                studentdetails: []
        }
        this.editStudent = this.editStudent.bind(this);
        
    }
    
   
 
    
    editStudent(id){
        this.props.history.push(`/updatemesstable/${id}`);
    }

    componentDidMount(){
        MessService.getStudent().then((res) => {
            this.setState({ studentdetails: res.data});
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
                                <th>Action</th>
                                
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
                                                 <button onClick={ () => this.editStudent(student.id)} className="btn btn-primary">Update </button>
                                                 
                                                 
                                             </td>
                                       

                                    </tr>
                                )
                            }
                        </tbody>

                    </table>
                </div>            


            </div>
            </>
        );
    }
}

export default ListMessComponent;