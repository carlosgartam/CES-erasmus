import React, {useState, useEffect} from 'react'
import {db} from '../firebase'


const ListSubjects = () => {
    const [subjects, setSubjects] = useState([])
    const getSubjects = async () => {
        const listSub = [];

        db.collection('Subject').onSnapshot((query) => {
            query.forEach(document => {
                listSub.push({...document.data(), Id:document.id})
            })
        setSubjects(listSub);
        })       
    }
    console.log(subjects)
    useEffect(() => {
        getSubjects()}, [])
    
    return( <div>
        {subjects.map(sub => (
            <div key={sub.Id}>
                {sub.Name}
                </div>
        ))}
    </div>
    );
}
function subjectView({id}) {

}

export default ListSubjects;