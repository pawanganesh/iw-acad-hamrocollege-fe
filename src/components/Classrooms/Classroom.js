import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { getClassrooms, deleteClassroom } from "../../actions/Classroom";
import { Table } from "semantic-ui-react";


class Classroom extends Component {
    static propTypes = {
        classrooms: PropTypes.array.isRequired,
    };

    componentDidMount() {
        this.props.getClassrooms();
    }

    render() {
        return (
            <Fragment>
                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>ID</Table.HeaderCell>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>Subject</Table.HeaderCell>
                            <Table.HeaderCell>Faculty</Table.HeaderCell>
                            <Table.HeaderCell>Section</Table.HeaderCell>
                            <Table.HeaderCell>Creator</Table.HeaderCell>
                            <Table.HeaderCell>Created_at</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {this.props.classrooms.map((classroom) => (
                        <Table.Row>
                            <Table.Cell>classroom.id</Table.Cell>
                            <Table.Cell>classroom.title</Table.Cell>
                            <Table.Cell>classroom.subject</Table.Cell>
                            <Table.Cell>classroom.faculty</Table.Cell>
                            <Table.Cell>classroom.section</Table.Cell>
                            <Table.Cell>classroom.creator</Table.Cell>
                            <Table.Cell>classroom.created_at</Table.Cell>
                            <Table.Cell>
                                <button onClick={this.props.deleteClassroom.bind(this,classroom.id)}>Delete</button>
                            </Table.Cell>
                            
                        </Table.Row>

                        
                        ))}
                    
                    </Table.Body>
                </Table>
            </Fragment>
        );
    }
}


const mapStateToProps = (state) => ({
    classrooms: state.classrooms.classrooms
});

export default connect (mapStateToProps, { getClassrooms, deleteClassroom }) (Classroom)
