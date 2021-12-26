
import {AuthContext} from './Auth';
import {app} from '../firebase'
import React from "react";
import { Link} from 'react-router-dom'


export default function Nav () {
    const { currentUser } = React.useContext(AuthContext);

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
        {   !!currentUser ?
            <div className="navbar-nav">
                <Link className="nav-item nav-link" to="/login">Home</Link>
                <Link className="nav-item nav-link" to="/LA">LA</Link>
                <button type="submit" className="btn mx-3" id="buttonSave" onClick={SingOut}>Sing Out</button>
            </div> : 
            <div className="navbar-nav">
                <Link className="btn mx-3" id="buttonSave" to="/login">Login</Link>
                <Link className="btn mx-3" id="buttonSave" to="/singup">SingUp</Link>
            </div>
          
        }
        </div>
      </nav>
    );
  }