let iconHider = null;
let balanceValue = null
window.addEventListener('load', () => {
  setupHiderBalance();

})
const setupHiderBalance = () => {
  const hiderBalance = {
    "state": false,
    "hiderBalanceIcon": "../assets/icons/eye.svg",
    "unhiderBalanceIcon": "../assets/icons/eye-off.svg"
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

const setupHourPaymentsControl = () => {
  const hourPaymentsControl = {
    "domingo": {
      "active": false,
      "start": "00:00",
      "until": "00:00"
    },
    "segunda": {
      "active": false,
      "start": "00:00",
      "until": "00:00"
    },
    "terça": {
      "active": false,
      "start": "00:00",
      "until": "00:00"
    },
    "quarta": {
      "active": false,
      "start": "00:00",
      "until": "00:00"
    },
    "quinta": {
      "active": false,
      "start": "00:00",
      "until": "00:00"
    },
    "sexta": {
      "active": false,
      "start": "00:00",
      "until": "00:00"
    },
    "sabado": {
      "active": false,
      "start": "00:00",
      "until": "00:00"
    }
  };
  localStorage.setItem('')
}