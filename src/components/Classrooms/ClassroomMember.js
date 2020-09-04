import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { getClassMembers,} from "../../actions/Classroom";
import { Table, Container, } from "semantic-ui-react";



class ClassroomMember extends Component {
    static propTypes ={
        classrooms: PropTypes.array.isRequired,
    };

    componentDidMount() {
        this.props.getClassMembers();
        
    }

    render() {
        return (
            <Fragment>
                <Container>
                    <h1>List of Members</h1>
                </Container>
                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>ID</Table.HeaderCell>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            {/* <Table.HeaderCell>Is Present</Table.HeaderCell> */}

                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {this.props.classmembers.map((classmember) => (
                        <Table.Row>
                            <Table.Cell>{classmember.id}</Table.Cell> 
                            <Table.Cell>{classmember.user}</Table.Cell>
                            {/* <Table.Cell>
                                <button onClick='/'></button>
                            </Table.Cell> */}
                            
                        </Table.Row>

                        
                        ))}
                    
                    </Table.Body>
                </Table>
            </Fragment>
        );
    }
}


const mapStateToProps = (state) => ({
    classmembers: state.classrooms.classrooms
});

export default connect (mapStateToProps, { getClassMembers, }) (ClassroomMember)
