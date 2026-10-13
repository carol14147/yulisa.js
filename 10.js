let totalCompra = 120000;
let esCliente = true;
let descuento = 0;

if (totalCompra > 100000) {
    if (esCliente) {
        descuento = 0.20;
    } else {
        descuento = 0.10;
    }
} else {
    if (esCliente) {
        descuento = 0.05;
    } else {
        descuento = 0;
    }
}

let montoDescuento = totalCompra * descuento;
let totalFinal = totalCompra - montoDescuento;

console.log("Descuento aplicado: " + (descuento * 100) + "%");
console.log("Total final: $" + totalFinal);