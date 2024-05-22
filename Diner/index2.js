const menu = {
  desayuno: {
    titulo: 'desayuno',
    horario: {
      inicio: 800,
      fin: 1200
    },
    menuPrincipal: {
      'huevos': 6,
      'avena': 5,
      'tostadas': 6,
      'arepa': 8
    },
    menuAcompañamiento: [
      'cafe',
      'zumo',
      'frutas',
      'chocolate'
    ]
  },
  almuerzo: {
    titulo: 'almuerzo',
    horario: {
      inicio: 1200,
      fin: 1800
    },
    menuPrincipal: {
      'wrap': 12,
      'salmon': 15,
      'bistec': 12,
      'hamburguesa': 10
    },
    menuAcompañamiento: {
      'ensalada': 2,
      'arroz': 2,
      'pure': 2,
      'salteado': 2
    }
  },
  cena: {
    titulo: 'cena',
    horario: {
      inicio: 1800,
      fin: 2100
    },
    menuPrincipal: {
      'wrap': 14,
      'salmon': 17,
      'bistec': 14,
      'hamburguesa': 12
    },
    menuAcompañamiento: {
      'ensalada': 2,
      'arroz': 2,
      'pure': 2,
      'salteado': 2
    }
  }
};

//Comentarios de camarero

function RandomComentario() {
  const comentario = [
  "Buena eleccion", 
  "Ese plato esta entre mis favoritos",
  "Esa es la especialidad de este Restaurante",
  "Su orden va a estar lista en un momento"
];
const comentarioRandom = Math.floor(Math.random() * comentario.length);
return comentario[comentarioRandom];
}
  

// Obtener la fecha y hora actual
const hora = new Date();


hora.setHours(hora.getHours() - 0);// Sumar o restar para probar con distintas horas // eliminar al terminar

const horaActual = hora.toLocaleTimeString('es-ES', { hour: 'numeric', minute: 'numeric' });
const horaActualNumerica = parseInt(horaActual.replace(':', ''));

// Función para determinar el período actual de comida
function obtenerPeriodoActual(horaNumerica) {
  for (const periodo in menu) {
    const { inicio, fin } = menu[periodo].horario;
    if (horaNumerica >= inicio && horaNumerica <= fin) {
      return periodo;
    }
  }
  return null;
}

// Obtener el período actual de comida (desayuno, almuerzo, cena)
const periodoActual = obtenerPeriodoActual(horaActualNumerica);


if(periodoActual === menu[periodoActual].titulo) {
  alert("Bienvenido al Restaurante");
  ordenFunction();
}  
  else {
  alert("Cerrado, Nuestro horario es de 8:00 AM a 9:00 PM");
}


// Funcion para mustrar el menu con los precios
function mostrarMenu() {
  const menuPeriodoActual = menu[periodoActual].menuPrincipal;
  let menuTexto = `Menú de ${menu[periodoActual].titulo}:\n\n`;

for (const plato in menuPeriodoActual) {
  const nombrePlato = `${plato.charAt(0).toUpperCase()}${plato.slice(1)}`;
  const precioPlato = `€${menuPeriodoActual[plato].toFixed(2)}`;
  menuTexto += `${nombrePlato}: ${precioPlato}\n`;
}

  alert(menuTexto);
}
