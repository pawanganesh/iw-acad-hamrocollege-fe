import React, { Fragment } from "react";
import { Button, Form, Dropdown } from "semantic-ui-react";

const ClassroomForm = () => (
    <Fragment>
    <Form>
        <Form.Field>
            <label>Title</label>
            <input placeholder="Classroom Title" />
        </Form.Field>
        <Form.Field>
            <label>Creator</label>
            <Dropdown placeholder="Choose the User" />
        </Form.Field>
        <Form.Field>
            <label>Faculty</label>
            <Dropdown placeholder="Choose Faculty" />
        </Form.Field>
        <Form.Field>
            <label>Section</label>
            <Dropdown placeholder="Choose Faculty" />
        </Form.Field>
        <Form.Field>
            <label>Subject</label>
            <Dropdown placeholder="Choose Subject" />
        </Form.Field>
        <Form.Field>
            <label>Passcode</label>
            <input placeholder="Enter Passcode" />
        </Form.Field>
        <hr/>
        <Button type="submit">Submit</Button>
    </Form>
    </Fragment>
);

export default ClassroomForm;
