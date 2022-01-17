import React, {useState, useEffect,useContext} from 'react'
import {db} from '../firebase'
import {useParams,Navigate} from 'react-router-dom'
import { AuthContext } from "./Auth.js";
import {Link} from 'react-router-dom'

export default function Learning(){
    const [learning, setLA] = useState([])
    const id = useParams().id
    const [listdestiny, setListDestiny] = useState([])
    const [listhome, setListHome] = useState([])
    useEffect(() => {
        getOneLA()
    }, [])
    useEffect(() => {
        getListA()
    }, [])
    useEffect(() => {
        getListB()
    }, [])


    const getListA = async () => {

    db.collection('LA').doc(id).collection('ListDestiny').onSnapshot((query) => {    
        const listC = []
        query.forEach(document => {
            listC.push({...document.data(), Id:document.id})
        })      
            setListDestiny(listC);
        })

    } 
    const getListB = async () => {

        db.collection('LA').doc(id).collection('ListHome').onSnapshot((query) => {    
            const listB = []
            query.forEach(document => {
                listB.push({...document.data(), Id:document.id})
            })      
                setListHome(listB);
            })
    
        } 

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
                    <div className="col-9 p-5 my-5" id='TitleSub'>
                        <div className='row justify-content-around'>
                            <div className='col-4'>

                            <h4 className="main-heading t-5">LIST DESTINY:</h4> 
                         {listdestiny.map(c => (
                <div className="card my-3" id="comment" key={c.Id}>        
                    <div className="card-body">
                        <h5 className="card-title">{c.SubjectName}</h5>
                        <div>ECTS:  {c.Ects}  </div>
                        
                    </div>
                </div>
        ))}


                            </div>
                            <div className='col-4'>

                            <h4 className="main-heading t-5">LIST HOME:  </h4> 
                         {listhome.map(c => (
                <div className="card my-3" id="comment" key={c.Id}>        
                    <div className="card-body">
                        <h5 className="card-title">{c.SubjectName}</h5> 
                        <div>ECTS:{c.Ects}  </div>
                       
                    </div>
                </div>
        ))}


                            </div>
                        </div>  
                         

                      


                    </div> 
                   
                    
                </div>
            </div>
    )
}