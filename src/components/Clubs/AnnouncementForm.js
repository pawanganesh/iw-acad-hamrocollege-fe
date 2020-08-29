import React, { Fragment } from "react";
import { Button, Form, Dropdown } from "semantic-ui-react";

const AnnouncementForm = () => (
    <Fragment>
    <Form>
        <Form.Field>
            <label>Club</label>
            <Dropdown placeholder="Choose Classroom" />
        </Form.Field>
        <Form.Field>
            <label>Announce By</label>
            <Dropdown placeholder="Choose User" />
        </Form.Field>
        <Form.Field>
            <label>Message</label>
            <input placeholder="Your Message" />
        </Form.Field>
        {/* <Form.Field>
            <input  type= "file" />
        </Form.Field> */}
        <hr />
        <Button type="submit">Add Announcement</Button>
    </Form>
    </Fragment>
);

export default AnnouncementForm;
