import datos from '../components/TablaDa.json';
import { OfertasCard } from "./OfertasCard";
import movies from "../movies.json";
import styles from "./OfertasGrid.module.css";
export function  OfertasGrird(){

    return(
        <ul className={styles.ofertaGrid}>
           {datos.map((data) =>(
            /*<li key={data.id}>
                <img src= {imageurl} alt={data.nombre_prod}></img>
                {data.nombre_prod}
            </li>*/
            <OfertasCard key={data.id} data={data} />
           ))}
        </ul>
    );
}
export default OfertasGrird;