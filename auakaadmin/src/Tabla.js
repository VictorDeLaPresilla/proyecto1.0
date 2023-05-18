/*import styles from "./Tabla.module.css"*/
import './Tabla.module.css';
export function Tabla(){
    return(
        <table>
        <caption>Inspección rápida</caption>
        <thead > 
        <tr>
                <th>id</th>
                <th>producto</th>
                <th>detalles</th>
                <th>precio</th>
                <th>entrega</th>
                <th>fotografia</th>
                <th>visible</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    </table>
    );
}
export default Tabla;