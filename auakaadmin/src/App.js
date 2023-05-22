import './App.css';
import styles from "./App.module.css"
import React from 'react';
import { Tabla } from "./components/Tabla.js";
import { OfertasGrird } from "./components/OfertasGrid.js";
import { OfertasDetails } from "./pages/OfertasDetails.js"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LandingPage from './pages/LandingPage';
function App() {
  return (
  <Router>
    <header>
      <Link to="/"><h1 className={styles.title}>Publicaciones pendientes</h1></Link>
    </header>
    <main>
    <Switch>
          <Route exact path="/ofertas/:ofertasId"><OfertasDetails/></Route>
          <Route path="/"><LandingPage/></Route>
        </Switch>
    </main>
  </Router>
  );
}

export default App;
