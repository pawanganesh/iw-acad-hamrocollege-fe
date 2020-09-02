import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {addBooks} from '../../actions/books'




 class Bookform extends Component {
     state = {
         Bookid: '',
         Title: '',
         Author: '',
         ISBN: '',
         Publisher: '',
         Edition: '',
         
         
         
     }

     static propTypes = {
         addAuthor: PropTypes.func.isRequired
     }

     onChange=e=> this.setState({ [e.target.name]: e.target.value })
     onSubmit = e => {
         e.preventDefault()
         const{bookid, title, author, isbn, publisher, edition } = this.state
         const books= {bookid, title, author, isbn, publisher, edition}
         this.props.addAuthors(books)
         
     }


    render() {
        const { bookid, title, author, isbn, publisher, edition} = this.state
        return (
            <div className="card card-body mt-4 mb-4">
                <h2>Add Author</h2>
                <form onSubmit={this.onSubmit}>                    
                    <div className='form-group'>
                        <label>Book ID </label>
                        <input 
                        className="form-control"
                        type="text"
                        name="bookid"
                        onChange={this.onChange}
                        value={bookid}
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
                        <label>Author </label>
                        <input 
                        className="form-control"
                        type="text"
                        name="author"
                        onChange={this.onChange}
                        value={author}
                        />    
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
                        <label>Publisher </label>
                        <input 
                        className="form-control"
                        type="text"
                        name="publisher"
                        onChange={this.onChange}
                        value={publisher}
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

export default connect(null, {addBooks}) (Bookform)