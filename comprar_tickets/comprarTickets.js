let botonBorrar = document.getElementById("boton-borrar");
let inputs = document.querySelectorAll("input");
let categorias = document.getElementById("Categoria");

promocion = 1;
categorias.addEventListener('click', ()=>{
    valorCategorias = categorias.value;
    if(valorCategorias == 1){
        promocion = 0.2;
        return promocion;
    }
    if(valorCategorias == 0){
        promocion = 1;
        return promocion;
    }
    if(valorCategorias == 2){
        promocion = 0.5;
        return promocion;
    }
    if(valorCategorias == 3){
        promocion = 0.85;
        return promocion;
    }
})


botonBorrar.addEventListener('click', ()=>{
    inputs.forEach(input => input.value = '');
});



function cantidadBoletos(valor){
    valor = parseInt(Math.round(valor))
    document.getElementById('total').innerHTML = 'Total a Pagar: $ ' + 200 * valor * promocion;
}

