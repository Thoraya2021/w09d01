import React from "react";
import './App.css';
import Register from "./compoents/register";
import Login from "./compoents/login"
import Todos from "./compoents/todo";


function App() {

 return (
    
    <div className="App">

<Login />

      < Register />
    
      <Todos />
       </div> 
   
  );
}
export default App;
