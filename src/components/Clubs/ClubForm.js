import React, { Fragment } from "react";
import { Button, Form, Dropdown } from "semantic-ui-react";

const ClubForm = () => (
    <Fragment>
    <Form>
        <Form.Field>
            <label>Name</label>
            <input placeholder="Club Name" />
        </Form.Field>
        <Form.Field>
            <label>Creator</label>
            <Dropdown placeholder="Choose the User" />
        </Form.Field>
        <hr/>
        <Button type="submit">Submit</Button>
    </Form>
    </Fragment>
);

export default ClubForm;
