
import React, {useState, useEffect,useContext} from 'react'
import { AuthContext } from "./Auth.js";
import {db} from '../firebase'
import {Link,Navigate} from 'react-router-dom'


export default function LA(){

    const [LAs, setLAs] = useState([])
    const getLas= async () => {

        db.collection('LA').onSnapshot((query) => {
            const listLa = [];
            query.forEach(document => {
                listLa.push({...document.data(), Id:document.id})
            })
        setLAs(listLa);
        })       
    }

    useEffect(() => {
        getLas()}, [])
        const { currentUser } = useContext(AuthContext);
        if (!currentUser) {
            return <Navigate to="/login" />;
          }

    return( 
        <div className="container-fluid" id="container">
            
            
            <div className='row justify-content-center text-center pt-5'>
                <div className='col-8 ' id='TitleList'>My Learning Agreements</div> 
            </div>
            <div className="row justify-content-around mt-5">
            {LAs.map(learning => (
                    <div className="card col-10 col-md-3 m-3" id="learningject" key={learning.Id}>
                        <Link to={`/LA/${learning.Id}`} id="box">
                        <div className="card-body">
                            <h5 className="card-title">{learning.Name}</h5>
                        </div>  
                        </Link>                     
                    </div>
            ))}
            </div>

            <div className='mb-md-5 mt-md-4 pb-5 text-center'>
            <button className="btn btn-outline-light col-md-3 btn-lg px-5" type="submit">Add new Learning</button>
                    </div>
        </div>
        );
}