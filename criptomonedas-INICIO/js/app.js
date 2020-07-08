const cotizador = new API('17e3132122b452abeccfd53cf6e92cabd0231d2c6bfc0583aba85d5eee1d5639')
const ui = new Interfaz();



ui.mostrarMensaje('texto', 'clase');

// leer form

const formulario = document.querySelector('#formulario');
//eventListener
formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    // leer la moneda seleccionada
    const monedaSelect =document.querySelector('#moneda');
    const monedaSeleccionada = monedaSelect.options[monedaSelect.selectedIndex].value;


    // leer la criptomoneda seleccionada
    const criptoMonedaSelect =document.querySelector('#criptomoneda');
    const criptoMonedaSeleccionada = criptoMonedaSelect.options[criptoMonedaSelect.selectedIndex].value;
    
    console.log(criptoMonedaSeleccionada);

    // comprobar que tengan seleccionado ambos campos
    if(monedaSeleccionada === '' || criptoMonedaSeleccionada === '') {
        ui.mostrarMensaje('Ambos Campos son Obligatorios', 'alert bg-danger text-center');
    } else {
        // todo bien, consultar la api
        cotizador.obtenerValores(monedaSeleccionada, criptoMonedaSeleccionada)
            .then(data => {
                ui.mostrarResultado(data.resultado.RAW, monedaSeleccionada, criptoMonedaSeleccionada);
            })
    }

})