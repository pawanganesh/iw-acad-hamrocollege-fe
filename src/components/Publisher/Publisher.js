import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getPublishers, deletePublishers } from '../../actions/publishers'
import Publisherform from './Publisherform'


class Publisher extends Component {   
        
    static propTypes={
        publishers: PropTypes.array.isRequired
    }

    componentDidMount() {
        this.props.getPublishers()
    } 

    render() {
        return (
            <Fragment>
                <Publisherform/>
                <h1>Publisher List</h1>    
                <table className='table'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th> 
                            <th>Country</th>  
                            <th>City</th>  
                        </tr>                                                        
                    </thead>
                    <tbody>
                        {this.props.publishers.map((publisher) => (
                            <tr key={publisher.id}>
                                <td>{publisher.id}</td>
                                <td>{publisher.name}</td> 
                                <td>{publisher.country}</td> 
                                <td>{publisher.city}</td>                                                            
                                                                 
                                <td>
                                    <button onClick={this.props.deletePublishers.bind(this, publisher.id )} className='btn btn-danger btn-sm'>Delete</button>
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
    
    publishers: state.publishers.publishers,
  });
  
  
export default connect(mapStateToProps, { getPublishers, deletePublishers})(Publisher)


