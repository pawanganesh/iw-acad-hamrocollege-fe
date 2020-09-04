import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { getClassMembers,} from "../../actions/Classroom";
import { addAttendance} from "../../actions/Attendance";
import { Table, Container, Form, Checkbox } from "semantic-ui-react";
// import { useParams } from 'react-router-dom';



class AttendanceSheet extends Component {

    state= {
        ispresent: ''
    }


    static propTypes ={
        classroom: PropTypes.array.isRequired,
        subject: PropTypes.array.isRequired,
        addAttendance: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props.getClassMembers();
        
    }
    onFormSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)

        const { classroom, subject,user, ispresent } = this.state;

        var form_data = new FormData();
        form_data.append("classroom", classroom);
        form_data.append("subject", subject);
        form_data.append("user", user);
        form_data.append("ispresent", ispresent);

        this.props.addAttendance(form_data);

    }

    render() {

        const { ispresent } = this.state;
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
                            <Table.HeaderCell>Is Present</Table.HeaderCell>

                        </Table.Row>
                    </Table.Header>
                    

                    <Table.Body>
                        {this.props.classmembers.map((classmember) => (
                        <Table.Row>
                            
                            <Form onSubmit={this.onSubmit}>
                            <Table.Cell>
                                <Form.Input label="name" value={classmember.id} />
                            </Table.Cell> 
                            
                            <Table.Cell>
                                <Form.Input value={classmember.user} />
                            </Table.Cell>
                            
                            <Checkbox
                                label='Present'
                                name='ispresent'
                                value={ispresent}
                            />
                            </Form>
        
                            
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




export default connect (mapStateToProps, { getClassMembers, addAttendance }) (AttendanceSheet)
