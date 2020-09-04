import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {addFacultys} from '../../actions/facultys'


 class Facultyform extends Component {
     state = {
         Name: '',
         
         
     }

     static propTypes = {
         addFaculty: PropTypes.func.isRequired
     }

     onChange=e=> this.setState({ [e.target.name]: e.target.value })
     onSubmit = e => {
         e.preventDefault()
         const{ name } = this.state
         const faculty= {name}
         this.props.addFacultys(faculty)
         
     }


    render() {
        const {name } = this.state
        return (
            <div className="card card-body mt-4 mb-4">
                <h2>Add Faculty</h2>
                <form onSubmit={this.onSubmit}>
                    
                    <div className='form-group'>
                        <label>Faculty </label>
                        <input 
                        className="form-control"
                        type="text"
                        name="name"
                        onChange={this.onChange}
                        value={name}
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

export default connect(null, {addFacultys}) (Facultyform)