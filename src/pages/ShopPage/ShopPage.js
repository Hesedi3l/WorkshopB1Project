import React from 'react'
import './ShopPage.css'
import {Link} from "react-router-dom";
import BestShopping from "../../Sections/BestShopping/BestShopping";
import Articles from "../../Sections/Articles/Articles";



function ShopPage() {
    return (
        <>
            <section className="shoppage" id="shoppage">
                <h2>Découvre notre boutique</h2>
                <div className="topReturn">
                    <Link to={"/"}>
                        <p>Visiter le site web</p>
                    </Link>
                </div>
                <BestShopping />
                <Articles />
            </section>
        </>
    );
}

export default ShopPage;
