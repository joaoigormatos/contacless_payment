const modal = document.querySelector('#modal');
modal.innerHTML = "";
const card = document.createElement('div');
card.id = "card";
modal.appendChild(card);
const formCreditCard = document.createElement('form');
formCreditCard.id = "creditcard";
modal.appendChild(formCreditCard);

createInput("Numero do Cartão", "text", formCreditCard, false);
createInput("Nome do titular", "text", formCreditCard, false);

const divCvcValidade = document.createElement('div');
divCvcValidade.id = "divCvcValidade";
formCreditCard.appendChild(divCvcValidade);

createInput("CVC", "text", divCvcValidade, true, 3);
createInput("Validade", "text", divCvcValidade, true, 5);

createButton("Cadastrar Cartão", "blue", formCreditCard);

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
    name: cardSpans[1],
    cvc: cardSpans[2],
    validade: cardSpans[3]
  }
}

createCard(card);

loadCSS("../../assets/css/style.css");
loadCSS("creditcard.css");