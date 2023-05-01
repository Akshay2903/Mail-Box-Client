import React, { useRef} from 'react';
import { Form, Button } from 'react-bootstrap';

function SignUp() {
    const inputEmailRef = useRef();
    const inputPasswordRef = useRef();
    const inputConfirmPasswordRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();
    
        const enteredEmail = inputEmailRef.current.value;
        const enteredPassword = inputPasswordRef.current.value;
    
        if (enteredPassword !== inputConfirmPasswordRef.current.value) {
          alert("Password should be same");
          return;
        }
        fetch(
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC8nuvzvUfFVBvK7gZvgwv9nIJ3pWy-9Yc",
          {
            method: "POST",
            body: JSON.stringify({
              email: enteredEmail,
              password: enteredPassword,
              returnSecureToken: true,
            }),
            header: {
              "Content-Type": "application/json",
            },
          }
        ).then((res) => {
          if (res.ok) {
            alert("Successfully Registered");
            console.log("Succcessfully Registered");
          } else {
            return res.json().then((data) => {
              alert("datta.error.message");
            });
          }
        });
      };

  return (
    <>
    <h2>Sign Up</h2>
    <Form onSubmit={submitHandler}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          required
          ref={inputEmailRef}
          autoComplete="on"
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          required
          ref={inputPasswordRef}
          autoComplete="on"
        />
      </Form.Group>

      <Form.Group controlId="formBasicConfirmPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Confirm Password"
          ref={inputConfirmPasswordRef}
          autoComplete="on"
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </>
  );
}

export default SignUp;
