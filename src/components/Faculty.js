import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getFacultys, deleteFacultys } from '../actions/facultys'
import Facultyform from './Facultyform'
// import Semester from './Semester/Semester'



class Faculty extends Component {   
        
    static propTypes={
        facultys: PropTypes.array.isRequired
    }

    componentDidMount() {
        this.props.getFacultys()
    } 

    render() {
        return (
            <Fragment>
                <Facultyform/>
                {/* <Semester/> */}
                <h1>Faculty List</h1>    
                <table className='table'>
                    <thead>
                        <th>ID</th>
                        <th>Name</th> 
                                                            
                    </thead>
                    <tbody>
                        {this.props.facultys.map((faculty) => (
                            <tr key={faculty.id}>
                                <td>{faculty.id}</td>                                 
                                <td >{faculty.name}</td>                                 
                                <td>
                                    <button onClick={this.props.deleteFacultys.bind(this, faculty.id )} className='btn btn-danger btn-sm'>Delete</button>
                                </td>
                            </tr>                            
                        ))}
                    </tbody>
                </table> 
                
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    
    facultys: state.facultys.facultys,
  });
  
  
export default connect(mapStateToProps, { getFacultys, deleteFacultys})(Faculty)


