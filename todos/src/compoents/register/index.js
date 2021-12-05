import React, { useState } from "react";
import axios from "axios";


const BASE_URL = process.env.REACT_APP_BASE_URL;

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


  
    const register = async () => {
  try{
  
  const result=await axios.post(`${BASE_URL}/signup`,
  {
    email:email,
    password:password
  });
  console.log(result)
  }
  catch(error)
  {
    console.log(console.error)
  }
  
    };


    return (
        <div className="register">
          <input
            placeholder="email"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="password"
            type="text"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={register}>sign-up</button>
          <br />
    
        </div>
      );
    }

    


export default Register; 
