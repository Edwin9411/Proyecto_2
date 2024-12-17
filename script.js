function agregarAlCarrito(producto,precio){
let carrito=JSON.parse(localStorage.getItem('carrito')) || [];
carrito.push({producto,precio})
localStorage.setItem('carrito',JSON.stringify(carrito))
alert(`Se añadió el producto ${producto} al carrito`)
//console.log(carrito)
}

if (window.location.pathname.includes('carrito.html')) {
    const carrito=JSON.parse(localStorage.getItem('carrito')) || [];
    const contenedorCarrito=document.getElementById('cart');
    const contenedorTotal=document.getElementById('total');
    if (carrito.length===0) {
        contenedorCarrito='<p>El carrito está vacío.</p>';
    } else {
        let total=0;
        carrito.forEach(objeto=>{
            const elementoProducto=document.createElement('p')
            elementoProducto.textContent=`${objeto.producto} - ${objeto.precio}`;
            contenedorCarrito.appendChild(elementoProducto)
            total+=parseFloat(objeto.precio);
        });
        contenedorTotal.textContent=total;
    }
}