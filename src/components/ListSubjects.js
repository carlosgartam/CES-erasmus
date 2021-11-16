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
                <div class="card" key={sub.Id}>
                    <div className="card-body">
                        <h5 class="card-title">{sub.Name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Semester: {sub.Semester}</h6>
                        <p class="card-text">{sub.Description}</p>
                    </div>
                </div>
        ))}
    </div>
    );
}
function subjectView({id}) {

}

export default ListSubjects;