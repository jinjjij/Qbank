import React from "react";



function Subject({ subject, clickFunction }) {
    console.log(clickFunction);
    return (
        <div>
            <div onClick = {clickFunction}><b>{subject.id} ({subject.sname})</b></div>
        </div>
    );
}


function SubjectList({clickFunction}) {

    // get from db
    const subjects = [
        {id: 1, sname: 'name1'},
        {id: 2, sname: 'name2'},
        {id: 3, sname: 'name3'}
    ];

    return (
        <div className="SubjectList">
            {
                subjects.map(subj =>(
                    <Subject subject={subj} clickFunction={clickFunction} key={subj.id}/>
                ))
            }

        </div>
    );
}


export {SubjectList};