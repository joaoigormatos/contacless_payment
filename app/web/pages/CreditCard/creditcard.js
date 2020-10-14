
const modal = document.querySelector('#modal');
modal.innerHTML = "";
const card = document.createElement('div');
card.id = "card";
modal.appendChild(card);
const formCreditCard = document.createElement('form');
formCreditCard.id = "creditcard";
modal.appendChild(formCreditCard);

createInput("Numero do Cartão", "text", formCreditCard, false, 16);
createInput("Nome do titular", "text", formCreditCard, false, 35);

const divCvcValidade = document.createElement('div');
divCvcValidade.id = "divCvcValidade";
formCreditCard.appendChild(divCvcValidade);

createInput("CVC", "text", divCvcValidade, true, 3);
createInput("Validade", "text", divCvcValidade, true, 4);

const valorBotao = "cadastrar"

createButton(`${valorBotao} Cartão`, "blue", formCreditCard);

createCard(card);

const cardInputs = document.querySelectorAll('#creditcard input');
const cardSpans = document.querySelectorAll('#card span');

const cardData = {
  input: {
    number: cardInputs[0],
    name: cardInputs[1],
    cvc: cardInputs[2],
    validade: cardInputs[3]
  },
  show: {
    number: cardSpans[0],
    cvc: cardSpans[2],
    validade: cardSpans[3],
    name: cardSpans[4]
  }
}


formCreditCard.addEventListener('keyup', (e) => {
  if (e.key === "Backspace" || e.key === "Delete") return;

  const inputChanged = e.target.name === "numerodocartao"
    ? "number" : e.target.name === "nomedotitular"
    ? "name" : e.target.name;
  
  const inputValue = cardData.input[inputChanged].value;
  
  let valorApresentado;

  switch (inputChanged) {
    case "number":
      if (inputValue === "") valorApresentado = "4444 4444 4444 4444";
      else {
        const somenteNumeros = inputValue.replace(/\D+/g, "");
        cardData.input.number.value = somenteNumeros;
        valorApresentado = somenteNumeros.substr(0,4)+" "+somenteNumeros.substr(4);
        valorApresentado = valorApresentado.substr(0,9)+" "+valorApresentado.substr(9);
        valorApresentado = valorApresentado.substr(0,14)+" "+valorApresentado.substr(14);
        if (valorApresentado === "") valorApresentado = "4444 4444 4444 4444";
      }
      break;
    case "name":
      if (inputValue === "") valorApresentado = "LUIS I L SILVA";
      else valorApresentado = inputValue.toUpperCase();
      break;
    case "cvc":
      if (inputValue === "") valorApresentado = "717";
      else {
        const somenteNumeros = inputValue.replace(/\D+/g, "");
        cardData.input.cvc.value = somenteNumeros;
        valorApresentado = somenteNumeros;
        if (valorApresentado === "") valorApresentado = "717";
      }
      break;
    case "validade": 
      if (inputValue === "") valorApresentado = "03/30";
      else {
        const somenteNumeros = inputValue.replace(/\D+/g, "");
        cardData.input.validade.value = somenteNumeros;
        valorApresentado = somenteNumeros.substr(0,2)+"/"+somenteNumeros.substr(2);
        if (valorApresentado === "/") valorApresentado = "03/30";
      }
      break;
  }

  cardData.show[inputChanged].innerHTML = valorApresentado;
});

formCreditCard.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Cartão Cadastrado!');
  window.location.href = '../Dashboard/dashboard.html';
});

loadCSS("../../assets/css/style.css");
loadCSS("creditcard.css");