import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { sentboxAction } from '../store/SentSlicer'
import { useSelector } from 'react-redux'

function Sentbox() {
    const emaildata = useSelector(state=>state.sent.sentbox);
    const dispatch = useDispatch();
    const submitHandler  = () => {
        fetch(`https://mailbox-6bf49-default-rtdb.firebaseio.com/emailData/${localStorage.getItem("email")}/Sent.json`).then((res)=>{
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
                    message:data[i].message
                })
            }
            
            console.log(data)
            //console.log(myarr)
            dispatch(sentboxAction.setsenbox(myarr))
    
            
        }).catch((err)=>{
            alert(err.message)
        })
    }

    useEffect(()=>{
        submitHandler();
    },[]);
   
  return (
    
      <div>
    {emaildata.map((item,index)=>(
        <div key={index}>
            <p>Email:  {item.email}</p>
            <p>Subject: {item.subject}</p>
            <p>Message: {item.message}</p>
            <hr/>
        </div>
    ))}
    </div>
    
  )
}

export default Sentbox;