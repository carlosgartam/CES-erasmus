import React, {useState, useEffect} from 'react'
import {app} from '../firebase'
import 'firebase/auth'

export function UserA(){
    let user=''
    if(app.auth().currentUser===null) user='';
    else user= app.auth().currentUser.email;
    console.log(user)
    return user 
}
export default function User () {
    const [User, setUser] = useState({
        email:'',
        password:''
    })
    let localUser='';

    useEffect(() => {
        localUser=UserA()
    }, [User])
    const onInput=(e)=>{
        setUser({...User,[e.target.name]: e.target.value})
        console.log(User)
    }
    localUser=UserA()
    
    

    const SingUp= async (e)=>{
        e.preventDefault()
        await app.auth().createUserWithEmailAndPassword(User.email,User.password)
        console.log('singup')
    }
    const LogIn=(e)=>{
        e.preventDefault()
        app.auth().signInWithEmailAndPassword(User.email,User.password)
        console.log('login')
    }
    const SingOut=(e)=>{
        e.preventDefault()
        app.auth().signOut()
        console.log('SINGOUT')
    }
    
    return( 
    <div>
        <div>
            User:{localUser}
        </div>
        <form>
            <label htmlFor="email">e-mail</label>
            <input type="email" id="email" name='email' onChange={onInput}></input>
            <label htmlFor="password">password</label>
            <input type="password" id="password" name='password' onChange={onInput}></input>
            <button onClick={SingUp}>Sing up</button>
        </form>
        <form>
            <label htmlFor="email">e-mail</label>
            <input type="email" id="email" name='email' onChange={onInput}></input>
            <label htmlFor="password">password</label>
            <input type="password" id="password" name='password' onChange={onInput}></input>
            <button onClick={LogIn}>Login</button>
            <button onClick={SingOut}>SING OUT</button>
        </form>
    </div>
    );
}
