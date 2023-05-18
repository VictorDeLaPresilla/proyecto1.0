let saves = {}; // Variable global para almacenar los estados del checkbox
fetch('https://auakanapi.000webhostapp.com/api.php?request=getAnuncios')
    .then(response => response.json())
    .then(data => {
        const tbody = document.querySelector('tbody');
        data.forEach(producto => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
              <td>${producto.id}</td>
              <td>${producto.nombre_prod}</td>
              <td>${producto.detalles_prod}</td>
              <td>${producto.precio_prod}</td>
              <td>${producto.nombre}</td>
              <td>${producto.celular}</td>
              <td>${producto.entrega_prod}</td>
              <td><img src="${producto.fotografia_prod}" alt="Fotografía del producto"></td>
              <td>
                  <input type="checkbox" ${producto.visible === '1' ? 'checked' : ''} onclick="saveState(this, ${producto.id}, '${producto.nombre_prod}', '${producto.detalles_prod}', '${producto.precio_prod}', '${producto.entrega_prod}', '${producto.fotografia_prod}')">
              </td>`;
            tbody.appendChild(tr); //agrega los datos a la tabla
        });
    })
    .catch(error => console.error(error));
function saveState(checkbox, id, nombre, detalles, precio, entrega, fotografia) {
    saves[id] = checkbox.checked ? '1' : '0'; // Actualizar el estado del checkbox en la variable global
    if(checkbox.checked){
        const offer = {
            id: 12,
            name: nombre,
            details: detalles,
            price: precio,
            enter: entrega,
            picture: fotografia,
            state: saves[id]
        };
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer  c2hhMjU2Ojk1NjpjYTM2NzZlMTQ0YWM0MTE0Y2MzMWZlZGJjMzg0YmVlZDA2YTdjZjYwOTc0YzNhMWMzY2ZiNTI2MWVlODBlYTM3");
        var raw = JSON.stringify({
            "alias": offer.price.toLowerCase().replace(/\s+/g, '-'),
            "articletext": offer.details,
            "catid": offer.id,
            "language": "*",
            "metadesc": "",
            "metakey": "",
            "title": offer.name,
            "state": 1
        });
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow',
        };
        const joomlaUrl = "https://dev.auakan.com/api/index.php/v1/content/articles";
        fetch(joomlaUrl, requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
        console.log(offer); // Imprimir el objeto en la consola
    }else{
        const offer = {
            id: 12,
            name: nombre,
            details: detalles,
            price: precio,
            enter: entrega,
            picture: fotografia,
            state: saves[id]
        };
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer  c2hhMjU2Ojk1NjpjYTM2NzZlMTQ0YWM0MTE0Y2MzMWZlZGJjMzg0YmVlZDA2YTdjZjYwOTc0YzNhMWMzY2ZiNTI2MWVlODBlYTM3");
        var raw = JSON.stringify({
            "catid": offer.id,
            "title": offer.name,
            "state": 0
        });
        var requestOptions = {
         method: 'PATCH',
         headers: myHeaders,
         body: raw,
         redirect: 'follow'
        };
        const joomlaUrl = "https://dev.auakan.com/api/index.php/v1/content/articles";
        fetch(joomlaUrl, requestOptions)
         .then(response => response.text())
         .then(result => console.log(result))
         .catch(error => console.log('error', error));
    }
}