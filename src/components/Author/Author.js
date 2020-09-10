import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getAuthors, deleteAuthors } from "../../actions/authors";
import Authorform from "./Authorform";

class Author extends Component {
  static propTypes = {
    authors: PropTypes.array.isRequired,
    auth: PropTypes.object.isRequired,
  };

  componentDidMount() {
    this.props.getAuthors();
  }

  render() {
    return (
      <Fragment>
        {this.props.auth.user.is_librarian ? <Authorform /> : ""}
        <table className="table">
          <thead>
            <tr>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.props.authors.map((author) => (
              <tr key={author.id}>
                <td>{author.firstname}</td>
                <td>{author.lastname}</td>
                <td>
                  <button
                    onClick={this.props.deleteAuthors.bind(this, author.id)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
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
  authors: state.authors.authors,
  auth: state.auth,
});

export default connect(mapStateToProps, { getAuthors, deleteAuthors })(Author);
