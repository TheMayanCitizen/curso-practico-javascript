/* //Código del cuadrado
console.group("Cuadrados");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado es: " + areaCuadrado + "cm2");
console.groupEnd();

//Código del triángulo
console.group("Triángulo")
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

console.log(`Los lados del triangulo miden: ${ladoTriangulo1}cm, ${ladoTriangulo2}cm y ${baseTriangulo}cm`);
console.log(`La altura del triangulo es ${alturaTriangulo}cm`);

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log(`El perímetro del triángulo es: ${perimetroTriangulo}cm`);

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log(`El área del triángulo es: ${areaTriangulo}cm2`);
console.groupEnd();

//Código del círculo
console.group("Círculo");
const diametroCirculo = 10;
const radioCirculo = diametroCirculo / 2;
const pi = 3.1416;

console.log(`El diámetro del circulo es ${diametroCirculo}cm y su radio es ${radioCirculo}`)

const perimetroCirculo = diametroCirculo * pi;
console.log(`EL perímetro del círculo es: ${perimetroCirculo}cm`);

const areaCirculo = pi * (radioCirculo^2)
console.log(`El área del circulo es ${areaCirculo}cm2`);
console.groupEnd();

console.group("Metodo de platzi");

//Radio
const rCirculo = 4;
console.log(`El radio del circulo es ${rCirculo}cm`);
//Diámetro
const dCirculo = rCirculo * 2;
console.log(`El diametro del circulo es ${dCirculo}cm`);

//PI
const PI = Math.PI;
console.log(`El PI: ${PI}`);

//Circunferencia
const circunferenciaCirculo = dCirculo * PI;
console.log(`La circunferencia del circulo es ${circunferenciaCirculo}cm`);

//Área
const aCirculo = (rCirculo^2) * PI;
console.log(`El área del circulo es ${aCirculo}cm2`);

console.groupEnd(); */

//Codigo del cuadrado
console.group("Cuadrado");
function perimetroCuadrado( lado )
{
    return lado * 4;
}

function areaCuadrado( lado )
{
    return lado * lado;
}
console.groupEnd();

//Codigo del triangulo
console.group("Triangulo");
function perimetroTriangulo( lado1, lado2, base )
{
    return lado1 + lado2 + base;
}

function areaTriangulo( base, altura )
{
    return ( base * altura ) / 2;
}
console.groupEnd();

//Codigo del circulo
console.group("Circulo");
function diametroCirculo( radio )
{
    return radio * 2;
}

function circunferenciaCirculo( radio )
{
    const diametro = diametroCirculo( radio );
    return diametro * Math.PI;
}

function areaCirculo( radio )
{
    return ( radio * radio ) * Math.PI;
}
console.groupEnd();

//Aqui interactuamos con HTML

function calcularPerimetroCuadrado()
{
    const input = document.getElementById("inputcuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado()
{
    const input = document.getElementById("inputcuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

function calcularPerimetroTriangulo()
{
    const inputBase = document.getElementById("inputTrianguloBase");
    const base = Number(inputBase.value);

    const inputLado1 = document.getElementById("inputTrianguloLado1");
    const ladoUno = Number(inputLado1.value);

    const inputLado2 = document.getElementById("inputTrianguloLado2");
    const ladoDos = Number(inputLado2.value);

    const perimetro = perimetroTriangulo(ladoUno,ladoDos,base);
    alert(perimetro);
}

function calcularAreaTriangulo()
{
    const inputBase = document.getElementById("inputTrianguloBase");
    const base = inputBase.value;

    const inputAltura = document.getElementById("inputTrianguloAltura");
    const altura = inputAltura.value;

    const area = areaTriangulo( base, altura);
    alert(area);
}

function calcularCircunferencia()
{
    const inputRadio = document.getElementById("inputCirculoRadio");
    const radio = inputRadio.value;

    const circunferencia = circunferenciaCirculo( radio );
    alert( circunferencia );
}

function calcularAreaCirculo()
{
    const inputRadio = document.getElementById("inputCirculoRadio");
    const radio = inputRadio.value;

    const area = areaCirculo( radio );
    alert( area );
}