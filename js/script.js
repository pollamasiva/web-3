let productoActual = '';
let precios = {
    'camisa': 100,
    'pantalon': 200,
    'zapatos': 300
};

function seleccionarProducto(producto) {
    document.querySelectorAll('.producto').forEach(elem => {
        elem.classList.remove('producto-seleccionado');
    });
    
    document.querySelectorAll('.producto-imagen').forEach(img => {
        img.classList.remove('img-ampliada');
    });
    
    productoActual = producto;
    
    document.getElementById('texto-mensaje').textContent = `Has seleccionado ${getNombreProducto(producto)}`;
    document.getElementById('mensaje').className = 'alert alert-success';
    
    document.getElementById(producto).classList.add('producto-seleccionado');
    
    const imagen = document.querySelector(`#${producto} .producto-imagen`);
    imagen.classList.add('img-ampliada');
    
    actualizarCantidad();
    
    document.getElementById('btn-comprar').disabled = false;
}

// Actualizar cant
function actualizarCantidad() {
    const cantidad = parseInt(document.getElementById('cantidad').value);
    const mensaje = document.getElementById('resultado-seleccion');
    
    if (productoActual) {
        const precioUnitario = precios[productoActual];
        const precioTotal = (precioUnitario * cantidad).toFixed(2);
        
        mensaje.innerHTML = `
            <strong>${getNombreProducto(productoActual)}</strong><br>
            Cantidad: ${cantidad} unidad(es)<br>
            Precio unitario: Lps.${precioUnitario}<br>
            <strong class="text-primary">Total: Lps.${precioTotal}</strong>
        `;
    } else {
        mensaje.textContent = `Selecciona un producto primero`;
    }
}

function getNombreProducto(producto) {
    switch(producto) {
        case 'camisa':
            return 'Camiseta Barcelona';
        case 'pantalon':
            return 'Pantalón Levi';
        case 'zapatos':
            return 'Zapatos elegante';
        default:
            return producto;
    }
}


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btn-comprar').addEventListener('click', function() {
        if (productoActual) {
            const cantidad = document.getElementById('cantidad').value;
            const precioUnitario = precios[productoActual];
            const precioTotal = (precioUnitario * cantidad).toFixed(2);
            const nombreProducto = getNombreProducto(productoActual);
            const imagenProducto = document.querySelector(`#${productoActual} .producto-imagen`).src;

            const mensaje = `Hola, me gustaría comprar ${cantidad} ${nombreProducto}. Precio unitario: Lps.${precioUnitario}. Total: Lps.${precioTotal}. Aquí está la imagen: ${imagenProducto}`;
            const numeroWhatsApp = '50488517764'; 
            const enlaceWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
            window.open(enlaceWhatsApp, '_blank');
        }
    });
});