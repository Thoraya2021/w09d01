import axios from "axios";
import React, { useState } from "react";

import "./App.css";

const BASE_URL = process.env.REACT_APP_BASE_URL;


function App() {
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

///////////login 
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
    <div className="App">
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
      <input placeholder="email" type="text" onChange={(e) => setLogEmail(e.target.value)}   />
      <input placeholder="password" type="password"  onChange={(e) => setLogPassword (e.target.value)}   />
      <button  onClick={login}>log-In</button>

    </div>
  );
}

export default App;
