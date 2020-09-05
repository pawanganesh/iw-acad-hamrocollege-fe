import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {addAuthors} from '../../actions/authors'




 class Authorform extends Component {
     state = {
         firstname: '',
         lastname: '',
         
         
         
     }

     static propTypes = {
         addAuthors: PropTypes.func.isRequired
     }

     onChange=e=> this.setState({ [e.target.name]: e.target.value })
     onSubmit = e => {
         e.preventDefault()
         const{firstname, lastname} = this.state
         const authors= {firstname, lastname}
         this.props.addAuthors(authors)         
     }


    render() {
        const { firstname, lastname } = this.state
        return (
            <div className="card card-body mt-4 mb-4">
                <h2>Add Author</h2>
                <form onSubmit={this.onSubmit}>                    
                    <div className='form-group'>
                        <label>Firstname </label>
                        <input 
                        className="form-control"
                        type="text"
                        name="firstname"
                        onChange={this.onChange}
                        value={firstname}
                        />    
                    </div>
                    <div className='form-group'>
                        <label>Lastname </label>
                        <input 
                        className="form-control"
                        type="text"
                        name="lastname"
                        onChange={this.onChange}
                        value={lastname}
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

export default connect(null, {addAuthors}) (Authorform)