import React from 'react'
import './CardsTeam.css'


function CardsTeam(props) {
    return (
        <>
            <div className="box">
                <img src={props.image} alt=""/>
                <h3>{props.name}</h3>
                <h4>{props.role}</h4>
            </div>
        </>
    );
}

export default CardsTeam;
