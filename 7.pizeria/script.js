function pizzaOven(masa, salsa, queso, ingredientes) {
    var Pizza = {};
    Pizza.masa = masa;
    Pizza.salsa = salsa;
    Pizza.queso = queso;
    Pizza.ingredientes = ingredientes;

    return Pizza;
}

let pizaChicago = pizzaOven('Estilo Chicago', 'Tradicional', ['Mozarella'], ['Peperoni','Salchica']);

let pizaMano = pizzaOven('Lanzada a mano', 'Marinara', ['Mozzarella', 'feta'], ['Champinones', 'mostaza','aceituna']);

let pizaDelgada = pizzaOven("delgada", "alfredo", ["cheddar", "gouda"], ["pollo", "espárragos"]);

let pizaGruesa = pizzaOven("gruesa", "bbq", ["provolone", "asiático"], ["pavo", "piña"]);

let pizaTraditional = pizzaOven("fina", 'tradicional', 'mozarella', ['tomate', 'oregano']);

let pizaPalmito = pizzaOven("fina", "tradicional", ['catupiry', 'mozarella'],'palmito');