import React from 'react'
import './BestShopping.css'



function BestShopping() {
    return (
        <>
          <div className="bestshopping">
              <div className="imageBox_shop">
                  <img src={process.env.PUBLIC_URL + "images/logo.jpg"} alt=""/>
              </div>
              <div className="textBox">
                  <h3>T-Shirt PPT</h3>
                  <h4>Designed by Bastien T.</h4>
                  <p>
                      C'est le t-shirt basique par excellence, simple et efficace, qui trouve
                      forcément sa place dans votre dressing de gamer ou bien dans la
                      vie de tous les jours. <br/>
                      Col rond, manches courtes, en pur coton tout doux. C'est un t-shirt
                      comme on les aime, avec un excellent rapport qualité/prix
                  </p>
                  <div className="price">
                      <p>19.99€</p>
                      <a href="" className="button">Acheter</a>
                  </div>
              </div>
          </div>
        </>
    );
}

export default BestShopping;
