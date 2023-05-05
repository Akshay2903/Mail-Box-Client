import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap';
import { useDispatch,useSelector } from 'react-redux'
import { Link, useNavigate } from "react-router-dom";
import { inboxAction } from '../store/InboxSlicer';

const Inbox = () => {
const history = useNavigate();
  const emaildata = useSelector(state=>state.in.inbox);
    
    const dispatch = useDispatch();
    const getSaveData  = () => {
        fetch(`https://mailbox-6bf49-default-rtdb.firebaseio.com/emailData/${localStorage.getItem("email")}/Recieve.json`).then((res)=>{
            if(res.ok){
                return res.json()
            }else{
                return res.json().then((data)=>{
                    if(data && data.error && data.error.message){
                        let errMessage = "Authentication Failed, " + data.error.message;
                        throw new Error(errMessage);
                    }
                })
            }
        }).then((data)=>{
            const myarr = []
    
            for(let i in data){
                myarr.unshift({
                    id:i,
                    email:data[i].email,
                    subject:data[i].subject,
                    message:data[i].message,
                    show:data[i].show
                })
            }
            
            //console.log(data) 
            //console.log(myarr)
            dispatch(inboxAction.setinbox(myarr))
    
            
        }).catch((err)=>{
            alert(err.message)
        })
    }
    useEffect(() => {
      const intervalId = setInterval(() => {
        getSaveData();
      }, 4000);
    console.log("Hellow World")
      return () => {
        clearInterval(intervalId);
      };
    }, []);
    
  const deleteHandler = (id) => {
    fetch(
      `https://mailbox-6bf49-default-rtdb.firebaseio.com/emailData/${localStorage.getItem("email")}/Recieve/${id}.json`,
      {
        method: "DELETE",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        getSaveData();
        console.log("Expense successfuly deleted");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const showHandler = (id) => {
      fetch( `https://mailbox-6bf49-default-rtdb.firebaseio.com/emailData/${localStorage.getItem("email")}/Recieve/${id}.json`,{
          method:"PATCH",
          body:JSON.stringify({
              show:false
          }),
          
          headers:{
            'Content-Type':'application/json'
          }
        }).then((res)=>{
          if(res.ok){
              
              return res.json();
          }else{
              return res.json().then((data)=>{
                  if(data && data.error && data.error.message){
                      let errMessage = "Authentication Failed, " + data.error.message;
                      throw new Error(errMessage);
                  }
              })
          }
      }).then((data)=>{
          getSaveData();
            history(`/inbox/${id}`)
      }).catch((err)=>{
        alert(err.message);
      })
  };

  return (
    
      <div>
      {emaildata.map((item,id)=>(
        <div key={id} style={{backgroundColor:'yellow' ,margin:'3%'}} >
           <Button variant="danger" style={{float:'right'}} onClick={()=> deleteHandler(item.id)}>Delete</Button>
            <p onClick={()=> showHandler(item.id)}>
            {item.show && <p>🔵</p>}
           <Link>𝕱𝖗𝖔𝖒: {item.email}</Link>
            </p>
            <hr/>  
        </div>
    ))}
    </div>   
  )
}

export default Inbox;