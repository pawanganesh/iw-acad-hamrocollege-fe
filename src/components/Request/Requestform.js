import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {addRequests} from '../../actions/requests'




 class Requestform extends Component {
     state = {
         User: '',
         Book: '',
         Status: '',
         Requestdate: '',
         
         
         
         
     }

     static propTypes = {
         addRequest: PropTypes.func.isRequired
     }

     onChange=e=> this.setState({ [e.target.name]: e.target.value })
     onSubmit = e => {
         e.preventDefault()
         const{user, book, status, request_date} = this.state
         const requests= {user, book, status, request_date}
         this.props.addRequests(requests)
         
     }


    render() {
        const {user, book, status, request_date} = this.state
        return (
            <div className="card card-body mt-4 mb-4">
                <h2>Requests</h2>
                <form onSubmit={this.onSubmit}>                    
                    <div className='form-group'>
                        <label>User</label>
                        <input 
                        className="form-control"
                        type="text"
                        name="user"
                        onChange={this.onChange}
                        value={user}
                        />    
                    </div>
                    <div className='form-group'>
                        <label>Book </label>
                        <input 
                        className="form-control"
                        type="text"
                        name="book"
                        onChange={this.onChange}
                        value={book}
                        />    
                    </div>  
                    <div className='form-group'>
                        <label>Status</label>
                        <input 
                        className="form-control"
                        type="text"
                        name="status"
                        onChange={this.onChange}
                        value={status}
                        />    
                    </div>
                    <div className='form-group'>
                        <label>Req. Date </label>
                        <input 
                        className="form-control"
                        type="date"
                        name="request_date"
                        onChange={this.onChange}
                        value={request_date}
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

export default connect(null, {addRequests}) (Requestform)