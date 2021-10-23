import React from 'react'
import './Header.css'


function Header() {
    return (
        <>
            <header>
               <div className="logo">
                   <img src={process.env.PUBLIC_URL + "images/instagram.png"} alt=""/>
                   <h2>PongPongTong</h2>
               </div>
               <div className="menu">
                   <ul>
                       <li><a href="#home">Home</a></li>
                       <li><a href="#game">Game</a></li>
                       <li><a href="#project">Project</a></li>
                       <li><a href="#team">Team</a></li>
                   </ul>
               </div>
                <div className="reseaux">
                    <img src={process.env.PUBLIC_URL + "images/youtube.png"} alt=""/>
                    <img src={process.env.PUBLIC_URL + "images/instagram.png"} alt=""/>
                    <img src={process.env.PUBLIC_URL + "images/twitter.png"} alt=""/>
                </div>
            </header>
        </>
    );
}

export default Header;
