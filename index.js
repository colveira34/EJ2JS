const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

/***PIZZAS CON ID IMPAR PUNTO A */

const pIdImpar = pizzas.filter((pizzas) => {
  if (pizzas.id % 2 > 0) {
    return pizzas.id;
  }
});

for (let idimpar of pIdImpar) {
  console.log(`El id ${idimpar.id} de la ${idimpar.nombre} es impar`);
}

/**Responder: ¿Hay alguna pizza que valga menos de $600? */
console.log("=================================================");
console.log("PUNTO B: ¿Hay alguna pizza que valga menos de $600?");

const nombre = pizzas.map((pizza) => {
  if (pizza.precio < 600) {
    return pizza.nombre;
  }
});

for (let nom of nombre) {
  if (nom) {
    console.log(`Nombre de pizaa que vale menos de 600$: ${nom}`);
  }
}

console.log("============================================");
console.log("PUNTO C: El nombre de cada pizza con su respectivo precio.");

const nomprec = pizzas.map((pizza) => {
  return pizza.nombre + ":" + pizza.precio;
});

console.log("Nombre de las pizzas con sus precios");
for (let n of nomprec) {
  console.log(n);
}

console.log("============================================");
console.log(
  "Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza que se esta recorriendo)"
);
console.log(
  "Ayuda: van a tener que realizar dos recorridos, ya que cada pizza del array de pizzas tiene una propiedad Ingredientes cuyo valor es un array con ingredientes"
);

for (let i = 0; i < pizzas.length; i++) {
  for (let k = 0; k <6; k++) {
    if (i == k) {
      console.log(pizzas[i].nombre);
      console.log(pizzas[k].ingredientes);
    }
  }
}
