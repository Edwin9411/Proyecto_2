function agregarAlCarrito(img,producto,precio){
    let carrito=JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.push({img,producto,precio})
    localStorage.setItem('carrito',JSON.stringify(carrito))
    alert(`Se añadió el producto ${producto} al carrito`)
    //console.log(carrito)
    }
    
    if (window.location.pathname.includes('carrito.html')) {
        const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        const contenedorCarrito = document.getElementById('cart');
        const contenedorTotal = document.getElementById('total');
    
        if (carrito.length === 0) {
            contenedorCarrito.innerHTML = '<p>El carrito está vacío.</p>';
        } else {
            let total = 0;
    
            // Crear tabla
            const tabla = document.createElement('table');
            tabla.innerHTML = `
    
            <style>
            table {
                width: 40%;
                border-collapse: collapse;
            }
            table, th, td {
                border: 1px solid black;
                font-family: Arial, sans-serif;
                font-size: 12px;
                
            }
            th, td {
                padding: 5px;
                text-align: center;
                word-wrap: break-word; /* Ajusta el texto para que no se desborde */
                word-break: break-all; /* Rompe las palabras largas */
            }
            th {
                background-color: #4CAF50;
                color: white;
            }
            td {
                max-width: 100px; /* Puedes ajustar este ancho según sea necesario */
            }
                img{
                width: 150px;
                }
        </style>
    
                <thead>
                    <tr>
                        <th>Imagen</th>
                        <th>Producto</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                <tbody id="tabla-body"></tbody>
            `;
            contenedorCarrito.appendChild(tabla);
    
            const cuerpoTabla = document.getElementById('tabla-body');
    
            // Llenar la tabla con productos
            carrito.forEach(objeto => {
                const fila = document.createElement('tr');
                fila.innerHTML = `
                    <td><img src="${objeto.img}" alt="producto3"></td>
                    <td>${objeto.producto}</td>
                    <td>$${parseFloat(objeto.precio).toFixed(2)}</td>
                `;
                cuerpoTabla.appendChild(fila);
    
                // Calcular el total
                total += parseFloat(objeto.precio);
            });
    
            // Mostrar el total
            contenedorTotal.textContent = total.toFixed(2);
        }
    }
    