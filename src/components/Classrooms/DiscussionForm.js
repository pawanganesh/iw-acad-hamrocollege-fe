import React, { Fragment } from "react";
import { Button, Form, Dropdown } from "semantic-ui-react";

const DiscussionForm = () => (
    <Fragment>
    <Form>
        <Form.Field>
            <label>Classroom</label>
            <Dropdown placeholder="Choose Classroom" />
        </Form.Field>
        <Form.Field>
            <label>User</label>
            <Dropdown placeholder="Choose User" />
        </Form.Field>
        <Form.Field>
            <textarea label= 'I am a creator' />
        </Form.Field>
        <Form.Field>
            <input type='file' />
        </Form.Field>
        <hr />
        <Button type="submit">Comment</Button>
    </Form>
    </Fragment>
);

export default DiscussionForm;
