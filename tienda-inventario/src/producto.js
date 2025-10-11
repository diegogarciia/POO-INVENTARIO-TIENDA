export class Producto {

    nombre = "";
    precio = "";
    cantidad = "";

  constructor(nombre, precio, cantidad) {
    if(!nombre) throw Error('Necesitamos el nombre');
    if(!precio) throw Error('Necesitamos el precio');
    if(!cantidad) throw Error('Necesitamos la cantidad');
    
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad  = cantidad;
  }

  mostrarInfo() {
    console.log(`Producto: ${this.nombre} - Precio: ${this.precio}€ - Cantidad: ${this.cantidad} unidades`)
  }
}
