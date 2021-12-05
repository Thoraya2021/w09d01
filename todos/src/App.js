import React from "react";
import {Routes, Route } from "react-router";
import './App.css';

import Registration from "./compoents/register"
import Login from "./compoents/login"


function App() {

 return (
    
    <div className="homepage">

<Routes>
        <Route path="/" element={<Login />} />
       
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Registration />} />

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
