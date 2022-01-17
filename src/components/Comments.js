import React, {useState, useEffect,useContext} from 'react'
import {db} from '../firebase'
import { AuthContext } from "./Auth.js";

export default function Comments(props){
    const [comments, setComments] = useState([])
    const { currentUser } = useContext(AuthContext);
    const [comment, setComment ] = useState({
        Description:'',
        UserId:currentUser.email
    })
    
    console.log(props.id)
    const getComments = async () => {
        
        db.collection('Subject').doc(props.id).collection('Comments').onSnapshot((query) => {    
            const listC = []
            query.forEach(document => {
                listC.push({...document.data(), Id:document.id})
            })      
                setComments(listC);
            })
        
        }
        useEffect(() => {
            getComments()
        }, [])

    const onInput=(e)=>{
        setComment({...comment,[e.target.name]: e.target.value})
    }
    const addComment = async (e) => {
        e.preventDefault()
        const res =await db.collection('Subject').doc(props.id).collection('Comments').doc().set(comment);
    }
    const deleteComment = async (idComment) => {
        const res = await db.collection('Subject').doc(props.id).collection('Comments').doc(idComment).delete();
    }

    return (
        <div>
            <div className="form-group mb-3">
                <h4>
                <label className="form-label" id="labelC">Comment</label>
                </h4>
                <input type="text" className="form-control" id="textC" placeholder="Write your comment" name="Description" required onChange={onInput}>
                </input>
            </div>
            <form onSubmit={addComment}>
                <div className="row justify-content-center my-4">
                    <button type="submit" className="btn mb-5" id="buttonSave"> Add your Comment</button>
                </div>
            </form>
        {comments.map(c => (
                <div className="card my-3" id="comment" key={c.Id}>        
                    <div className="card-body">
                        <h5 className="card-title">{c.UserId}</h5>
                        <h6 className="card-subtitle mb-2">Said: {c.Description}</h6>
                        <button className="btn" id="buttonDelete" onClick={()=>deleteComment(c.Id)}>
                            Delete
                        </button>
                    </div>
                </div>
        ))}
        </div>
    )
}