import { Producto } from './producto.js'

export class Inventario {
  constructor() {
    this.productos = []
  }

  agregarProducto(producto) {
    this.productos.push(producto)
    console.log(`✅ Producto "${producto.nombre}" agregado al inventario.`)
  }

  eliminarProducto(nombre) {
    const indice = this.productos.findIndex(p => p.nombre === nombre)
    if (indice !== -1) {
      this.productos.splice(indice, 1)
      console.log(`🗑️ Producto "${nombre}" eliminado.`)
    } else {
      console.log(`⚠️ No se encontró el producto "${nombre}".`)
    }
  }

  calcularValorTotal() {
    let total = 0
    for (const p of this.productos) {
      total += p.precio * p.cantidad
    }
    console.log(`💰 Valor total del inventario: ${total} €`)
  }

  aplicarDescuento(porcentaje) {
    for (const p of this.productos) {
      p.precio = p.precio - (p.precio * (porcentaje / 100))
    }
    console.log(`📉 Se aplicó un ${porcentaje}% de descuento a todos los productos.`)
  }

  mostrarProductos() {
    console.log("📦 Inventario actual:")
    if (this.productos.length === 0) {
      console.log("No hay productos en el inventario.")
    } else {
      for (const p of this.productos) {
        p.mostrarInfo()
      }
    }
  }
}
