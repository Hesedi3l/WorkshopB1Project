import React from 'react'
import './CardsProject.css'


function CardsProject(props) {
    return (
        <>
            <div className="cards">
                <p className="title">
                    {props.title}
                </p>
                <ul>
                    <li>{props.list1}</li>
                    <li>{props.list2}</li>
                    <li>{props.list3}</li>
                    <li>{props.list4}</li>
                </ul>
            </div>
        </>
    );
}

export default CardsProject;
