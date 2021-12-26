import React, {useState, useEffect,useContext} from 'react'
import {db} from '../firebase'
import {useParams,Navigate} from 'react-router-dom'
import Comments from './Comments'
import { AuthContext } from "./Auth.js";

export default function Subject(){
    const [subject, setSubject] = useState([])
    const id = useParams().id
    useEffect(() => {
        getOneSubject()
    }, [])
    
    const getOneSubject = async () => {
        db.collection('Subject').doc(id).onSnapshot((query) => {          
                setSubject(query.data());
            })
        
        }     
        const { currentUser } = useContext(AuthContext);


        if (!currentUser) {
            return <Navigate to="/login" />;
          }  

    return (
            <div className= "container-fluid">
                <div className="row justify-content-center ">
                    <div className="col-6 text-center py-4 my-5" id='TitleSub'>
                        <h2 className="main-heading ">{subject.Name}</h2>
                        <div className="underline-mx-auto"></div>
                    </div>´
                </div>
                <div className="row justify-content-around ">
                    <div className="col-7 p-5 my-5" id='TitleSub'>   
                         <h4 className="main-heading t-5">Objective:    {subject.Objective} </h4> 
                        
                        
                        <h4 className="main-heading">Number of Ects:   {subject.Ects} </h4>
                        
                           

                        <h4 className="main-heading">Room:   {subject.Room} </h4>

                        <h4 className="main-heading">Semester:   {subject.Semester} </h4>

                        <h4 className="main-heading">Teacher:   {subject.Teacher} </h4>

                         <h4 className="main-heading">Programme content: </h4>
                           <p> {subject.ProgrammeContent}</p>  


                    </div> 
                    <div className="col-3 p-5 my-5" id='comment'> 

                        <div><Comments id={id}></Comments></div>

                       
                        </div>

                    
                </div>
            </div>
    )
}
