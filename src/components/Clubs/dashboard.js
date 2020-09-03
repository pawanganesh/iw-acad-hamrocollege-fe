import React, { } from "react";
// import Classroom from "./ClassroomView";
import { Container } from "semantic-ui-react";
// import ClassroomForm from "../Classrooms/ClassroomForm";
import ClubMenu from "./ClubMenu"
import ClubRoutes from './clubroute'

export default function ClubDashboard (){
    return(
        <>
        <h1>Club Panel</h1>
        <ClubMenu />
        <Container>
            <ClubRoutes/>
        </Container>
        </>
    )
}