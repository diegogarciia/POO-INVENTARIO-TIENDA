import { Producto } from './producto.js'
import { Inventario } from './inventario.js'

const inventario = new Inventario()

const prod1 = new Producto("Camiseta", 20, 10)
const prod2 = new Producto("Pantalón", 35, 5)
const prod3 = new Producto("Zapatillas", 50, 3)

inventario.agregarProducto(prod1)
inventario.agregarProducto(prod2)
inventario.agregarProducto(prod3)

inventario.mostrarProductos()

inventario.calcularValorTotal()

inventario.aplicarDescuento(10)

inventario.mostrarProductos()

inventario.eliminarProducto("Pantalón")

inventario.mostrarProductos()

inventario.calcularValorTotal()