class Pizza{
    constructor (id, tipo, ingredientes, valor){
        this.id = id;
        this.tipo = tipo;
        this.ingredientes = ingredientes;
        this.valor = valor; 
    }
    
}

const pizzas = [
    new Pizza (1, "Muzzarella", ['masa', 'muzza', 'salsa', 'aceitunas'], 500),
    new Pizza (2, "Doble muzza", ['masa', 'doble muzza', 'salsa', 'aceitunas'], 600),
    new Pizza (3, "Especial", ['masa', 'queso', 'salsa', 'jamon', 'aceitunas'], 800),
    new Pizza (4, "Especial Palmito", ['masa','queso','salsa','jamon','palmitos','salsa golf'], 900),
    new Pizza (5, "Peperoni", ['masa', 'queso', 'salsa', 'peperoni'], 1200),
    new Pizza (6, "napolitana", ['masa', 'queso', 'salsa', 'tomate', 'aceitunas'], 590),

]

function impar() {
    let pizzasImpares = [];
    for (i=0; i < pizzas.length; i++){

        if((pizzas[i].id %2)!==0){
            pizzasImpares.push(" " + pizzas[i].tipo)
        }
    }
    console.log("Las pizzas impares son las siguientes: " + pizzasImpares)
}

impar()

function economica() {

    for (i=0; i<pizzas.length; i++){

        if (pizzas[i].valor <= 600){

            console.log(`La pizza "${pizzas[i].tipo}" cuesta menos de 600. Su precio es "$${pizzas[i].valor}"`)
        }
    }
} 

economica() 

function Precios() {
    for(i=0; i<pizzas.length; i++){

        console.log(`La pizza ${pizzas[i].tipo} tiene este precio: ${pizzas[i].valor}`)
    }
}

Precios ()

function Ingredientes (){
    for(i=0; i<pizzas.length; i++){
        console.log(`La pizza ${pizzas[i].tipo} tiene estos ingredientes: ${pizzas[i].ingredientes}`)
    }
}

Ingredientes()