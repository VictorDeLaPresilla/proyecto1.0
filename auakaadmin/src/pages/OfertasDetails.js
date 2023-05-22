import data from "../components/TablaDa.json"
import styles from "../components/OfertasDetails.module.css"
export function OfertasDetails() {
    const imageurl = "https://image.tmdb.org/t/p/w300" + data.fotografia_prod;
    return (
        <div className={styles.detailscontainer}>
           <img src={imageurl} alt={data.detalles_prod} />
        </div>
    );
}
export default OfertasDetails;