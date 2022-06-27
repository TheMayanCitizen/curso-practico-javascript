/* const precioOriginal = 100;
const descuento = 15;

const precioConDescuento = (100 * ( 100 - descuento )) / 100;
console.log({
    precioOriginal,
    descuento,
    precioConDescuento
}) */

function precioConDescuento( precio, descuento )
{
    const precioReal = (precio * (100 - descuento)) / 100;
    return precioReal;
}

function calculateDiscount()
{
    const inputPrecio = document.getElementById("inputPrecio");
    const precio = inputPrecio.value;

    const inputDescuento = document.getElementById("inputDescuento");
    const descuento = inputDescuento.value;

    const precioDescontado = precioConDescuento( precio, descuento );

    const resultado = document.getElementById("resultadoDiscount");
    resultado.innerText = "El precio con descuento es: $" + precioDescontado;

}