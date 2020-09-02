import React, { Fragment } from "react";
// import Classroom from "./ClassroomView";
import { Container } from "semantic-ui-react";
// import ClassroomForm from "../Classrooms/ClassroomForm";
import AttendanceMenu from "./AttendanceMenu";
import AttendanceView from "./AttendanceView";

export default function AttendanceDashboard (){
    return(
        <Fragment>
            
                <Container>
                    <h1>Attendance History</h1>
                    <AttendanceMenu />
                    {/* <ClubForm /> */}
                </Container>
            
            <Fragment>
                <Container>
                    <AttendanceView />
                </Container>
            </Fragment>
        </Fragment>
    )
}