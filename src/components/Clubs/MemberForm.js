import React, { Fragment } from "react";
import { Button, Form, Dropdown, Checkbox } from "semantic-ui-react";

const ClubMemberForm = () => (
    <Fragment>
    <Form>
        <Form.Field>
            <label>Club</label>
            <Dropdown placeholder="Choose Classroom" />
        </Form.Field>
        <Form.Field>
            <label>User</label>
            <Dropdown placeholder="Choose User" />
        </Form.Field>
        <Form.Field>
            <Checkbox label= 'I am a creator' />
        </Form.Field>
        <hr />
        <Button type="submit">Add Member</Button>
    </Form>
    </Fragment>
);

export default ClubMemberForm;
