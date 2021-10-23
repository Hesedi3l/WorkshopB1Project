import React from 'react'
import Banner from "../../Sections/Banner/Banner";
import Header from "../../Sections/Header/Header";
import AppStore from "../../Sections/AppStore/AppStore";
import Project from "../../Sections/Project/Project";
import Team from "../../Sections/Team/Team";

function IndexPage() {
    return (
        <>
            <Header />
            <Banner />
            <AppStore />
            <Project />
            <Team />
        </>
    );
}

export default IndexPage;
