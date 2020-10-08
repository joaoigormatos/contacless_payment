const container = document.querySelector('#container');
container.innerHTML = "";
const formCreditCard = document.createElement('form');
formCreditCard.id = "creditcard";
container.appendChild(formCreditCard);

function criaInput(name, type, father, div, length) {
  function formatName(name) {
    const formatedName = name
      .normalize("NFD")
      .replace(/[^()a-zA-Zs]/g, "")
      .toLowerCase();
    return formatedName;
  }

  function createDiv() {
    const div = document.createElement('div');
    div.id = `div${name}`;
    div.className = "small";
    father.appendChild(div);
    return div;
  }

  const label = document.createElement('label');
  label.innerText = name;

  const formatedName = formatName(name);

  label.htmlFor = formatedName;
  const input = document.createElement('input');
  input.type = type;
  input.name = formatedName;

  if (div) {
    const div = createDiv();
    input.maxLength = length;
    div.appendChild(label);
    div.appendChild(input);
  } else {
    father.appendChild(label);
    father.appendChild(input);
  }
}

function loadCSS(url) {
  var lnk = document.createElement('link');
  lnk.setAttribute('type', "text/css" );
  lnk.setAttribute('rel', "stylesheet" );
  lnk.setAttribute('href', url );
  document.getElementsByTagName("head").item(0).appendChild(lnk);
}

criaInput("Numero do Cartão", "text", formCreditCard, false);
criaInput("Nome do titular", "text", formCreditCard, false);

const divCvcValidade = document.createElement('div');
divCvcValidade.id = "divCvcValidade";
formCreditCard.appendChild(divCvcValidade);

criaInput("CVC", "text", divCvcValidade, true, 3);
criaInput("Validade", "text", divCvcValidade, true, 5);

loadCSS("../Login/login.css");
loadCSS("creditcard.css");