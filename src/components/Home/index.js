import React, { Fragment } from "react";
// import Classroom from "../Classrooms/ClassroomView";
import { Container } from "semantic-ui-react";
// import ClassroomForm from "../Classrooms/ClassroomForm";
import ClassroomDashboard from "../Classrooms/dashboard";

export default function Home(){
    return(
        <Fragment>
            <Container>
                <ClassroomDashboard />
            </Container>
        </Fragment>
    )
}