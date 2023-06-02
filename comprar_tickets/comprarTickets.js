let botonBorrar = document.getElementById("boton-borrar");
let inputs = document.querySelectorAll("input");
let categorias = document.getElementById("Categoria");
let botonResumen = document.getElementById("boton-resumen");


categorias.addEventListener('click', ()=>{
    valorCategorias = categorias.value;
    if(valorCategorias == 1){
        promocion = 0.2;
    }
    if(valorCategorias == 0){
        promocion = 1;
    }
    if(valorCategorias == 2){
        promocion = 0.5;
    }
    if(valorCategorias == 3){
        promocion = 0.85;
    }
})


botonBorrar.addEventListener('click', ()=>{
    inputs.forEach(input => input.value = '');
    document.getElementById('total').innerHTML = 'Total a Pagar: $ ';
});



function cantidadBoletos(valor){
    if(valor < 0){
        alert("La cantidad de boletos no puede ser nulo o menor a 0");
    }
    valor = parseInt(Math.round(valor));
    cantidad = valor;
}


botonResumen.addEventListener('click', ()=>{
    let vacio = 0;
    inputs.forEach( input =>{ if(input.value == ''){
        vacio++;
    }});
    if(vacio > 0){
        alert("Completa los campos vacios");
        document.getElementById('totales').innerHTML = 'Datos insuficientes para realizar la compra';
    }else{
        document.getElementById('total').innerHTML = 'Total a Pagar: $ ' + 200 * promocion * cantidad; 
        document.getElementById('totales').innerHTML = 'Total a Pagar: $ ' + 200 * promocion * cantidad; 
    }
});

function refrescarPagina(){
    location.reload();
}

