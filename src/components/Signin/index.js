import React, { useState } from 'react';
import {Redirect} from "react-router-dom"
const SignIn = () => {

    const [username,setUsername]=useState("")
    const [password,setPassword]= useState("")
    const [isUser,setIsUser]=useState(false)
    const path=process.env.PUBLIC_URL
    const user={name:"vansh",pass:"mittal"}
    const handleSubmit = (e) => {
        
        const { name, pass } = user;
        if (username.toLowerCase() === name && password === pass) {
          setIsUser(true);
        }
      };
    return (  
        <>
        {isUser && <Redirect to={`${path}/products`}/>}
        <h1 style={{textAlign:"center"}}> Sign in</h1>
        <hr/>
        <div className="form-container">
            {/* <form onSubmit={handleSubmit}> */}
            <label>User Name</label>
            
            <input
            type="text"
            value={username}
            placeholder="vansh"
            onChange={(e) => setUsername(e.target.value)}
            className="sign_in_input"
            />
            <br/>
            <label>Password</label>
            <br/>
            <input
            type="text"
            value={password}
            placeholder="mittal"
            onChange={(e) => setPassword(e.target.value)}
            className="sign_in_input"
            />
            <br/>
            <input type="submit" className="submit" onClick={handleSubmit}/>
            {/* </form> */}
        </div>        

      </>
    )
}
 
export default SignIn;