import './App.css';
import styles from "./App.module.css"
import React from 'react';
import { Tabla } from "./Tabla.js";
import { OfertasGrird } from "./OfertasGrid.js";
function App() {
  return (
  <div>
    <header>
      <h1 className={styles.title}>Publicaciones pendientes</h1>
    </header>
    <main>
       <OfertasGrird />
    </main>
  </div>
  );
}

export default App;
