const container = document.querySelector('#container');
container.innerHTML = "";
const formCreditCard = document.createElement('form');
formCreditCard.id = "creditcard";
container.appendChild(formCreditCard);

function criaInput(name, type, father) {
  function formatName(name) {
    const formatedName = name
      .normalize("NFD")
      .replace(/[^()a-zA-Zs]/g, "")
      .toLowerCase();
    return formatedName;
  }

  const label = document.createElement('label');
  label.innerText = name;

  const formatedName = formatName(name);

  label.htmlFor = formatedName;
  const input = document.createElement('input');
  input.type = type;
  input.name = formatedName;

  father.appendChild(label);
  father.appendChild(input);
}

function loadCSS(url) {
  var lnk = document.createElement('link');
  lnk.setAttribute('type', "text/css" );
  lnk.setAttribute('rel', "stylesheet" );
  lnk.setAttribute('href', url );
  document.getElementsByTagName("head").item(0).appendChild(lnk);
}

criaInput("Numero do Cartão", "text", formCreditCard);
criaInput("Nome do titular", "text", formCreditCard);

const divCvcValidade = document.createElement('div');
divCvcValidade.id = "divCvcValidade";
formCreditCard.appendChild(divCvcValidade);

criaInput("CVC", "text", divCvcValidade);
criaInput("Validade", "text", divCvcValidade);
loadCSS("../Login/login.css");
loadCSS("creditcard.css");