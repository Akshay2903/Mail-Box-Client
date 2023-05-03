import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";

export default function SignUp() {
  const emailref = useRef();
  const passwordref = useRef();
  const confirmpasswordref = useRef();
  const submithandler = (e) => {
    e.preventDefault();
    const enteredemail = emailref.current.value;
    const enteredpassword = passwordref.current.value;
    const enteredconfirmpassword = confirmpasswordref.current.value;

    if (enteredpassword !== enteredconfirmpassword) {
      alert("both passward are not matched");
      return;
    }

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC8nuvzvUfFVBvK7gZvgwv9nIJ3pWy-9Yc",
      {
        method: "POST",
        body: JSON.stringify({
          email: enteredemail,
          password: enteredpassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      if (res.ok) {
        console.log("user is succesfully signed up");
        return res.json();
      } else {
        res.json().then((data) => {
          let errorMessage = "Authentication failed";
          if (data && data.error && data.error.message) {
            errorMessage = data.error.message;
          }
          alert(errorMessage);
        });
      }
    });
  };

  return (
    <div>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <Card className="px-4">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-center text-uppercase ">
                    Sign Up
                  </h2>
                  <div className="mb-3">
                    <Form onSubmit={submithandler}>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Email address
                        </Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter email"
                          required
                          ref={emailref}
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Password"
                          required
                          ref={passwordref}
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Confirm Password"
                          required
                          ref={confirmpasswordref}
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      ></Form.Group>
                      <div className="d-grid">
                        <Button variant="primary" type="submit">
                          Sign UP
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                        <p className="mb-0  text-center">
                          Already have an account??{" "}
                          <Link className="text-primary fw-bold" to="/login">Log in</Link>
                        </p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}