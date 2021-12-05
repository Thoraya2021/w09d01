import React, { useState } from "react";
import axios from "axios";
import "./style.css";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const Login = () => {
    const [logemail, setLogEmail] = useState("");
const [logpassword, setLogPassword] = useState("");

const login = async () => {
try{

const result=await axios.post(`${BASE_URL}/login`,
{
email:logemail,
password:logpassword
});
console.log(result)
}
catch(error)
{
console.log(console.error)
}

};
  return (
    <div className="login">
   
 <input placeholder="email" type="text" onChange={(e) => setLogEmail(e.target.value)}   />
    <input placeholder="password" type="password"  onChange={(e) => setLogPassword (e.target.value)}   />
    <button  onClick={login}>log-In</button>

  </div>
);
}

export default Login;