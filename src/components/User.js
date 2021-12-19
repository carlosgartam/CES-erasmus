import React, {useState} from 'react'
import {app} from '../firebase'
import 'firebase/auth'


export default function User () {
    const [User, setUser] = useState({
        email:'',
        password:''
    })
    let localUser=''
    const onInput=(e)=>{
        setUser({...User,[e.target.name]: e.target.value})
        console.log(User)
    }

    const SingUp= async ()=>{
        await app.auth().createUserWithEmailAndPassword(User.email,User.password)
        console.log('singup')
        localUser= User.email;
    }
    const LogIn=(e)=>{
        app.auth().createUserWithEmailAndPassword(User.email,User.password)
    }


    console.log(User)
    
    return( 
    <div>
        <div>
            User:{localUser}
        </div>
        <div>
            <label htmlFor="email">e-mail</label>
            <input type="email" id="email" name='email' onChange={onInput}></input>
            <label htmlFor="password">password</label>
            <input type="password" id="password" name='password' onChange={onInput}></input>
            <button onClick={SingUp}>Sing up</button>
        </div>
        <div>
            <label htmlFor="email">e-mail</label>
            <input type="email" id="email" name='email' onChange={onInput}></input>
            <label htmlFor="password">password</label>
            <input type="password" id="password" name='password' onChange={onInput}></input>
            <button onClick={LogIn}>Login</button>
        </div>
    </div>
    );
}
