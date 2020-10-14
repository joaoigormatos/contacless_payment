let iconHider = null;
let balanceValue = null;
let ltdInput = null;
let ltmInput = null;
//hour control for payments

let domingoButton = null;
let segundaButton = null;
let tercaButton = null;
let quartaButton = null;
let quintaButton = null;
let sextaButton = null;
let sabadoButton = null;
let startInput = null;
let untilInput = null;


//history chart
let historyChart = null;

window.addEventListener('load', () => {
  setupHiderBalance();
  setupHourPaymentsControl();
  historyChartSetup()

})



const setupHourPaymentControllerVariables = () => {
  domingoButton = document.getElementById('domingo')
  segundaButton = document.getElementById('segunda')
  tercaButton = document.getElementById('terca')
  quartaButton = document.getElementById('quarta')
  quintaButton = document.getElementById('quinta')
  sextaButton = document.getElementById('sexta')
  sabadoButton = document.getElementById('sabado')
  startInput = document.getElementById('start')
  untilInput = document.getElementById('until')

}
const setupHiderBalance = () => {
  const hiderBalance = {
    "state": false,
    "hiderBalanceIcon": "../../assets/icons/eye.svg",
    "unhiderBalanceIcon": "../../assets/icons/eye-off.svg"
  };
  localStorage.setItem("hiderBalance", JSON.stringify(hiderBalance))

  iconHider = document.getElementById("balanceHider")
  balanceValue = document.getElementById("balanceValue")
  iconHider.addEventListener('click', () => {
    const hiderBalanceState = JSON.parse(localStorage.getItem("hiderBalance"))
    hiderBalanceState.state = !hiderBalanceState.state
    if (hiderBalanceState.state) {
      iconHider.src = hiderBalance.unhiderBalanceIcon
      balanceValue.classList.add('hiderValue')
    }
    else {
      iconHider.src = hiderBalance.hiderBalanceIcon
      balanceValue.classList.remove('hiderValue')
    }
    localStorage.setItem("hiderBalance", JSON.stringify(hiderBalanceState))
    console.log('clicked')
  })
}

const createHoursPaymentState = () => {
  const hourPaymentState = {
    "active": "domingo",
    "domingo": {
      "active": false,
      "start": "",
      "until": ""
    },
    "segunda": {
      "active": false,
      "start": "",
      "until": ""
    },
    "terca": {
      "active": false,
      "start": "",
      "until": ""
    },
    "quarta": {
      "active": false,
      "start": "",
      "until": ""
    },
    "quinta": {
      "active": false,
      "start": "",
      "until": ""
    },
    "sexta": {
      "active": false,
      "start": "",
      "until": ""
    },
    "sabado": {
      "active": false,
      "start": "",
      "until": ""
    }
  }
  return hourPaymentState;
}

const checkHourState = (day) => {
  const hourPaymentState = JSON.parse(localStorage.getItem('hourPaymentState'))
  console.log(hourPaymentState[day])
  if (hourPaymentState[day].start !== '' && hourPaymentState[day].until !== '') {
    hourPaymentState[day].active = true;
  }

  else {
    hourPaymentState[day].active = false;
  }

  localStorage.setItem('hourPaymentState', JSON.stringify(hourPaymentState))


}

const controlerStateActiveHour = (day) => {
  const hourPaymentState = JSON.parse(localStorage.getItem('hourPaymentState'))
  switch (day) {
    case "domingo":
      if (hourPaymentState.domingo.active)
        domingoButton.classList.add('stateActive')
      else
        domingoButton.classList.remove('stateActive')
      break;
    case "segunda":
      if (hourPaymentState.segunda.active)
        segundaButton.classList.add('stateActive')
      else
        segundaButton.classList.remove('stateActive')
      break;
    case "terca":
      if (hourPaymentState.terca.active)
        tercaButton.classList.add('stateActive')
      else
        tercaButton.classList.remove('stateActive')
      break;
    case "quarta":
      if (hourPaymentState.quarta.active)
        quartaButton.classList.add('stateActive')
      else
        quartaButton.classList.remove('stateActive')
      break;
    case "quinta":
      if (hourPaymentState.quinta.active)
        quintaButton.classList.add('stateActive')
      else
        quintaButton.classList.remove('stateActive')
      break;
    case "sexta":
      if (hourPaymentState.sexta.active)
        sextaButton.classList.add('stateActive')
      else
        sextaButton.classList.remove('stateActive')
      break;
    case "sabado":
      if (hourPaymentState.sabado.active)
        sabadoButton.classList.add('stateActive')
      else
        sabadoButton.classList.remove('stateActive')
      break;
  }
}
const setupHourPaymentsControl = () => {
  setupHourPaymentControllerVariables()
  const state = createHoursPaymentState();

  localStorage.setItem('hourPaymentState', JSON.stringify(state))
  domingoButton.addEventListener('click', () => {
    const hourPaymentState = JSON.parse(localStorage.getItem('hourPaymentState'))
    startInput.value = hourPaymentState.domingo.start
    untilInput.value = hourPaymentState.domingo.until
    hourPaymentState.active = "domingo"
    localStorage.setItem('hourPaymentState', JSON.stringify(hourPaymentState))

  })
  segundaButton.addEventListener('click', () => {
    const hourPaymentState = JSON.parse(localStorage.getItem('hourPaymentState'))
    startInput.value = hourPaymentState.segunda.start
    untilInput.value = hourPaymentState.segunda.until
    hourPaymentState.active = "segunda"
    localStorage.setItem('hourPaymentState', JSON.stringify(hourPaymentState))


  })
  tercaButton.addEventListener('click', () => {
    const hourPaymentState = JSON.parse(localStorage.getItem('hourPaymentState'))
    startInput.value = hourPaymentState.terca.start
    untilInput.value = hourPaymentState.terca.until
    hourPaymentState.active = "terca"

    localStorage.setItem('hourPaymentState', JSON.stringify(hourPaymentState))

  })
  quartaButton.addEventListener('click', () => {
    const hourPaymentState = JSON.parse(localStorage.getItem('hourPaymentState'))
    startInput.value = hourPaymentState.quarta.start
    untilInput.value = hourPaymentState.quarta.until
    hourPaymentState.active = "quarta"
    localStorage.setItem('hourPaymentState', JSON.stringify(hourPaymentState))

  })
  quintaButton.addEventListener('click', () => {
    const hourPaymentState = JSON.parse(localStorage.getItem('hourPaymentState'))
    startInput.value = hourPaymentState.quinta.start
    untilInput.value = hourPaymentState.quinta.until
    hourPaymentState.active = "quinta"
    localStorage.setItem('hourPaymentState', JSON.stringify(hourPaymentState))

  })
  sextaButton.addEventListener('click', () => {
    const hourPaymentState = JSON.parse(localStorage.getItem('hourPaymentState'))
    startInput.value = hourPaymentState.sexta.start
    untilInput.value = hourPaymentState.sexta.until
    hourPaymentState.active = "sexta"
    localStorage.setItem('hourPaymentState', JSON.stringify(hourPaymentState))

  })
  sabadoButton.addEventListener('click', () => {
    const hourPaymentState = JSON.parse(localStorage.getItem('hourPaymentState'))
    startInput.value = hourPaymentState.sabado.start
    untilInput.value = hourPaymentState.sabado.until
    hourPaymentState.active = "sabado"
    localStorage.setItem('hourPaymentState', JSON.stringify(hourPaymentState))

  })
  startInput.addEventListener('change', (e) => {
    const hourPaymentState = JSON.parse(localStorage.getItem('hourPaymentState'))
    switch (hourPaymentState.active) {
      case "domingo":
        hourPaymentState.domingo.start = e.target.value
        localStorage.setItem('hourPaymentState', JSON.stringify(hourPaymentState))

        checkHourState("domingo")
        controlerStateActiveHour("domingo")
        break;
      case "segunda":
        hourPaymentState.segunda.start = e.target.value
        localStorage.setItem('hourPaymentState', JSON.stringify(hourPaymentState))

        checkHourState("segunda")
        controlerStateActiveHour("segunda")
        break;
      case "terca":
        hourPaymentState.terca.start = e.target.value
        console.log(e.target.value)
        localStorage.setItem('hourPaymentState', JSON.stringify(hourPaymentState))

        checkHourState("terca")
        controlerStateActiveHour("terca")
        break;
      case "quarta":
        hourPaymentState.quarta.start = e.target.value
        localStorage.setItem('hourPaymentState', JSON.stringify(hourPaymentState))

        checkHourState("quarta")
        controlerStateActiveHour("quarta")
        break;
      case "quinta":
        hourPaymentState.quinta.start = e.target.value
        localStorage.setItem('hourPaymentState', JSON.stringify(hourPaymentState))

        checkHourState("quinta")
        controlerStateActiveHour("quinta")
        break;
      case "sexta":
        hourPaymentState.sexta.start = e.target.value
        localStorage.setItem('hourPaymentState', JSON.stringify(hourPaymentState))

        checkHourState("sexta")
        controlerStateActiveHour("sexta")
        break;
      case "sabado":
        hourPaymentState.sabado.start = e.target.value
        localStorage.setItem('hourPaymentState', JSON.stringify(hourPaymentState))

        checkHourState("sabado")
        controlerStateActiveHour("sabado")
        break;
    }
  })


  untilInput.addEventListener('change', (e) => {
    const hourPaymentState = JSON.parse(localStorage.getItem('hourPaymentState'))
    switch (hourPaymentState.active) {
      case "domingo":
        hourPaymentState.domingo.until = e.target.value
        localStorage.setItem('hourPaymentState', JSON.stringify(hourPaymentState))

        checkHourState("domingo")
        controlerStateActiveHour("domingo")
        break;
      case "segunda":
        hourPaymentState.segunda.until = e.target.value
        localStorage.setItem('hourPaymentState', JSON.stringify(hourPaymentState))

        checkHourState("segunda")
        controlerStateActiveHour("segunda")
        break;
      case "terca":
        hourPaymentState.terca.until = e.target.value
        localStorage.setItem('hourPaymentState', JSON.stringify(hourPaymentState))

        checkHourState("terca")
        controlerStateActiveHour("terca")
        break;
      case "quarta":
        hourPaymentState.quarta.until = e.target.value
        localStorage.setItem('hourPaymentState', JSON.stringify(hourPaymentState))

        checkHourState("quarta")
        controlerStateActiveHour("quarta")
        break;
      case "quinta":
        hourPaymentState.quinta.until = e.target.value
        localStorage.setItem('hourPaymentState', JSON.stringify(hourPaymentState))

        checkHourState("quinta")
        controlerStateActiveHour("quinta")
        break;
      case "sexta":
        hourPaymentState.sexta.until = e.target.value
        localStorage.setItem('hourPaymentState', JSON.stringify(hourPaymentState))

        checkHourState("sexta")
        controlerStateActiveHour("sexta")
        break;
      case "sabado":
        hourPaymentState.sabado.until = e.target.value
        localStorage.setItem('hourPaymentState', JSON.stringify(hourPaymentState))

        checkHourState("sabado")
        controlerStateActiveHour("sabado")
        break;
    }
  })
};


const historyChartSetup = () => {

  Chart.defaults.global.defaultFontSize = 16;
  historyChart = document.getElementById('historyChart').getContext('2d')
  let chart = new Chart(historyChart, {
    type: 'bar',
    data: {
      labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junio', 'Julho', 'Setebro', 'Outubro', 'Novembro', 'Dezembro'],
      datasets: [{
        label: 'histórico',
        data: [
          500, 300, 150, 500, 600, 700, 800, 900, 400, 440, 550, 800
        ],
        backgroundColor: '#5166B9'
      }]
    }
  })

}


