export default{
    namespaced: true,
    state:{
        productos:[{
            nombre: 'Pan de pueblo',
            cantidad: 0,
            precio: 0.80
        },
        {
            nombre: 'Pan de molde',
            cantidad: 0,
            precio: 2.80
        },
        {
            nombre: 'Pan de pipas',
            cantidad: 0,
            precio: 1.80
        }
        
    ]
    },
    mutations:{
        incrementar(state,indice){
            state.productos[indice].cantidad++
        },
        decrementar(state,indice){
            if(state.productos[indice].cantidad>0){
                state.productos[indice].cantidad--
            }
        }
    }
}