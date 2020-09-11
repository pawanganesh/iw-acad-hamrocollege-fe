import Axios from 'axios'
// import React, { Component, Fragment } from "react";
// import { connect } from "react-redux";
// import PropTypes from "prop-types";
// // import { getIssues, deleteIssues } from "../../actions/issues";
// // import Issueform from "./Issueform";
// import { getRequests, deleteRequests,editRequests } from "../../actions/requests";
// import Requestform from "../Request/Requestform";
// import { Link } from 'react-router-dom';

// class Request extends Component {
//   static propTypes = {
//     requests: PropTypes.array.isRequired,
//     auth: PropTypes.object.isRequired,
//   };

//   componentDidMount() {
//     this.props.getRequests();
//   }

//   render() {
//     return (
//       <Fragment>
//         {/* {this.props.auth.user.is_student || this.props.auth.user.is_teacher  ? <Requestform /> : ""} */}
//         {/* <Requestform /> */}
//         <h1>Pending List</h1>
//         <table className="table">
//           <thead>
//             <tr>
//               <th>User</th>
//               <th>Book</th>
//               <th>Status</th>
//               <th>Request Date</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {this.props.requests.map((request) => (
//               <tr key={request.id}>
//                 <td>{`${request.user_fn} ${request.user_ln}`}</td>
//                 <td>{request.book_name}</td>
//                 <td>{request.status}</td>
//                 <td>{request.request_date}</td>
//                 <td>
//                   <button
//                     onClick={this.props.deleteRequests.bind(this, request.id)}
//                     className="btn btn-danger btn-sm"
//                   >
//                     Delete
//                   </button>
//                   <Link to={`/edit/${request.id}`} className='header'>
//                     <button
//                       // onClick={this.props.editRequests.bind(this, request.id)}
//                       className="btn btn-success btn-sm"
//                     >
//                       Edit Status
//                     </button>
//                   </Link>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </Fragment>
//     );
//   }
// }

// const mapStateToProps = (state) => ({
//   requests: state.requests.requests,
//   // requests: Object.values(state.requests),
//   auth: state.auth,
// });

// export default connect(mapStateToProps, { getRequests, deleteRequests })(Request)





// // class Issue extends Component {
// //   static propTypes = {
// //     issues: PropTypes.array.isRequired,
// //     auth: PropTypes.object.isRequired,
// //   };

// //   componentDidMount() {
// //     this.props.getIssues();
// //   }

// //   render() {
// //     return (
// //       <Fragment>
// //         {this.props.auth.user.is_librarian ? <Issueform /> : ""}
// //         <h1>Book Issued</h1>
// //         <table className="table">
// //           <thead>
// //             <tr>
// //               <th>User</th>
// //               <th>Book</th>
// //               <th>Issue Date</th>
// //               <th>Return Date</th>
// //               <th>Action</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {this.props.issues.map((issue) => (
// //               <tr key={issue.id}>
// //                 {/* <td>{issue.user_name}</td> */}
// //                 <td>{`${issue.user_fn} ${issue.user_ln}`}</td>

// //                 <td>{issue.book_name}</td>
// //                 <td>{issue.issue_date}</td>
// //                 <td>{issue.return_date}</td>
// //                 <td>
// //                   <button
// //                     onClick={this.props.deleteIssues.bind(this, issue.id)}
// //                     className="btn btn-danger btn-sm"
// //                   >
// //                     Delete
// //                   </button>
// //                 </td>
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //       </Fragment>
// //     );
// //   }
// // }

// // const mapStateToProps = (state) => ({
// //   issues: state.issues.issues,
// //   auth: state.auth,
// // });

// // export default connect(mapStateToProps, { getIssues, deleteIssues })(Issue)


import React, { Component } from 'react'
import axios from "axios";
import {Input, FormGroup, Label, Modal, ModalFooter, ModalHeader, ModalBody, TableProps, Button} from 'reactstrap'
// import { tokenConfig } from "../actions/auth";

export class Issue extends Component {
  state ={
    books: [],
    editBookData: {
      id:'',
      status:'',
      
    },
    editBookModal: false
  }
  componentWillMount(){
    this._refreshBooks()
  }

  toggleEditBookModal(){
    this.setState({
      editBookModal: !this.state.editBookModal
    })
  }
  updateBook(){
    let {status} = this.state.editBookData
    axios.patch('http://127.0.0.1:8000/api/bookrequest/' + this.state.editBookData.id + '/', {
      status
    }). then((response)=>{
      this._refreshBooks()
      console.log(response.data)

      this.setState({
        editBookModal: false,editBookData:{id:"", status:""}
      })
    })

  }

  editBook(id, status){
    this.setState({
      editBookData:{id, status},editBookModal: !this.state.editBookModal
    })
  }
  
  deleteBook(id){
    axios.delete('http://127.0.0.1:8000/api/bookrequest/' + id + '/') .then((response) =>{
      this._refreshBooks()

    })
  }

  _refreshBooks(){
    axios.get('http://127.0.0.1:8000/api/bookrequest/').then((response) =>{
      this.setState({
        books: response.data
      })
    })

  }


  render() {
    let books= this.state.books.map((book)=>{
      return (
        <tr key={book.id}>
              {/* <td>{book.id}</td> */}
              <td>{`${book.user_fn} ${book.user_ln}`}</td>
              <td>{book.book_name}</td>
              <td>{book.status}</td>
              <td>{book.request_date}</td>
              <td>
                <button type="button" className="btn btn-success" onClick={this.editBook.bind(this, book.id, book.status)}>Update</button>
                <button type="button" className="btn btn-danger" onClick={this.deleteBook.bind(this, book.id)}>Delete</button>
              </td>
        </tr>
      )
    })
    return (
      <div className="App container">
        {/* <Button color="danger" onClick={toggle}>{buttonLabel}</Button> */}
          <Modal isOpen={this.state.editBookModal} toggle={this.toggleEditBookModal.bind(this)} >
            <ModalHeader toggle={this.toggleEditBookModal.bind(this)}>Edit Status</ModalHeader>
            <ModalBody>
            <FormGroup>
              <Label for="status">Status</Label>
              <Input id='status' value={this.state.editBookData.status} onChange={(e)=>{
                let { editBookData} = this.state

                editBookData.status= e.target.value

                this.setState({ editBookData})
              }}
              
              />
            </FormGroup>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.updateBook.bind(this)}>Update Book</Button>{' '}
              <Button color="secondary" onClick={this.toggleEditBookModal.bind(this)}>Cancel</Button>
            </ModalFooter>
          </Modal>
        <table>
          <thead>
            <tr>
              {/* <th>#</th> */}
              <th>User</th>
              <th>Book</th>
              <th>Status</th>
              <th>Request Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          
          <tbody>
            {books}
          </tbody>
        </table>
        
      </div>
    )
  }
}

export default Issue
