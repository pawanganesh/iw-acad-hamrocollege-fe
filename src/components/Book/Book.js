import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getBooks, deleteBooks } from '../../actions/books'
import Bookform from './Bookform'


class Book extends Component {   
        
    static propTypes={
        books: PropTypes.array.isRequired
    }

    componentDidMount() {
        this.props.getBooks()
    } 

    render() {
        return (
            <Fragment>
                <Bookform/>
                <h1>Book List</h1>    
                <table className='table'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Book ID</th> 
                            <th>Title</th>    
                            <th>Author</th> 
                            <th>ISBN</th>  
                            <th>Publisher</th>  
                            <th>Edition</th> 
                        </tr>                                                          
                    </thead>
                    <tbody>
                        {this.props.books.map((book) => (
                            <tr key={book.id}>
                                <td>{book.id}</td>
                                <td>{book.book_id}</td> 
                                <td>{book.title}</td>
                                <td>{book.author}</td>
                                <td>{book.isbn}</td>
                                <td>{book.publisher}</td>
                                <td>{book.edition}</td> 
                                <td>
                                    <button onClick={this.props.deleteBooks.bind(this, book.id )} className='btn btn-danger btn-sm'>Delete</button>
                                </td>
                            </tr>                            
                        ))}
                    </tbody>
                </table>               
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    
    books: state.books.books,
  });
  
  
export default connect(mapStateToProps, { getBooks, deleteBooks})(Book)


