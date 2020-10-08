const createInput = (name, type, father, div, length) => {
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

const createButton = (text, color, father) => {
  const button = document.createElement('button');
  button.className = `btn btn-${color}`;
  button.type = "submit";
  button.innerText = text;
  father.appendChild(button);
}

const createCard = (father) => {
  const topDiv = document.createElement('div');
  topDiv.id = "topDiv";
  const bottonDiv = document.createElement('div');
  bottonDiv.id = "bottonDiv";

  const logo = document.createElement('img');
  logo.src = '../../assets/images/cardlogo.png';
  logo.alt = 'Visa';

  const number = document.createElement('span');
  const cvc = document.createElement('span');
  const validade = document.createElement('span');
  const name = document.createElement('span');

  number.innerText = "5555 5555 5555 5555";
  cvc.innerText = "451";
  validade.innerText = "10/20";
  name.innerText = "Joao A R Silva";

  father.appendChild(topDiv);
  father.appendChild(bottonDiv);
  topDiv.appendChild(logo);
  bottonDiv.appendChild(number);
  cvc.appendChild(validade);
  bottonDiv.appendChild(cvc)
  bottonDiv.appendChild(name);
}

const loadCSS = url => {
  var lnk = document.createElement('link');
  lnk.setAttribute('type', "text/css" );
  lnk.setAttribute('rel', "stylesheet" );
  lnk.setAttribute('href', url );
  document.getElementsByTagName("head").item(0).appendChild(lnk);
}