import React, {  } from "react";
// import Classroom from "./ClassroomView";
import { Container } from "semantic-ui-react";
// import ClassroomForm from "../Classrooms/ClassroomForm";
import AttendanceMenu from "./AttendanceMenu";
import AttendanceRoutes from "./attendanceroute";
// import AttendanceView from "./AttendanceView";

export default function AttendanceDashboard (){
    return(
        <>
        <h1>Attendance History</h1>
        <AttendanceMenu />
        <Container>
            <AttendanceRoutes/>
        </Container>
        </>
        
    )
}