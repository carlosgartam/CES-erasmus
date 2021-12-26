
import './App.css';
import './firebase';
import 'firebase/auth';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {Routes, BrowserRouter,Route, Link} from 'react-router-dom'
import ListSubjects from './components/ListSubjects';
import Subject from './components/Subject';
import LogIn from './components/LogIn';
import SingUp from './components/SingUp';
import PrivateRoute from "./components/PrivateRoute";
import {AuthProvider} from './components/Auth';
import {app} from './firebase'
function App() {
  return (
    <AuthProvider>
    <div> 
      <BrowserRouter>
      <Routes>
      <Route path="/login" exact element={<LogIn/>}/>
        <Route path="/singup" exact element={<SingUp/>}/>
        <Route path="/" element={<div><Nav/><ListSubjects/></div>}/>
        <Route path="/:id" exact element={<div><Nav/><Subject/></div>}/>
        
      </Routes>
      </BrowserRouter>
    </div>
    </AuthProvider>
  );
}

export function Nav() {
  const SingOut=(e)=>{
    e.preventDefault()
    app.auth().signOut()
    console.log('SINGOUT')
}
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" id='navbar'>
      <Link className="navbar-brand px-5 py-3" to="/">ErasmusHelper</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
        <Link className="nav-item nav-link" to="/login">Login</Link>
          <a className="nav-item nav-link" href="#">LA</a>
          <a className="nav-item nav-link" href="#">Account</a>
          <button type="submit" className="btn mx-3" id="buttonSave" onClick={SingOut}>Sing Out</button>
        </div>
      </div>
    </nav>
  );
}

export default App;
