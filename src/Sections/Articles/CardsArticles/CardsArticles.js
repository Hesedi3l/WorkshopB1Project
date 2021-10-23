import React from 'react'
import './CardsArticles.css'



function CardsArticles(props) {
    return (
        <>
            <div className="cardsarticles">
                <div className="front">
                    <img src={props.image} alt=""/>
                </div>
            </div>
        </>
    );
}

export default CardsArticles;
