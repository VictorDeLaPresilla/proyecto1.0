import styles from "./OfertasCard.module.css"
import datos from './TablaDa.json';
import { movies } from "./movies.json"
export function OfertasCard({data}){
    const imageurl = "https://image.tmdb.org/t/p/w300" + data.fotografia_prod;
    return(
        <li>
            <img className={styles.ofertasImage} src= {imageurl} alt={data.nombre_prod}></img>
            {data.nombre_prod}
        </li>
    );
}
export default OfertasCard;