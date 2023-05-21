import { useState, useEffect } from 'react';
/*import styles from "./Tabla.module.css"*/
import './Tabla.module.css';
export function Tabla() {
  const [offer, setOffer] = useState([])

  useEffect(() => {
    fetch('https://auakanapi.000webhostapp.com/api.php?request=getAnuncios')
      .then((response) => {
        return response.json()
      })
      .then((offer) => {
        setOffer(offer)
      })
  }, [])
  return (
    <table className="tabla-responsiva">
      <caption>Inspección rápida</caption>
      <thead >
        <tr>

          <th>Producto</th>
          <th>Detalles</th>
          <th>Precio</th>
          <th>Vendedor</th>
          <th>Tipo de entrega</th>
          <th>Fotografía</th>
          <th>Visible</th>
        </tr>
      </thead>
      <tbody>
        {offer.map(art => {
          return (
            <tr key={art.id}>
              <td>{art.nombre_prod}</td>
              <td>{art.detalles_prod}</td>
              <td>{art.precio_prod}</td>
              <td>{art.nombre}</td>
              <td>{art.entrega_prod}</td>
              <td>{art.fotografia_prod}</td>
              <td>
                {/* Botón para publicar oferta */}
                <button onClick={() => handlePublicar(art.id)}>Publicar oferta</button>
                {/* Botón para retirar oferta */}
                <button onClick={() => handleRetirar(art.id)}>Retirar oferta</button>

              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
export default Tabla;