const menu = {
    desayuno: {
      titulo: 'Desayuno',
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
      titulo: 'Almuerzo',
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
      menuAcompañamiento: [
        'ensalada',
        'arroz',
        'pure',
        'salteado'
      ]
    },
    cena: {
      titulo: 'Cena',
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
      menuAcompañamiento: [
        'ensalada',
        'arroz',
        'pure',
        'salteado'
      ]
    }
};


// Obtener la fecha y hora actual
const hora = new Date();


hora.setHours(hora.getHours() - 5); // Forma de probarlo.. se puede sumar o restar // codigo para eliminar

const horaActual = hora.toLocaleTimeString('es-ES', { hour: 'numeric', minute: 'numeric' });
const horaActualNumerica = parseInt(horaActual.replace(':', ''));

// Función para determinar el período actual de comida
function obtenerPeriodoActual(horaNumerica) {
    for (const periodo in menu) {
    const { inicio, fin } = menu[periodo].horario;
    if (horaNumerica >= inicio && horaNumerica <= fin) {
        return periodo; // Retorna la clave del período (desayuno, almuerzo, cena)
    }
    }
    return null; 
}

// Obtener el período actual de comida
const periodoActual = obtenerPeriodoActual(horaActualNumerica);

// Convertir el menú principal a una cadena legible
function menuPrincipalToString(menuPrincipal) {
    let menuString = '';
    for (const plato in menuPrincipal) {
    menuString += `${plato[0].toUpperCase()}${plato.slice(1)}: €${menuPrincipal[plato].toFixed(2)}\n`;
    }
    return menuString;
}