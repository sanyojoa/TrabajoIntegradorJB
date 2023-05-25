let botonBorrar = document.getElementById("boton-borrar");
let inputs = document.querySelectorAll("input")

botonBorrar.addEventListener('click', ()=>{
    inputs.forEach(input => input.value = '');
});