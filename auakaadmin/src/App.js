import './App.css';
import styles from "./App.module.css"
import React from 'react';
import { Tabla } from "./Tabla.js";
function App() {
  return (
  <div>
    <header>
      <h1 className={styles.title}>Publicaciones pendientes</h1>
    </header>
    <main>
      <Tabla/>
    </main>
  </div>
  );
}

export default App;
