import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {addSubjects} from '../../actions/subjects'




 class Subjectform extends Component {
     state = {
         Subjectcode: '',
         Name: '',
         Faculty: '',
         Semester: ''
         
         
     }

     static propTypes = {
         addSubject: PropTypes.func.isRequired
     }

     onChange=e=> this.setState({ [e.target.name]: e.target.value })
     onSubmit = e => {
         e.preventDefault()
         const{ subjectcode, name, faculty, semester } = this.state
         const subjects= {subjectcode, name, faculty, semester }
         this.props.addSubjects(subjects)
         
     }


    render() {
        const { subjectcode, name, faculty, semester } = this.state
        return (
            <div className="card card-body mt-4 mb-4">
                <h2>Add Subjects</h2>
                <form onSubmit={this.onSubmit}>                    
                    <div className='form-group'>
                        <label>Subject Code </label>
                        <input 
                        className="form-control"
                        type="text"
                        name="subjectcode"
                        onChange={this.onChange}
                        value={subjectcode}
                        />    
                    </div>
                    <div className='form-group'>
                        <label>Subject Name </label>
                        <input 
                        className="form-control"
                        type="text"
                        name="name"
                        onChange={this.onChange}
                        value={name}
                        />    
                    </div>
                    <div className='form-group'>
                        <label>Faculty </label>
                        <input 
                        className="form-control"
                        type="text"
                        name="faculty"
                        onChange={this.onChange}
                        value={faculty}
                        />    
                    </div>
                    <div className='form-group'>
                        <label>Semester </label>
                        <input 
                        className="form-control"
                        type="text"
                        name="semester"
                        onChange={this.onChange}
                        value={semester}
                        />    
                    </div>                   
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                </form>                                
            </div>
        )
    }
}

export default connect(null, {addSubjects}) (Subjectform)