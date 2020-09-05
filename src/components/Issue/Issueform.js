import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {addIssues} from '../../actions/issues'
import {addBooks, getBooks} from '../../actions/books'



 class Issueform extends Component {
     state = {         
         user: this.props.auth.user.id, 
         book: '', 
         issue_date: '', 
         return_date: ''
     }

     static propTypes = {
         addIssues: PropTypes.func.isRequired,
         books: PropTypes.array.isRequired,
         auth: PropTypes.object.isRequired,
     }

     onChange=e=> this.setState({ [e.target.name]: e.target.value })
     onSubmit = e => {
         e.preventDefault()
         const{user, book, issue_date, return_date} = this.state
         const issues= {user, book, issue_date, return_date}
         this.props.addRequests(issues)

         //  var form_data = new FormData();
        //  form_data.append("user", user);
        //  form_data.append("book", book);
        //  form_data.append("issue_date", issue_date);
        //  form_data.append("return_date", return_date);        

        //  this.props.addRequests(form_data);
         
     }


    render() {
        const {book, issue_date, return_date} = this.state
        return (
            <div className="card card-body mt-4 mb-4">
                <h2>Issued Books</h2>
                <form onSubmit={this.onSubmit}>                    
                    {/* <div className='form-group'>
                        <label>User</label>
                        <input 
                        className="form-control"
                        type="text"
                        name="user"
                        onChange={this.onChange}
                        value={user}
                        />    
                    </div> */}
                    <div className='form-group'>
                        <label >Book:</label>     
                        <select  name="book" value={book} onChange={this.onChange} >
                                {this.props.books.map((book) =>(
                                    <option key={book.id} value={book.id} >{book.title}</option> 
                                ))}                               
                        </select>    
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

const mapStateToProps = (state) => ({
    books: state.books.books,
    auth: state.auth,
  });

export default connect(mapStateToProps, {addIssues,addBooks, getBooks}) (Issueform)