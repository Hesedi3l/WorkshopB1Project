import React from 'react'
import './AppStore.css'
import {Link} from 'react-router-dom'

function AppStore() {
    return (
        <>
            <section className="game" id="game">
                <h2>Découvre notre jeu</h2>
                <div className="game_container">
                    <div className="banner_store">
                        <div className="banner_store_image">
                            <img src={process.env.PUBLIC_URL + "images/logo.jpg"} alt=""/>
                        </div>
                        <div className="banner_store_text">
                            <h4>PongPongTong</h4>
                            <h5>Un jeu à la pointe de la technologie</h5>
                            <div className="installation">
                                <Link to={"/"}>
                                    <p>Jouer</p>
                                </Link>
                                <p>Achats intégrés</p>
                            </div>
                            <div className="stats">
                                <div className="note">
                                    <p className="up">
                                        4.8
                                    </p>
                                    <p className="star">⭐ ⭐ ⭐ ⭐ ⭐</p>
                                </div>
                                <div className="classement">
                                    <p className="up">
                                        #1
                                    </p>
                                    <p>Francophone</p>
                                </div>
                                <div className="age">
                                    <p className="up">
                                        +3
                                    </p>
                                    <p>Age</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="game_store_content">
                        <div className="description">
                            <h3>Desc<span>ription :</span></h3>
                            <p>
                                Plongez dans un jeu de Ping Pong amusant et
                                innovant avec des tongs entre amis. Que le meilleur
                                gagne !
                            </p>
                        </div>
                       <div className="galerie">
                           <h3>Gal<span>erie :</span></h3>
                           <div className="galerie_container">
                               <div className="imageGalerie">
                                   <img src={process.env.PUBLIC_URL + "images/logo.jpg"} alt=""/>
                               </div>
                               <div className="imageGalerie">
                                   <img src={process.env.PUBLIC_URL + "images/logo.jpg"} alt=""/>
                               </div>
                               <div className="imageGalerie">
                                   <img src={process.env.PUBLIC_URL + "images/logo.jpg"} alt=""/>
                               </div>
                               <div className="imageGalerie">
                                   <img src={process.env.PUBLIC_URL + "images/logo.jpg"} alt=""/>
                               </div>
                           </div>
                       </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AppStore;
