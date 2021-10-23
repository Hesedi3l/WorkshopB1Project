import React from 'react'
import "./Banner.css"
import {Link} from "react-router-dom";


function Banner() {
    return (
        <>
            <section className="banner" id="banner">

                <Link to={"/GamePage"}>
                    <a className="playButton">Play</a>
                </Link>

                <div className="text_box">
                    <h1>Pong Pong T<span>ong</span> <br/> Edi<span>tion</span></h1>
                    <p>
                        Dans le cadre du workshop 2021 des bachelors 1ère année,
                        nous vous présentons aujourd'hui notre projet de jeu vidéo
                        sur le thème du sport, un ping pong avec des tongs !
                    </p>
                    <div className="buttons">
                        <a href="" className="btn bg">Découvrir le jeu</a>
                        <Link to={"/ShopPage"}>
                            <a className="btn bd">Boutique</a>
                        </Link>
                    </div>
                </div>
                <div className="image_box">
                    <img src={process.env.PUBLIC_URL + "images/banner_image.png"} alt=""/>
                </div>
            </section>





        </>
    );
}

export default Banner;
