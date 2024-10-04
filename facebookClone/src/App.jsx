import React from 'react'
import Home from './Pages/home/Home'
import Profile from './Pages/profile/Profile'
import Login from './Pages/login/Login'
import Register from './Pages/register/Register'

// import {BrowserRouter as Router, Switch, Route, Redirect,} from "react-router-dom";
const App = () => {
  return (
    <>
     <Home/>
     <Login/>
     {/* <Profile/>*/}
     
     
     <Register/> 
     
  </>
  )
}
export default App


