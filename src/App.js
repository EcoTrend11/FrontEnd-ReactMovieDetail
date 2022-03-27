

import styles from "./App.module.css"
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MovieDetail from './pages/MoviesDetail';
import LandingPage from './pages/LandingPage';


function App() {
  return (
    <Router>
        <Link to="/">
          <header className={styles.title}>
            Movies App
          </header>
          <br/>
        </Link>
        <main>
        <Switch>
          <Route exact path="/movieDetail/:movieId"><MovieDetail/></Route>
          <Route path="/"><LandingPage/></Route> 
        </Switch>
        </main>
    </Router>
  );
}


export default App;
