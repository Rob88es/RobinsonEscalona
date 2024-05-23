const menuDesayuno = {
  titulo: 'desayuno',
  horario: { inicio: 800, fin: 1200 },
  principal: [
    { comida: 'huevos', descripcion: 'huevos revueltos', precio: 6 },
    { comida: 'avena', descripcion: 'avena con frutas', precio: 5 },
    { comida: 'tostadas', descripcion: 'tostadas francesas', precio: 6 },
    { comida: 'arepa', descripcion: 'arepa rellena', precio: 7 }
  ],
  acompañamiento: [
    { comida: 'frutas', precio: 2 },
    { comida: 'pan', precio: 1 }
  ],
  bebida: [
    { comida: 'zumo', precio: 2 },
    { comida: 'cafe', precio: 2 }
  ]
};

const menuAlmuerzo = {
  titulo: 'almuerzo',
  horario: { inicio: 1200, fin: 1800 },
  principal: [
    { comida: 'wrap', descripcion: 'wrap de pollo', precio: 9 },
    { comida: 'salmon', descripcion: 'salmon al horno', precio: 10 },
    { comida: 'bistec', descripcion: 'bistec a la plancha', precio: 9 },
    { comida: 'hamburguesa', descripcion: 'hamburguesa casera', precio: 8 }
  ],
  acompañamiento: [
    { comida: 'arroz', precio: 2 },
    { comida: 'pure', precio: 2 }
  ],
  bebida: [
    { comida: 'vino', precio: 2 },
    { comida: 'agua', precio: 1 }
  ]
};

const menuCena = {
  titulo: 'cena',
  horario: { inicio: 1800, fin: 2100 },
  principal: [
    { comida: 'wrap', descripcion: 'wrap de pollo', precio: 11 },
    { comida: 'salmon', descripcion: 'salmon al horno', precio: 12 },
    { comida: 'bistec', descripcion: 'bistec a la plancha', precio: 11 },
    { comida: 'hamburguesa', descripcion: 'hamburguesa casera', precio: 10 }
  ],
  acompañamiento: [
    { comida: 'arroz', precio: 3 },
    { comida: 'pure', precio: 3 }
  ],
  bebida: [
    { comida: 'vino', precio: 3 },
    { comida: 'agua', precio: 2 }
  ]
};

alert('Bienvenido\n\nRestaurante pruebalo todo');

let pedidoDelCliente = []; // Aqui se almacena la comida y precio seleccionado

let horaActual = prompt("Nuestro horario es de 8:00 hasta las 21:00.\n\nPor favor, ingrese la hora en formato HH:MM");
let pedirHora = horario(horaActual);


function horario(horaMin) {
  const [hora, minuto] = horaMin.split(':').map(Number);
  const tiempo = hora * 100 + minuto;

  if (tiempo >= menuDesayuno.horario.inicio && tiempo < menuDesayuno.horario.fin) {
    alert("¡Hora de Desayunar!");
    mostrarMenu(menuDesayuno);
    const principal = primeraEleccion(menuDesayuno);
    alert(RandomComentario());
    const acompañamiento = segundaEleccion(menuDesayuno);
    const bebida = terceraEleccion(menuDesayuno);
    pedidoDelCliente.push({ principal, acompañamiento, bebida });
    mostrarCalcularPedido();
    alert(RandomComentario2());
    
  } else if (tiempo >= menuAlmuerzo.horario.inicio && tiempo < menuAlmuerzo.horario.fin) {
    alert("¡Hora del Almuerzo!");
    mostrarMenu(menuAlmuerzo);
    const principal = primeraEleccion(menuAlmuerzo);
    alert(RandomComentario());
    const acompañamiento = segundaEleccion(menuAlmuerzo);
    const bebida = terceraEleccion(menuAlmuerzo);
    pedidoDelCliente.push({ principal, acompañamiento, bebida });
    mostrarCalcularPedido();
    alert(RandomComentario2());
    
  } else if (tiempo >= menuCena.horario.inicio && tiempo < menuCena.horario.fin) {
    alert("¡Hora de Cenar!");
    mostrarMenu(menuCena);
    const principal = primeraEleccion(menuCena);
    alert(RandomComentario());
    const acompañamiento = segundaEleccion(menuCena);
    const bebida = terceraEleccion(menuCena);
    pedidoDelCliente.push({ principal, acompañamiento, bebida });
    mostrarCalcularPedido();
    alert(RandomComentario2());
    
  } else {
    alert('Estamos cerrados, por favor introduzca una hora válida');
    let horaActual = prompt("Nuestro horario es de 8:00 hasta las 21:00.\n\nPor favor, ingrese la hora en formato HH:MM");
    horario(horaActual);
  }
}

// mostrar el memu

function mostrarMenu(menu) {
  let mensajeAlerta = `Menú ${menu.titulo}\n\n`;
  mensajeAlerta += "Platos principales:\n";
  
  for (const plato of Object.values(menu.principal)) {
    mensajeAlerta += `- ${plato.comida} €${plato.precio.toFixed(2)}\n`;
  }
  mensajeAlerta += "\nAcompañamientos:\n";
  for (const acomp of Object.values(menu.acompañamiento)) {
    mensajeAlerta += `- ${acomp.comida} €${acomp.precio.toFixed(2)}\n`;
  }
  mensajeAlerta += "\nBebidas:\n";
  for (const bebida of Object.values(menu.bebida)) {
    mensajeAlerta += `- ${bebida.comida} €${bebida.precio.toFixed(2)}\n`;
  }
  alert(mensajeAlerta);
}

// Funciones para que el cliente elija el menu

function primeraEleccion(menu) {
  let principal = {};
  
  while (!principal.comida) {
    let respuesta = prompt(`¿Qué desea ordenar del menú principal? (Ingrese el nombre del plato)\n${menu.principal.map(plato => plato.comida.charAt(0).toUpperCase() + plato.comida.slice(1)).join('\n')}`).toLowerCase();
    principal = menu.principal.find(plato => plato.comida === respuesta);
    if (!principal) {
      alert('Plato no encontrado. Intente nuevamente.');
    }
  }
  return principal;
}

function segundaEleccion(menu) {
  let acompañamiento = {};
  
  while (!acompañamiento.comida) {
    let respuesta = prompt(`¿Qué acompañamiento desea? (Ingrese el nombre del acompañamiento)\n${menu.acompañamiento.map(acomp => acomp.comida.charAt(0).toUpperCase() + acomp.comida.slice(1)).join('\n')}`).toLowerCase();
    acompañamiento = menu.acompañamiento.find(acomp => acomp.comida === respuesta);
    if (!acompañamiento) {
      alert('Acompañamiento no encontrado. Intente nuevamente.');
    }
  }
  return acompañamiento;
}

function terceraEleccion(menu) {
  let bebida = {};
  
  while (!bebida.comida) {
    let respuesta = prompt(`¿Qué bebida desea? (Ingrese el nombre de la bebida)\n${menu.bebida.map(beb => beb.comida.charAt(0).toUpperCase() + beb.comida.slice(1)).join('\n')}`).toLowerCase();
    bebida = menu.bebida.find(beb => beb.comida === respuesta);
    if (!bebida) {
      alert('Bebida no encontrada. Intente nuevamente.');
    }
  }
  return bebida;
}

//funcion para usar los datos recogidos en 'pedidoDelCliente' sumarlos y mostrar al cliente el total

function mostrarCalcularPedido() {
  let mensaje = "Resumen del pedido:\n\n";
  let total = 0;

  const pedido = pedidoDelCliente[0]; 
  mensaje += `- Principal: ${pedido.principal.comida} €${pedido.principal.precio.toFixed(2)}\n`;
  mensaje += `- Acompañamiento: ${pedido.acompañamiento.comida} €${pedido.acompañamiento.precio.toFixed(2)}\n`;
  mensaje += `- Bebida: ${pedido.bebida.comida} €${pedido.bebida.precio.toFixed(2)}\n\n`;

  total += pedido.principal.precio + pedido.acompañamiento.precio + pedido.bebida.precio;

  mensaje += `Total: €${total.toFixed(2)}`;
  alert(mensaje);
}


// Funciones de comendarios Randon

function RandomComentario() {
  const comentario = [
    "Buena elección", 
    "Ese plato está entre mis favoritos",
    "Esa es la especialidad de este Restaurante"
  ];
  const comentarioRandom = Math.floor(Math.random() * comentario.length);
  return comentario[comentarioRandom];
}

function RandomComentario2() {
  const comentario = [
    "Gracias por su compra!", 
    "Su pedido estara listo muy pronto!",
    "Gracias por su orden, Que tenga un buen provecho!",
    "Gracias por su orden!"
  ];
  const comentarioRandom = Math.floor(Math.random() * comentario.length);
  return comentario[comentarioRandom];
}
