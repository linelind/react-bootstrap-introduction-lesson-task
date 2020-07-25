import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function CommentForm() {
    return (
        <>
            <h2 className="form">Submit a comment</h2>
            <Form>
                <Form.Group>
                    <Form.Control type="text" placeholder="Name" />
                </Form.Group>

                <Form.Group>
                    <Form.Control type="email" placeholder="Email" />
                </Form.Group>

                <Button variant="admin" type="submit">
                    Send
                </Button>
            </Form>
        </>
    );
}

export default CommentForm;
