import React from "react";



function Subject({ subject }) {
    return (
        <div>
            <a onClick={}>{subject.id} ({subject.sname})</a>
        </div>
    );
}


function SubjectList() {

    const subjects = [
        {id: 1, sname: 'name1'},
        {id: 2, sname: 'name2'},
        {id: 3, sname: 'name3'}
    ];

    return (
        <div>
            {
                subjects.map(subj =>(
                    <Subject subject={subj} key={subj.id}/>
                ))
            }

        </div>
    );
}


export {SubjectList};