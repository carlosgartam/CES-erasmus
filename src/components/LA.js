
import React, {useState, useEffect,useContext} from 'react'

import {db} from '../firebase'



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

    return( 
        <div className="container-fluid" id="container">
            
            
            <div className='row justify-content-center text-center pt-5'>
                <div className='col-8 ' id='TitleList'>My Learning Agreements</div> 
            </div>
            <div className="row justify-content-around mt-5">
            {LAs.map(learning => (
                    <div className="card col-10 col-md-3 m-3" id="learningject" key={learning.Id}>
                      
                        <div className="card-body">
                            <h5 className="card-title">{learning.ListDestiny}</h5>
                            
                            <div className="card-text" >{learning.ListHome}</div>
                        </div>
                       
                    </div>
            ))}
            </div>
        </div>
        );
}