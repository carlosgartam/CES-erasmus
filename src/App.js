
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
import Nav from "./components/Nav";
import {AuthProvider} from './components/Auth';
import LA from './components/LA';

function App() {
  return (
    <AuthProvider>
    <div> 
    
      <BrowserRouter>
      <Nav/>
      <Routes>
      <Route path="/login" exact element={<LogIn/>}/>
        <Route path="/singup" exact element={<SingUp/>}/>
        <Route path="/" element={<ListSubjects/>}/>
        <Route path="/:id" exact element={<Subject/>}/>
        <Route path="/LA" exact element={<LA/>}/>
        
      </Routes>
      </BrowserRouter>
    </div>
    </AuthProvider>
  );
}



export default App;
