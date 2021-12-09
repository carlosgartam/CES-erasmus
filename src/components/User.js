import React, {useState} from 'react'
//import {db,useFirebaseApp} from '../firebase'
import 'firebase/auth'


export default function User () {
    const [User, setUser] = useState({
        email:'',
        password:''
    })
    //const firebase = useFirebaseApp()

    const register = async () => {
           
    }
    const onInput=(e)=>{
        setUser({...User,[e.target.name]: e.target.value})
    }
    const onSubmit=(e)=>{
        
    }
    console.log(User)
    
    return( 
    <div>
        <div>
            <label htmlFor="email">e-mail</label>
            <input type="email" id="email" name='email' onChange={onInput}></input>
            <label htmlFor="password">password</label>
            <input type="password" id="password" name='password' onChange={onInput}></input>
            <button onChange={onSubmit}>Register</button>
        </div>
    </div>
    );
}
