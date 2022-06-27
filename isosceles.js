function calcularAltura( lado1, lado2, base )
{
    if( lado1 === lado2 && lado1 != base )
    {
        const altura = Math.sqrt( ( lado1**2 ) - base**2 / 4 );
        console.log( altura );
    }
    else 
    {
        console.log( "No es un triangulo Isosceles" );
    }
}
calcularAltura( 6, 6, 4 );

function altura(lado1, lado2, base){
    if(lado1 === lado2 && lado1 != base){
        
        const altura = Math.sqrt(lado1**2 - base**2/ 4)
        console.log(altura)
    }
    else{
        alert('no lo se')
    }
}
altura(6, 6, 4)