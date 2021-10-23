import React from 'react'
import './Team.css'
import CardsTeam from "./CardsTeam/CardsTeam";


function Team() {
    return (
        <>
            <section className="team" id="team">
                <h2>Meilleur Equipe du monde</h2>
                <div className="container_team">
                    <CardsTeam
                        image={process.env.PUBLIC_URL + "images/banner_image.png"}
                        name={"Bastien T."}
                        role={"Recherhce et création visuel"}
                    />
                    <CardsTeam
                        image={process.env.PUBLIC_URL + "images/banner_image.png"}
                        name={"Mathieu T."}
                        role={"Développement Web"}
                    />
                    <CardsTeam
                        image={process.env.PUBLIC_URL + "images/banner_image.png"}
                        name={"Oudja T."}
                        role={"Direction Artistique"}
                    />
                    <CardsTeam
                        image={process.env.PUBLIC_URL + "images/banner_image.png"}
                        name={"Amyne T."}
                        role={"Recherche et création audio"}
                    />
                    <CardsTeam
                        image={process.env.PUBLIC_URL + "images/banner_image.png"}
                        name={"Justin T."}
                        role={"Développement Jeu Vidéo"}
                    />
                </div>
            </section>
        </>
    );
}

export default Team;
