import React from "react";
// import Classroom from "./ClassroomView";
import { Container } from "semantic-ui-react";
// import ClassroomForm from "../Classrooms/ClassroomForm";
import ClassroomMenu from "./ClassroomMenu"
import ClassroomRoutes from "./classroomroute";

// import ClassroomView from "./ClassroomView"

export default function ClassroomDashboard (){
    return(
        <>
        <h1>Classroom Panel</h1>
        <ClassroomMenu />
        <Container>
            <ClassroomRoutes/>
        </Container>
        </>
    )
}