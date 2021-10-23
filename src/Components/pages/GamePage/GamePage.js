import React from 'react'
import './GamePage.css'
import {Link} from "react-router-dom";

function GamePage() {
    return (
        <>
            <section className="gamepage" id="gamepage">
                <div className="topReturn">
                    <Link to={"/"}>
                      <p>Visiter le site web</p>
                    </Link>
                </div>
                <div className="textArea">
                    <h2>Start To Play</h2>
                    <p className="desc">
                        Pong Pong Tong nécessite deux joueurs, chacun
                        commandant une tong. Chaque tong est dirigé
                        par la touche [Z] et [S] pour le joueur 1, et [▲] et
                        [▼] pour le joueur 2, répondant à une vitesse
                        variable et aléatoire selon la façon dont le joueur
                        positionne la tong ainsi qu'a la durée de la partie.
                    </p>
                    <div className="touches">
                        <div className="left">
                            <h4>Clavier</h4>
                            <p><span className="yellow">Z</span> Up [Tong One]</p>
                            <p><span className="yellow">S</span> Down [Tong Two]</p>
                            <p><span className="red">▲</span> Up [Tong One]</p>
                            <p><span className="red">▼</span> Down [Tong Two]</p>
                            <p><span className="blue">space</span> Start match</p>
                        </div>
                        <div className="right">
                            <h4>Manette</h4>
                            <p><span className="yellow">Y</span></p>
                            <p><span className="yellow">A</span></p>
                            <p><span className="red">▲</span></p>
                            <p><span className="red">▼</span></p>
                            <p><span className="blue">start</span></p>
                        </div>
                    </div>
                </div>
                <iframe src="https://scratch.mit.edu/projects/572486793/embed" allowTransparency="true" frameBorder="0" scrolling="no" allowFullScreen=""/>
            </section>
        </>
    );
}

export default GamePage;
