import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getPublishers, deletePublishers } from "../../actions/publishers";
import Publisherform from "./Publisherform";

class Publisher extends Component {
  static propTypes = {
    publishers: PropTypes.array.isRequired,
    auth: PropTypes.object.isRequired,
  };

  componentDidMount() {
    this.props.getPublishers();
  }

  render() {
    return (
      <Fragment>
        {this.props.auth.user.is_librarian ? <Publisherform /> : ""}
        <h1>Publisher List</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Country</th>
              <th>City</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.props.publishers.map((publisher) => (
              <tr key={publisher.id}>
                <td>{publisher.name}</td>
                <td>{publisher.country}</td>
                <td>{publisher.city}</td>

                <td>
                  <button
                    onClick={this.props.deletePublishers.bind(
                      this,
                      publisher.id
                    )}
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
  publishers: state.publishers.publishers,
  auth: state.auth,
});

export default connect(mapStateToProps, { getPublishers, deletePublishers })(
  Publisher
);
