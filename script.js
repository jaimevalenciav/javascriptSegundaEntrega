let wines = [
    {id: 1, nombreVino: "Gran CS", variedad: "Cabernet Sauvignon", color: "tinto", valor: 4500 },
    {id: 2, nombreVino: "Syrio", variedad: "Syrah", color: "tinto", valor: 2800},
    {id: 3, nombreVino: "Char", variedad: "Chardonnay", color: "blanco", valor: 3400},
    {id: 4, nombreVino: "Pizarra", variedad: "Pinot Noir", color: "tinto", valor: 4200},
    {id: 5, nombreVino: "Delicado", variedad: "Sauvignon Blanc", color: "blanco", valor: 5000},
    {id: 6, nombreVino: "Pirata", variedad: "Merlot", color: "tinto", valor: 3900},
    {id: 7, nombreVino: "Eme", variedad: "Mouvedre", color: "tinto", valor: 4100},
    {id: 8, nombreVino: "Miau", variedad: "Pais", color: "tinto", valor: 3900},
    {id: 9, nombreVino: "Late Harvest", variedad: "Chardonnay", color: "blanco", valor: 6780}
]

let vinos = wines.map(vino => {
    return new Vino(vino.id, vino.nombreVino, vino.variedad, vino.color, vino.valor)
})
let carritoVinos = []

consulta = "Seleccione una opción a realizar: \n0: para salir\n1: para mostrar todos los vinos\n2: mostrar solo vinos tintos\n3: mostrar solo vinos blancos\n4: mostrar vinos entre $0 y $4.000\n5: mostrar vinos entre $4000 y $10.000\n6: Agregar vinos al carro de compra\n7: Ver mi carrito de compra"
let opcion
do{
    opcion = Number(prompt(consulta)) 
    if(opcion === 1){
        let listaVinos= vinos.map(vino =>"MARCA: " + vino.nombreVino + " VARIEDAD: " + vino.variedad + " - "  + " PRECIO: $" + vino.valor).join("\n")
        alert(listaVinos)
    }else if(opcion === 2){
        let filtradosTinto = vinos.filter(vino => vino.color == 'tinto')
        let filtrados =  "LISTA DE VINOS TINTOS:\n" + filtradosTinto.map(filtrado =>"MARCA: " + filtrado.nombreVino + " VARIEDAD: " + filtrado.variedad + " - "  + " PRECIO: $" + filtrado.valor).join("\n")
        alert(filtrados)
    }else if(opcion === 3){
        let filtradosBlanco = vinos.filter(vino => vino.color == 'blanco')
        let filtrados =  "LISTA DE VINOS BLANCOS:\n" + filtradosBlanco.map(filtrado =>"MARCA: " + filtrado.nombreVino + " VARIEDAD: " + filtrado.variedad + " - "  + " PRECIO: $" + filtrado.valor).join("\n")
        alert(filtrados)
    }else if(opcion === 4){
        let filtradosPrecioMenor4000 = vinos.filter(vino => vino.valor >= 0 && vino.valor <= 4000)
        let filtrados = "LISTA DE VINOS VALOR MENOR A 4.000:\n" + filtradosPrecioMenor4000.map(filtrado =>"MARCA: " + filtrado.nombreVino + " VARIEDAD: " + filtrado.variedad + " - "  + " PRECIO: $" + filtrado.valor).join("\n")
        alert(filtrados)
    }else if(opcion === 5){
        let filtradosPrecioMayor4000 = vinos.filter(vino => vino.valor > 4000 && vino.valor <= 10000)
        let filtrados = "LISTA DE VINOS VALOR MAYOR A 4.000:\n" +filtradosPrecioMayor4000.map(filtrado =>"MARCA: " + filtrado.nombreVino + " VARIEDAD: " + filtrado.variedad + " - "  + " PRECIO: $" + filtrado.valor).join("\n")
        alert(filtrados)
    }else if(opcion === 6){
        let listaVinos = "Seleccione número de item para agregar:\n0: para salir\n" + vinos.map(vino => vino.id + ": Marca: " + vino.nombreVino + " - " + vino.variedad + " - " + " PRECIO: $" + vino.valor).join("\n")
        let idVino        
        do{               
            idVino = Number(prompt(listaVinos))
            let idVinoIngresado = vinos.find(vino => vino.id === idVino)
            if(idVinoIngresado){
                let ubicacionVino = carritoVinos.findIndex(vino => vino.id === idVinoIngresado.id)
                if (ubicacionVino != -1){                    
                    carritoVinos[ubicacionVino].cantidadUnidades++
                    carritoVinos[ubicacionVino].subtotal = carritoVinos[ubicacionVino].valorUnidad * carritoVinos[ubicacionVino].cantidadUnidades
                    alert("Producto agregado al carrito")
                }else{                    
                    carritoVinos.push({                        
                        id: idVinoIngresado.id,
                        nombreVino: idVinoIngresado.nombreVino,
                        variedad: idVinoIngresado.variedad,                        
                        cantidadUnidades: 1,
                        valorUnidad: idVinoIngresado.valor,
                        subtotal: idVinoIngresado.valor
                    })
                    alert("Producto agregado al carrito")                 
                }                
            }                                       
        }while (idVino != 0)             
    }else if(opcion === 7){
        let carrito = carritoVinos.map(vino => vino.id + ": Marca: " + vino.nombreVino + " - " + vino.variedad + " - " + " CANT.: " + vino.cantidadUnidades + " SUBTOTAL: $" + vino.subtotal).join("\n")
        alert(carrito)
    }
}while (opcion != 0)


