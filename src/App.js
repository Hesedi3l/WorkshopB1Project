import React from 'react'
import './index.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import IndexPage from "./Components/pages/IndexPage/IndexPage";
import GamePage from "./Components/pages/GamePage/GamePage";
import ShopPage from "./Components/pages/ShopPage/ShopPage";



function App() {
  return (
      <>
        <Router>
            <Switch>
                <Route path="/" exact component={IndexPage}/>
                <Route path="/GamePage" exact component={GamePage}/>
                <Route path="/ShopPage" exact component={ShopPage}/>
            </Switch>
        </Router>
      </>
  );
}

export default App;
