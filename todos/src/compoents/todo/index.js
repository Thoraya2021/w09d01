import React, { useState,useEffect } from "react";
import axios from "axios";
import "./style.css";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const Todos = () => {
    const [todos,setTodos] = useState([]);
    const [token,setToken]= useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    setToken(token);
    todoss();

  }, []);

  ///get all 
const todoss = async () => {
try{

const result=await axios.get(`${BASE_URL}/alltodos`,
{
  headers:
   { Authorization: `bearer ${token}` },
});
setTodos(result.data)
//console.log(result)
}
catch(error)
{
console.log(console.error)
}

};


//////////add new tasks
const addtodo = async () => {
    await axios.post(
      `${BASE_URL}/todos`,
      {
        name:todos,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    todoss(token);
};


/*
todoRouter.get("/alltodos", getalltodos);
todoRouter.get("/todos/:id", authentication, getTodosById);
todoRouter.post("/todos", createtodo);
todoRouter.put("/todos/:id",authorization, updateTodo);
todoRouter.delete("/todos/:id",authentication, deleteTodo);
*/

const deletetodo = async (id) => {
    await axios.delete(
      `${BASE_URL}/todos/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    todoss(token);
};

  return (

    <div className="todos">
         <input
           className="addtodo"
           onChange={(e) => setTodos(e.target.value)}
           placeholder="here what to do"
         />
 
  {todos.length && todos.map((item, i) => (
        <ul>
          <li key={i}>{item.todos}</li>
          <button className="addto" onClick={addtodo}>
               add task
              </button>
         <button
                        className="delete"
                        onClick={() => deletetodo(todos._id)}
                      >
                       delete task
                      </button>
        </ul>
      ))}

  </div>
);
}

export default Todos;