import React, { useRef, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Row, Col, Container, Card, Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";



const ComposeMail = () => {
  const Disptach = useDispatch();
  const Enteredemail =   useRef(null);
  const Enteredsubject =   useRef(null);
  const Enteredtext =   useRef(null);


  const FormsubmitHandler = (event) => {
    event.preventDefault();
    const mailData = {
      email: Enteredemail.current.value,
      subject: Enteredsubject.current.value,
      text: Enteredsubject.current.value,
    };
 
  };
  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col>
            <Form className="pt-4" onSubmit={FormsubmitHandler}>
              <Card style={{ width: "50rem" }} border="success">
                <Card.Header>
                  <h3>welcome </h3>
                </Card.Header>
                <Card.Body className="colours">
                  <Form.Group controlId="email">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      size="sm"
                      type="email"
                      placeholder="Enter email"
                      ref={Enteredemail}
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group controlId="subject">
                    <Form.Label>subject</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter subject"
                      ref={Enteredsubject}
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group controlId="message">
                    <Form.Label>message</Form.Label>
                    <Form.Control as="textarea" rows={5} ref={Enteredtext} />
                  </Form.Group>
                </Card.Body>

                <Card.Footer>
                  <Editor
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName"
                  />
                  <Button variant="primary" type="submit">
                    Send
                  </Button>
                </Card.Footer>
              </Card>
            </Form>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};
export default ComposeMail;