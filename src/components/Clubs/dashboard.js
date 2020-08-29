import React, { Fragment } from "react";
// import Classroom from "./ClassroomView";
import { Container } from "semantic-ui-react";
// import ClassroomForm from "../Classrooms/ClassroomForm";
import ClubMenu from "./ClubMenu"
import ClubView from "./ClubView"

export default function ClubDashboard (){
    return(
        <Fragment>
            
                <Container>
                    <h1>Club Panel</h1>
                    <ClubMenu />
                    {/* <ClubForm /> */}
                </Container>
            
            <Fragment>
                <Container>
                    <ClubView />
                </Container>
            </Fragment>
        </Fragment>
    )
}