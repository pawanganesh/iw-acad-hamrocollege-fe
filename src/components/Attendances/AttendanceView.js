import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";

import {getClassrooms} from '../../actions/Classroom'
import { Table, } from "semantic-ui-react";
import { Link } from 'react-router-dom';



class AttendanceView extends Component {
    // state ={
    //     seleted:"",
    // };

    static propTypes ={
        // attendance: PropTypes.array.isRequired,
        classrooms: PropTypes.array.isRequired,
    };
    

    componentDidMount() {
        // this.props.addAttendance();
        this.props.getClassrooms();
    }

    render() {
        return (
            <Fragment>
                <h1>list of classrooms</h1>
                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>ID</Table.HeaderCell>
                            <Table.HeaderCell>Classroom Name</Table.HeaderCell>
                            <Table.HeaderCell>Creator</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        
                        {this.props.classrooms.map((classroom) => (
                        <Table.Row>
                            <Table.Cell>{classroom.id}</Table.Cell>

                            <Table.Cell>
                                <Link to={`/attendance/class/${classroom.id}/members` } >
                                    {classroom.title}
                                </Link>
                            </Table.Cell>
                            
                            <Table.Cell>{classroom.creator}</Table.Cell>
                            
                        </Table.Row>

                        
                        ))}
                    
                    </Table.Body>
                </Table>
            </Fragment>
        );
    }
}


const mapStateToProps = (state) => ({
    // attendance: state.attendance.attendance,
    classrooms: state.classrooms.classrooms
});

export default connect (mapStateToProps, {  getClassrooms }) (AttendanceView)
// addAttendance,
