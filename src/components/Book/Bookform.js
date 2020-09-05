import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {addBooks} from '../../actions/books'
import { getAuthors, addAuthors} from '../../actions/authors'
import { getPublishers, addPublishers} from '../../actions/publishers'




 class Bookform extends Component {
     state = {         
         book_id: '', 
         title: '', 
         isbn: '', 
         edition: '', 
         author: '', 
         publisher: ''     
 
     }

     static propTypes = {
         addBooks: PropTypes.func.isRequired,
         authors: PropTypes.array.isRequired,
         publishers: PropTypes.array.isRequired,         
     }

     componentDidMount() {
        this.props.getPublishers();
        this.props.getAuthors();     
      }
      

     onChange=e=> this.setState({ [e.target.name]: e.target.value })
     onSubmit = e => {
         e.preventDefault()
         const{book_id, title, isbn, edition, author, publisher } = this.state
         const books= {book_id, title, isbn, edition, author, publisher }
         this.props.addBooks(books)
         
         
     }
    render() {
        const { book_id, title, isbn, edition, author, publisher} = this.state
        return (
            <div className="card card-body mt-4 mb-4">
                <h2>Add Book</h2>
                <form onSubmit={this.onSubmit}>                    
                    <div className='form-group'>
                        <label>Book ID </label>
                        <input 
                        className="form-control"
                        type="number"
                        name="book_id"
                        onChange={this.onChange}
                        value={book_id}
                        />    
                    </div>
                    <div className='form-group'>
                        <label>title </label>
                        <input 
                        className="form-control"
                        type="text"
                        name="title"
                        onChange={this.onChange}
                        value={title}
                        />    
                    </div>                     
                    <div className='form-group'>
                    <label >Author:</label>     
                        <select  name="author" value={author} onChange={this.onChange} >
                                {this.props.authors.map((author) =>(
                                    <option key={author.id} value={author.id} >{author.firstname}</option> 
                                ))}                               
                        </select>    
                    </div>
                    <div className='form-group'>
                        <label>ISBN </label>
                        <input 
                        className="form-control"
                        type="number"
                        name="isbn"
                        onChange={this.onChange}
                        value={isbn}
                        />    
                    </div>
                    <div className='form-group'>
                        <label>Edition </label>
                        <input 
                        className="form-control"
                        type="number"
                        name="edition"
                        onChange={this.onChange}
                        value={edition}
                        />    
                    </div>                    
                    <div>
                        <label >Publisher:</label>                           
                        {/* <input type= 'select' name="publisher" value={publisher}>
                            {this.props.publishers.map((publisher) =>(
                                        <option onChange={this.onChange} >{publisher.id}</option> 
                                    ))}
                        </input> */}
                        <select  name="publisher" value= {publisher} onChange={this.onChange} >
                                {this.props.publishers.map((publisher) =>(
                                    <option key={publisher.id} value={publisher.id} >{publisher.name}</option> 
                                ))}                               
                        </select>                        
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
    authors: state.authors.authors,
    publishers: state.publishers.publishers,    
  });

export default connect(mapStateToProps, {addBooks, getAuthors, addAuthors, getPublishers, addPublishers}) (Bookform)