export default{
    namespaced: true,
    state:{
        carrito: [],
        total: 0
    },
    mutations:{
        add(state, producto){
            state.carrito.push(producto)
            state.total += producto.cantidad*producto.precio
             console.log("Productos añadidos al carrito:", state.carrito)
             console.log("A pagar: ", state.total)
        }
    }
}