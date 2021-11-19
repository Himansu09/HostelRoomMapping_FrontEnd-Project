import React, { Component } from 'react';
import MessService from '../services/MessService';

class ListMessComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
                studentdetails: []
        }
        this.editStudent = this.editStudent.bind(this);
        
    }
    
   
 
    
    editStudent(id){
        this.props.history.push(`/add-Student/${id}`);
    }

    componentDidMount(){
        MessService.getStudent().then((res) => {
            this.setState({ studentdetails: res.data});
        });
    }

   

    

    render() {
        return (
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
                                                 <button onClick={ () => this.editStudent(student.id)} className="btn btn-primary">Update </button>
                                                 
                                                 
                                             </td>
                                       

                                    </tr>
                                )
                            }
                        </tbody>

                    </table>
                </div>            


            </div>
        );
    }
}

export default ListMessComponent;