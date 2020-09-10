import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
// import { getIssues, deleteIssues } from "../../actions/issues";
// import Issueform from "./Issueform";
import { getRequests, deleteRequests,editRequests } from "../../actions/requests";
import Requestform from "../Request/Requestform";
import { Link } from 'react-router-dom';

class Request extends Component {
  static propTypes = {
    requests: PropTypes.array.isRequired,
    auth: PropTypes.object.isRequired,
  };

  componentDidMount() {
    this.props.getRequests();
  }

  render() {
    return (
      <Fragment>
        {/* {this.props.auth.user.is_student || this.props.auth.user.is_teacher  ? <Requestform /> : ""} */}
        {/* <Requestform /> */}
        <h1>Pending List</h1>
        <table className="table">
          <thead>
            <tr>
              <th>User</th>
              <th>Book</th>
              <th>Status</th>
              <th>Request Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.props.requests.map((request) => (
              <tr key={request.id}>
                <td>{`${request.user_fn} ${request.user_ln}`}</td>
                <td>{request.book_name}</td>
                <td>{request.status}</td>
                <td>{request.request_date}</td>
                <td>
                  <button
                    onClick={this.props.deleteRequests.bind(this, request.id)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                  <Link to={`/edit/${request.id}`} className='header'>
                    <button
                      // onClick={this.props.editRequests.bind(this, request.id)}
                      className="btn btn-success btn-sm"
                    >
                      Edit Status
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  requests: state.requests.requests,
  // requests: Object.values(state.requests),
  auth: state.auth,
});

export default connect(mapStateToProps, { getRequests, deleteRequests })(Request)





// class Issue extends Component {
//   static propTypes = {
//     issues: PropTypes.array.isRequired,
//     auth: PropTypes.object.isRequired,
//   };

//   componentDidMount() {
//     this.props.getIssues();
//   }

//   render() {
//     return (
//       <Fragment>
//         {this.props.auth.user.is_librarian ? <Issueform /> : ""}
//         <h1>Book Issued</h1>
//         <table className="table">
//           <thead>
//             <tr>
//               <th>User</th>
//               <th>Book</th>
//               <th>Issue Date</th>
//               <th>Return Date</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {this.props.issues.map((issue) => (
//               <tr key={issue.id}>
//                 {/* <td>{issue.user_name}</td> */}
//                 <td>{`${issue.user_fn} ${issue.user_ln}`}</td>

//                 <td>{issue.book_name}</td>
//                 <td>{issue.issue_date}</td>
//                 <td>{issue.return_date}</td>
//                 <td>
//                   <button
//                     onClick={this.props.deleteIssues.bind(this, issue.id)}
//                     className="btn btn-danger btn-sm"
//                   >
//                     Delete
//                   </button>
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
//   issues: state.issues.issues,
//   auth: state.auth,
// });

// export default connect(mapStateToProps, { getIssues, deleteIssues })(Issue)
