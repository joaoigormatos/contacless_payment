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
  if (length) input.maxLength = length;

  if (div) {
    const div = createDiv();
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
  const cvcValidade = document.createElement('span');
  const name = document.createElement('span');

  number.innerText = "4444 4444 4444 4444";
  cvc.innerText = "717";
  validade.innerText = "03/30";
  name.innerText = "LUIS I L SILVA";

  father.appendChild(topDiv);
  father.appendChild(bottonDiv);
  topDiv.appendChild(logo);
  bottonDiv.appendChild(number);
  cvcValidade.appendChild(cvc);
  cvcValidade.appendChild(validade);
  bottonDiv.appendChild(cvcValidade)
  bottonDiv.appendChild(name);
}

const loadCSS = url => {
  var lnk = document.createElement('link');
  lnk.setAttribute('type', "text/css" );
  lnk.setAttribute('rel', "stylesheet" );
  lnk.setAttribute('href', url );
  document.getElementsByTagName("head").item(0).appendChild(lnk);
}