import React, {useState, useEffect,useContext} from 'react'
import {db} from '../firebase'
import {useParams,Navigate} from 'react-router-dom'
import { AuthContext } from "./Auth.js";
import {Link} from 'react-router-dom'

export default function Learning(){
    const [learning, setLA] = useState([])
    const id = useParams().id
    useEffect(() => {
        getOneLA()
    }, [])
    
    const getOneLA = async () => {
        db.collection('LA').doc(id).onSnapshot((query) => {          
                setLA(query.data());
            })
        
        }     
        const { currentUser } = useContext(AuthContext);

        console.log(learning);
        if (!currentUser) {
            return <Navigate to="/login" />;
          }  

    return (
            <div className= "container-fluid">
                <div className="row justify-content-center ">
                    <div className="col-6 text-center py-4 my-5" id='TitleSub'>
                        <h2 className="main-heading ">{learning.Name}</h2>
                        <div className="underline-mx-auto"></div>
                    </div>´
                </div>
                <div className="row justify-content-around ">
                    <div className="col-7 p-5 my-5" id='TitleSub'>   
                         <h4 className="main-heading t-5">LIST DESTINY:    {learning.ListDestiny} </h4> 


                        
                        <h4 className="main-heading">Number of Ects:   {learning.Ects} </h4>
                        
                           

                       

                        <h4 className="main-heading">Teacher:   {learning.Teacher} </h4>

                         <h4 className="main-heading">Programme content: </h4>
                           <p> {learning.ProgrammeContent}</p>  


                    </div> 
                   
                    
                </div>
            </div>
    )
}