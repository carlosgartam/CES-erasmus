import React, {useState, useEffect} from 'react'
import {db} from '../firebase'

export default function Comments(props){
    const [comments, setComments] = useState([])
    const [comment, setComment ] = useState({
        description:'',
        idUser:'Anonime'
    })

    useEffect(() => {
        getComments()
    }, [])
    const getComments = async () => {
        const listC = []
        db.collection('Subject').doc(props.id).collection('Comments').onSnapshot((query) => {    
            query.forEach(document => {
                listC.push({...document.data(), Id:document.id})
            })      
                setComments(listC);
            })
        
        }    
    
    const addComment = async () => {

    }

    return (
        <div>
        {comments.map(c => (
                <div className="card col-10 col-md-3 m-3" id="comment" key={c.description}>        
                    <div className="card-body">
                        <h5 className="card-title">{c.idUser}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Said: {c.description}</h6>
                    </div>
                </div>
        ))}
        </div>
    )
}