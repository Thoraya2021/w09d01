import React from "react";
import {Routes, Route } from "react-router";
import './App.css';
import Register from "./compoents/register";
import Login from "./compoents/login"
import Todos from "./compoents/todo";


function App() {

 return (
    
    <div className="homepage">

<Routes>
      
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={< Register />} />
        <Route exact path="/todos" element={<Todos />} />
        <Route
          path="*"
          render={() => {
            return <h1>404</h1>;
          }}
        />
      </Routes>
   
       </div> 
   
  );
}
export default App;
