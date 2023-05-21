import styles from "./OfertasCard.module.css"
import { Link } from "react-router-dom";
import datos from '../components/TablaDa.json';
import { movies } from "../movies.json"
export function OfertasCard({ data }) {
    const imageurl = "https://image.tmdb.org/t/p/w300" + data.fotografia_prod;
    return (
        <li className={styles.ofertaCard}>
            <Link to={/ofertas/ + data.id}>
                <img
                    width={230}
                    height={345}
                    className={styles.ofertaImage}
                    src={imageurl}
                    alt={data.nombre_prod}
                />
                <div>
                    {data.nombre_prod}
                </div>
            </Link>
        </li>
    );
}
export default OfertasCard;