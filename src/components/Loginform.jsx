import React from 'react'
import { useState } from 'react';

const Loginform = () => {   
    const [userName,setUserName]=useState("");
    const [password,setPassword]=useState("");
    function loginHandler()
    {
        console.log("userName",userName);
        console.log("password",password);
    }
  function userNameHandler(event)
  {
    console.log("userName",event.target.value);
    setUserName(event.target.value);
  }
  function passwordHandler(event)
  {
    console.log("password",event.target.value);
    setPassword(event.target.value);
  }
  return (
    <div>zerodha<br></br>
        <input type="text" placeholder='Enter your user id' onChange={userNameHandler} /> <br></br>
        <input type="text" placeholder='Enter your password' onChange={passwordHandler}/> <br></br>
        <button onClick={loginHandler}>Login</button>
    </div>

  )
}

export default Loginform