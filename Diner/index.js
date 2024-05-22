const menu = {
    desayuno: {
      titulo: 'Desayuno',
      horario: {
        inicio: 800,
        fin: 1200
      },
      menuPrincipal: {
        'huevos revueltos': 6,
        'avena con frutas': 5,
        'tostadas francesas': 6,
        'arepa rellena': 8
      },
      menuAcompañamiento: [
        'cafe',
        'zumo de naranja',
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
        'wrap de pollo': 12,
        'salmon al horno': 15,
        'bistec a la plancha': 12,
        'hamburguesa casera': 10
      },
      menuAcompañamiento: [
        'ensalada de quinoa',
        'arroz',
        'pure de patatas',
        'salteado de vegetales'
      ]
    },
    cena: {
      titulo: 'Cena',
      horario: {
        inicio: 1800,
        fin: 2100
      },
      menuPrincipal: {
        'wrap de pollo': 14,
        'salmon al horno': 17,
        'bistec a la plancha': 14,
        'hamburguesa casera': 12
      },
      menuAcompañamiento: [
        'ensalada de quinoa',
        'arroz',
        'pure de patatas',
        'palteado de vegetales'
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
