import React from 'react';
import EmailForm from '../Pages/EmailForm';

const Welcome = () => {
  return (
    <div>
      <div style={{textAlign:'center', fontSize:'200%'}}>
      <h3>Welcome to your mail box</h3>
      </div>
      <hr/>
      <EmailForm/>
    </div>
  )
}

export default Welcome;