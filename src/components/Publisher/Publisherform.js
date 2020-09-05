import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {addPublishers} from '../../actions/publishers'




 class Publisherform extends Component {
     state = {         
         name: '',
         country: '', 
         city: ''
     }

     static propTypes = {
         addPublishers: PropTypes.func.isRequired
     }

     onChange=e=> this.setState({ [e.target.name]: e.target.value })
     onSubmit = e => {
         e.preventDefault()
         const{name, country,city} = this.state
         const publishers= {name, country,city}
         this.props.addPublishers(publishers)
         
     }


    render() {
        const { name, country, city} = this.state
        return (
            <div className="card card-body mt-4 mb-4">
                <h2>Add Publisher</h2>
                <form onSubmit={this.onSubmit}>                    
                    <div className='form-group'>
                        <label>Name </label>
                        <input 
                        className="form-control"
                        type="text"
                        name="name"
                        onChange={this.onChange}
                        value={name}
                        />    
                    </div>
                    <div className='form-group'>
                        <label>Country </label>
                        <input 
                        className="form-control"
                        type="text"
                        name="country"
                        onChange={this.onChange}
                        value={country}
                        />    
                    </div> 
                    <div className='form-group'>
                        <label>City </label>
                        <input 
                        className="form-control"
                        type="text"
                        name="city"
                        onChange={this.onChange}
                        value={city}
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

export default connect(null, {addPublishers}) (Publisherform)