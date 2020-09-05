import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {addRequests} from '../../actions/requests'
import {addBooks, getBooks} from '../../actions/books'

 class Requestform extends Component {
     state = {
         user: this.props.auth.user.id, 
         book: '', 
         status: '', 
         request_date: ''     
     }
     componentDidMount() {
        this.props.getBooks();             
      }

     static propTypes = {
         addRequests: PropTypes.func.isRequired,
         books: PropTypes.array.isRequired,
         auth: PropTypes.object.isRequired,
     }

     onChange=e=> this.setState({ [e.target.name]: e.target.value })
     onSubmit = e => {
         e.preventDefault()
         const{user, book, status, request_date} = this.state
         const requests= {user, book, status, request_date}
         this.props.addRequests(requests)

        //  var form_data = new FormData();
        //  form_data.append("user", user);
        //  form_data.append("book", book);
        //  form_data.append("status", status);
        //  form_data.append("request_date", request_date);        

        //  this.props.addRequests(form_data);
         
     }


    render() {
        const {book, status, request_date} = this.state
        return (
            <div className="card card-body mt-4 mb-4">
                <h2>Requests</h2>
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
                    {/* <div className='form-group'>
                        <label>Book </label>
                        <input 
                        className="form-control"
                        type="text"
                        name="book"
                        onChange={this.onChange}
                        value={book}
                        />    
                    </div>   */}
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

const mapStateToProps = (state) => ({
    books: state.books.books,
    auth: state.auth,
  });

export default connect(mapStateToProps, {addRequests,getBooks, addBooks}) (Requestform)