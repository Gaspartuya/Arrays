function recorrerProductos() {

    for (let i=0; i < productos.length; i++ ){
    console.log(productos[i])
}
}


function agregarProducto() {

    let nuevoProducto = prompt("ingresa un nuevo porducto:")
    productos.push(nuevoProducto)
    console.table(productos)
}