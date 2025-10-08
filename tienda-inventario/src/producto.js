export class Producto {
  constructor(nombre, precio, cantidad) {
    this.nombre = nombre
    this.precio = precio
    this.cantidad = cantidad
  }

  mostrarInfo() {
    console.log(`🛍️ ${this.nombre} - Precio: ${this.precio}€ - Cantidad: ${this.cantidad}`)
  }
}
