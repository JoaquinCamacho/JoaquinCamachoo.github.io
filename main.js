const productos = ["1. Vino", "2. Gin", "3. Vodka", "4. Whisky", "5. Ron"];
let bandera = true;
let total = 0;
let edadVerificada = false;

// Inicio del sitio web 
function iniciarSitio() {
    if (confirm("Si quieres entrar a este Sitio Web debes aceptar los términos y condiciones")) {
        const nombre = prompt("Bienvenido a nuestra tienda online, ¿cómo te llamas?");
        alert("Bienvenido" + " " + nombre);
        iniciarCompra();
    } else {
        alert("Debes aceptar los términos y condiciones para continuar.");
    }
}

function verificarEdad() {
    if (!edadVerificada) { // Verifica la edad solo si no ha sido verificada antes
        const edad = parseInt(prompt("¿Cuántos años tenés?"));
        if (edad < 18) {
            alert("No podés pasar.");
            bandera = false;
        } else {
            alert("Podés pasar.");
            edadVerificada = true; // Marca que la edad ya fue verificada
            mostrarMenu();
        }
    } else {
        mostrarMenu(); // Si la edad ya fue verificada, solo muestra el menú
    }
}

function comprasDelUsuario(precio) {
    total += precio;
}

function productosComprados(numero) {
    switch (numero) {
        case 1:
            comprasDelUsuario(5000);
            break;
        case 2:
            comprasDelUsuario(4000); 
            break;
        case 3:
            comprasDelUsuario(3000); 
            break;
        case 4:
            comprasDelUsuario(7000); 
            break;
        case 5:
            comprasDelUsuario(2000); 
            break;
        default:
            alert("Acordate de usar los números del (1-5)");
            return;
    }
    bandera = confirm("¿Quieres seguir comprando?");
}

function mostrarMenu() {
    const menu = "Si quieres alguno de estos productos que tenemos disponible, selecciona del (1-5): \n" + productos.join("\n");
    const seleccion = parseInt(prompt(menu));
    productosComprados(seleccion);
}

function iniciarCompra() {
    while (bandera) {
        verificarEdad();
    }
    alert("El total de tu compra es: $" + total + ", " + "Muchas gracias por la compra");
}


iniciarSitio();

