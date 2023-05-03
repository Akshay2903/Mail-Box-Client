import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';

const EmailForm = () => {


    const emailinputref = useRef();
    const messageinputref = useRef();

    const submitHandler = (e) => {
        e.preventDefault();
    
    const emailData = {
            email : emailinputref.current.value,
            message : messageinputref.current.value,
        }
    
        fetch(`https://mailbox-6bf49-default-rtdb.firebaseio.com/emailData/${localStorage.getItem("email")}.json`,{
            method:'POST',
            body:JSON.stringify(emailData),
            headers: {
                "Content-Type": "application/json",
              },
        }).then((res) => {
            if (res.ok) {
                console.log("Email succesfully Send");
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
       })
    }

  return (
    <div style={{margin:'5%'}}>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='recipientEmail'>
            <Form.Label>To</Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter Email'
              required
              ref={emailinputref}/>
        </Form.Group>
        <Form.Group controlId='message'>
            <Form.Label>Message</Form.Label>
            <Form.Control
            as="textarea"
            rows={5}
            ref={messageinputref}
            />
        </Form.Group>
        <Button variant="primary" type="submit" style={{marginTop: '1%'}}>
            Send Email
        </Button>
      </Form>
    </div>
  )
}

export default EmailForm;
