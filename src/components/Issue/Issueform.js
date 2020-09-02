import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {addIssues} from '../../actions/issues'




 class Issueform extends Component {
     state = {
         User: '',
         Book: '',
         Issuedate: '',
         Returndate: '',
         
         
         
         
     }

     static propTypes = {
         addIssue: PropTypes.func.isRequired
     }

     onChange=e=> this.setState({ [e.target.name]: e.target.value })
     onSubmit = e => {
         e.preventDefault()
         const{user, book, issue_date, return_date} = this.state
         const issues= {user, book, issue_date, return_date}
         this.props.addRequests(issues)
         
     }


    render() {
        const {user, book, issue_date, return_date} = this.state
        return (
            <div className="card card-body mt-4 mb-4">
                <h2>Issued Books</h2>
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
                        <label>Issued Date</label>
                        <input 
                        className="form-control"
                        type="date"
                        name="issue_date"
                        onChange={this.onChange}
                        value={issue_date}
                        />    
                    </div>
                    <div className='form-group'>
                        <label>Return Date </label>
                        <input 
                        className="form-control"
                        type="date"
                        name="return_date"
                        onChange={this.onChange}
                        value={return_date}
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

export default connect(null, {addIssues}) (Issueform)