import React from 'react'
import './Project.css'
import CardsProject from "./CardsProject/CardsProject";

function Project() {
    return (
        <>
            <section className="project" id="project">
                <h2>Notre Projet</h2>
                <div className="container_cards">
                    <CardsProject
                        title={"Jour 01"}
                        list1={"Je suis un text"}
                        list2={"Je suis un text"}
                        list3={"Je suis un text"}
                        list4={"Je suis un text"}
                    />
                    <CardsProject
                        title={"Jour 01"}
                        list1={"Je suis un text"}
                        list2={"Je suis un text"}
                        list3={"Je suis un text"}
                        list4={"Je suis un text"}
                    />
                    <CardsProject
                        title={"Jour 01"}
                        list1={"Je suis un text"}
                        list2={"Je suis un text"}
                        list3={"Je suis un text"}
                        list4={"Je suis un text"}
                    />
                    <CardsProject
                        title={"Jour 01"}
                        list1={"Je suis un text"}
                        list2={"Je suis un text"}
                        list3={"Je suis un text"}
                        list4={"Je suis un text"}
                    />
                    <CardsProject
                        title={"Jour 01"}
                        list1={"Je suis un text"}
                        list2={"Je suis un text"}
                        list3={"Je suis un text"}
                        list4={"Je suis un text"}
                    />
                    <CardsProject
                        title={"Jour 01"}
                        list1={"Je suis un text"}
                        list2={"Je suis un text"}
                        list3={"Je suis un text"}
                        list4={"Je suis un text"}
                    />
                </div>
            </section>
        </>
    );
}

export default Project;
