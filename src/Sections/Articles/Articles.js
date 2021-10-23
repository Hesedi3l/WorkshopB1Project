import React from 'react'
import './Articles.css'
import CardsArticles from "./CardsArticles/CardsArticles";



function Articles() {
    return (
        <>
            <div className="articles">
                <CardsArticles
                    image={process.env.PUBLIC_URL + "images/logo.jpg"}
                />
                <CardsArticles
                    image={process.env.PUBLIC_URL + "images/logo.jpg"}
                />
                <CardsArticles
                    image={process.env.PUBLIC_URL + "images/logo.jpg"}
                />
                <CardsArticles
                    image={process.env.PUBLIC_URL + "images/logo.jpg"}
                />
                <CardsArticles
                    image={process.env.PUBLIC_URL + "images/logo.jpg"}
                />
                <CardsArticles
                    image={process.env.PUBLIC_URL + "images/logo.jpg"}
                />
                <CardsArticles
                    image={process.env.PUBLIC_URL + "images/logo.jpg"}
                />
                <CardsArticles
                    image={process.env.PUBLIC_URL + "images/logo.jpg"}
                />
                <CardsArticles
                    image={process.env.PUBLIC_URL + "images/logo.jpg"}
                />
                <CardsArticles
                    image={process.env.PUBLIC_URL + "images/logo.jpg"}
                />
                <CardsArticles
                    image={process.env.PUBLIC_URL + "images/logo.jpg"}
                />
                <CardsArticles
                    image={process.env.PUBLIC_URL + "images/logo.jpg"}
                />
            </div>
        </>
    );
}

export default Articles;
