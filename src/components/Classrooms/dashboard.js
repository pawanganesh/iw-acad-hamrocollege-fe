import React, { Fragment } from "react";
// import Classroom from "./ClassroomView";
import { Container } from "semantic-ui-react";
// import ClassroomForm from "../Classrooms/ClassroomForm";
import ClassroomMenu from "./ClassroomMenu"
import ClassroomView from "./ClassroomView"

export default function ClassroomDashboard (){
    return(
        <Fragment>
            
                <Container>
                    <h1>Classroom Panel</h1>
                    <ClassroomMenu />
                    {/* <ClassroomForm /> */}
                </Container>
            
            <Fragment>
                <Container>
                    <ClassroomView />
                </Container>
            </Fragment>
        </Fragment>
    )
}