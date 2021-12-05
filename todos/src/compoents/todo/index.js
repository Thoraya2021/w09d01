import React, { useState } from "react";
import axios from "axios";
import "./style.css";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const Todos = () => {
    const [todos,setTodos] = useState([]);


const todoss = async () => {
try{

const result=await axios.get(`${BASE_URL}/alltodos`,
{
name:todos,
});
console.log(result)
}
catch(error)
{
console.log(console.error)
}

};
  return (

    <div className="todos">
         <input
           className="addtodo"
           onChange={(e) => setTodos(e.target.value)}
           placeholder="here what to do"
         />

<button onClick={todoss}>add todo</button>

   
  </div>
);
}

export default Todos;