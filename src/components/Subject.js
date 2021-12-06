import React, {useState, useEffect} from 'react'
import {db} from '../firebase'
import {useParams} from 'react-router-dom'
import Comments from './Comments'

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

    return (
        <div>
        {subject.Name}

            <div>
            <Comments id={id}></Comments>
            </div>
        </div>
    )
}
