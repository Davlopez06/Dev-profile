export default function getTimeWork(fechaInicial, fechaFinal) {
  let fechaInicialObj, fechaFinalObj;

  if (fechaInicial === 'Actual') {
    fechaInicialObj = new Date();
  } else {
    const partesInicio = fechaInicial.split('/');
    if (partesInicio.length === 3) {
      const dia = parseInt(partesInicio[0], 10);
      const mes = parseInt(partesInicio[1], 10) - 1; // Restar 1 al mes porque en JavaScript los meses van de 0 a 11
      const año = parseInt(partesInicio[2], 10);
      fechaInicialObj = new Date(año, mes, dia);
    } else {
      return 'Formato de fecha inicial inválido. Debe ser dd/mm/aaaa o "Actual".';
    }
  }

  if (fechaFinal === 'Actual') {
    fechaFinalObj = new Date();
  } else {
    const partesFinal = fechaFinal.split('/');
    if (partesFinal.length === 3) {
      const dia = parseInt(partesFinal[0], 10);
      const mes = parseInt(partesFinal[1], 10) - 1; // Restar 1 al mes porque en JavaScript los meses van de 0 a 11
      const año = parseInt(partesFinal[2], 10);
      fechaFinalObj = new Date(año, mes, dia);
    } else {
      return 'Formato de fecha final inválido. Debe ser dd/mm/aaaa o "Actual".';
    }
  }

  if (isNaN(fechaInicialObj) || isNaN(fechaFinalObj)) {
    return 'Formato de fecha inválido. Debe ser dd/mm/aaaa o "Actual".';
  }

  const diferenciaEnMilisegundos = fechaFinalObj - fechaInicialObj;

  const milisegundosEnUnMes = 1000 * 60 * 60 * 24 * 30.44; // Aproximadamente la duración promedio de un mes
  const mesesPasados = diferenciaEnMilisegundos / milisegundosEnUnMes;

  if (mesesPasados < 12) {
    return `${Math.floor(mesesPasados)} meses`;
  } else {
    const añosPasados = Math.floor(mesesPasados / 12);
    const mesesRestantes = Math.floor(mesesPasados % 12);

    if (mesesRestantes === 0) {
      return `${añosPasados} años`;
    } else {
      return `${añosPasados} años y ${mesesRestantes} meses`;
    }
  }
}
