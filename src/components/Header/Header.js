import React from "react";
import { Button } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../store/AuthSlicer";
import { useSelector } from 'react-redux';


const Header = (props) => {
  const dispatch = useDispatch();
  
  
  const show = useSelector(state => state.auth.isLogin)
  const logoutHandler = ()=> {
    alert("Do you want Logout")
    dispatch(authActions.logout())
  };

  return (
    <div style={{backgroundColor: 'beige'}}>
      <Nav className="justify-content-center" activeKey="/home">
      {show && <Button variant='outline-primary' style={{margin:'20px'}}><Link to='/welcome'>Compose</Link></Button>}

      {show && <Button variant='outline-primary' style={{margin:'20px'}}><Link to='/inbox'>Inbox</Link></Button>}
    
      {show && <Button variant='outline-primary' style={{margin:'20px'}}><Link to='/sentbox'>sent box</Link></Button>}
      {show && <div style={{margin:'20px'}}><Link to="/" onClick={logoutHandler}><Button variant="outline-danger">Logout</Button></Link></div>}
      </Nav>
       </div>
  )
};

export default Header;