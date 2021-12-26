import React, {useState, useEffect,useContext} from 'react'
import {db} from '../firebase'
import {Link,Navigate} from 'react-router-dom'
import { AuthContext } from "./Auth.js";


export default function ListSubjects () {
    const [subjects, setSubjects] = useState([])
    const getSubjects = async () => {

        db.collection('Subject').onSnapshot((query) => {
            const listSub = [];
            query.forEach(document => {
                listSub.push({...document.data(), Id:document.id})
            })
        setSubjects(listSub);
        })       
    }
    
    
    useEffect(() => {
        getSubjects()}, [])
        const { currentUser } = useContext(AuthContext);


        if (!currentUser) {
            return <Navigate to="/login" />;
          }
    
    return( 
    <div className="container-fluid" id="container">
        
        
        <div className='row justify-content-center text-center pt-5'>
            <div className='col-8 ' id='TitleList'>List of Subjects</div> 
        </div>
        <div className="row justify-content-around mt-5">
        {subjects.map(sub => (
                <div className="card col-10 col-md-3 m-3" id="subject" key={sub.Id}>
                    <Link to={`/${sub.Id}`} id="box">
                    <div className="card-body">
                        <h5 className="card-title">{sub.Name}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Semester: {sub.Semester}</h6>
                        <div className="card-text" >{sub.Objective}</div>
                    </div>
                    </Link>
                </div>
        ))}
        </div>
    </div>
    );
}
