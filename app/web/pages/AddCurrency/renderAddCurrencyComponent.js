export const renderMobile = () => {
  const body = document.body;
  const main = document.createElement('main');
  body.appendChild(main);

  renderContent(main);

  const head = document.head;
  const style = document.createElement('link');
  style.id = 'mobile';
  style.rel = 'stylesheet';
  style.href = './mobile.css';
  head.appendChild(style);

  return document;
};

export const renderSuccessScreen = (main) => {
  const success = document.createElement('div');
  success.id = 'success';
  success.classList.add('hidden');
  success.style.display = 'none';
  main.appendChild(success);

  const image = document.createElement('img');
  image.src = '../../assets/images/success-icon.svg';
  success.appendChild(image);

  const title = document.createElement('h2');
  title.id = 'success-header';
  success.appendChild(title);

  const message = document.createElement('p');
  message.id = 'success-message';
  success.appendChild(message);

  return main;
};

export const renderModal = (body) => {
  const modalOpener = document.createElement('button');
  modalOpener.id = 'myBtn';
  modalOpener.innerHTML = 'OPEN MODAL';
  body.appendChild(modalOpener);

  const modalBackgound = document.createElement('div');
  modalBackgound.id = 'myModal';
  modalBackgound.classList.add('modal');
  body.appendChild(modalBackgound);

  const modalContent = document.createElement('div');
  modalContent.classList.add('modal-content');
  modalBackgound.appendChild(modalContent);

  const modalCloseButton = document.createElement('span');
  modalCloseButton.classList.add('close');
  modalCloseButton.innerHTML = '&times';
  modalContent.appendChild(modalCloseButton);

  return modalContent;
};

export const renderDesktop = () => {
  const body = document.body;

  const modalContent = renderModal(body);

  renderContent(modalContent);

  const modalScript = document.createElement('script');
  modalScript.type = 'module';
  modalScript.src = '../../assets/js/modalHandler.js';
  body.appendChild(modalScript);

  const style = document.createElement('link');
  style.id = 'desktop';
  style.rel = 'stylesheet';
  style.href = './desktop.css';
  document.head.appendChild(style);

  return document;
};

export const renderContent = (main) => {
  const container = document.createElement('div');
  container.id = 'container';
  container.classList.add('wrapper');
  main.appendChild(container);

  const title = document.createElement('h2');
  title.innerHTML = 'Adicionar saldo';
  container.appendChild(title);
  const subtitle = document.createElement('h3');
  subtitle.innerHTML = 'Informe o valor';
  container.appendChild(subtitle);

  const input = document.createElement('input');
  input.dir = 'rtl';
  input.type = 'currency';
  input.value = '';
  input.placeholder = 'R$ 0,00';
  container.appendChild(input);

  const buttonContainer = document.createElement('div');
  buttonContainer.classList.add('btn-container');
  container.appendChild(buttonContainer);

  const creditButton = document.createElement('button');
  creditButton.innerHTML = 'Cartão de crédito';
  creditButton.id = 'credit';
  creditButton.classList.add('btn');
  creditButton.classList.add('btn-yellow');
  buttonContainer.appendChild(creditButton);

  const boletoButton = document.createElement('button');
  boletoButton.innerHTML = 'Boleto';
  boletoButton.id = 'boleto';
  boletoButton.classList.add('btn');
  boletoButton.classList.add('btn-yellow');
  buttonContainer.appendChild(boletoButton);

  renderSuccessScreen(main);

  const script = document.createElement('script');
  script.type = 'module';
  script.src = '../../assets/js/currencyTextInputHelper.js';
  main.appendChild(script);

  return main;
};

if (window.innerWidth <= 400) {
  renderMobile();
} else {
  renderDesktop();
}
