import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { getClassrooms, deleteClassroom } from "../../actions/Classroom";
import { Table, Container, } from "semantic-ui-react";



class ClassroomView extends Component {
    static propTypes ={
        classrooms: PropTypes.array.isRequired,
    };

    componentDidMount() {
        this.props.getClassrooms();
        
    }

    render() {
        return (
            <Fragment>
                <Container>
                    <h1>List of Classrooms</h1>
                </Container>
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
                        {this.props.classrooms.map((classrooms) => (
                        <Table.Row>
                            <Table.Cell>{classrooms.id}</Table.Cell> 
                            <Table.Cell>{classrooms.title}</Table.Cell>
                            <Table.Cell>{classrooms.subject}</Table.Cell>
                            <Table.Cell>{classrooms.faculty}</Table.Cell>
                            <Table.Cell>{classrooms.section}</Table.Cell>
                            <Table.Cell>{classrooms.creator}</Table.Cell>
                            <Table.Cell>{classrooms.created_at}</Table.Cell>
                            <Table.Cell>
                                {/* <Icon name='add circle'>
                                <button onClick={this.props.deleteClassroom.bind(this,classroom.id) }></button>
                                </Icon> */}
                                <button onClick={this.props.deleteClassroom.bind(this,classrooms.id)}>Delete</button>
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

export default connect (mapStateToProps, { getClassrooms, deleteClassroom }) (ClassroomView)
