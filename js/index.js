menu();

function gracias() {
    alert("Gracias por su compra, vuelva pronto!");
}

function productos() {
    let salir = false
    do {
        console.clear()
        console.log("\tProductos Nike Disponibles:\n1. Botines.\n2. Zapatillas.\n3. Remeras.\n0. Volver al menú principal")
        let numero = parseInt(prompt("Seleccione una opción"))
        // Botines
        if (numero === 1) {
            let volverAlMenu = false
            do {
                console.clear()
                console.log("\tBotines:\n- Phantom.\n- Mercurial.\n- Tiempo.")
                volverAlMenu = confirm("¿Desea volver al menú?")
            } while (!volverAlMenu)
        // Zapatillas
        } else if (numero === 2) {
            let volverAlMenu = false
            do {
                console.clear()
                console.log("\tZapatillas:\n- Clasicas.\n- StreetWear. \n- Zapatillas Deportivas.")
                volverAlMenu = confirm("¿Desea volver al menú?")
            } while (!volverAlMenu)
        // Remeras
        } else if (numero === 3) {
            let volverAlMenu = false
            do {
                console.clear();
                console.log("\tRemeras:\n- Remeras Deportivas.\n- Slim Fit.\n- Oversize.\n- Camisetas.\n- Jordan")
                volverAlMenu = confirm("¿Desea volver al menú?")
            } while (!volverAlMenu)
        } else if (numero === 0) {
            return; // Volver al menú anterior
        } else {
            alert("Opción no válida. Intente nuevamente.")
        }
    } while (!salir)
}

function canje() {
    let salir = false
    do {
        console.clear()
        console.log("\tPartnership:\n¿Partnership? ¿Qué es? \nEl Partnership es un acuerdo entre Nike y creadores de contenido para trabajar juntos y alcanzar objetivos comunes, creación de contenido en redes, publicidad, beneficios moneterarios, entre otros.")
        salir = confirm("¿Desea volver al menú?")
    } while (!salir);
}

function compra() {
    const carrito = [];
    let terminar = false;
    console.clear();
    console.log("\tPor favor, llene su carrito ;)");

    do {
        let producto = prompt("Ingrese el nombre del producto que desea comprar: ");
        if (producto) {
            const productoLower = producto.toLowerCase();
            let esValido = false;
            if (productoLower === "phantom" || 
                productoLower === "mercurial" || 
                productoLower === "tiempo" || 
                productoLower === "clasicas" || 
                productoLower === "streetwear" || 
                productoLower === "zapatillas deportivas" || 
                productoLower === "remeras deportivas" || 
                productoLower === "slim fit" || 
                productoLower === "oversize" || 
                productoLower === "camisetas" || 
                productoLower === "jordan") {
                esValido = true;
            }

            if (esValido) {
                carrito.push(productoLower);
                console.log("Producto agregado al carrito:", producto);
                console.log("Carrito actual:", carrito);
            } else {
                console.log("Producto no válido. Por favor, ingrese un producto válido.");
            }
        }
        terminar = confirm("¿Desea terminar su carrito?");
        console.log("Su carrito de compras final contiene:", carrito);
    } while (!terminar);

}


function menu() {
    do {
        console.clear();
        console.log("\tMenú de Opciones.\n1. Productos Disponibles.\n2. Partnership.\n3. Realizar Compra.\n0. Finalizar.");
        const numero = parseInt(prompt("Seleccione una opción"));
        //Menu principal
        switch (numero) {
            case 1:
                productos();
                break;
            case 2:
                canje();
                break;
            case 3:
                compra();
                break;
            case 0:
                gracias();
                return;
            default:
                alert("Por favor seleccione una opción");
                break;
        }
    } while (true);
}