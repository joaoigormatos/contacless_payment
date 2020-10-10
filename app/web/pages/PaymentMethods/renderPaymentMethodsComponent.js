const renderMobile = () => {
  const body = document.body;
  const main = document.createElement('main');
  body.appendChild(main);

  renderContent(main);

  const style = document.createElement('link');
  style.rel = 'stylesheet';
  style.href = './mobile.css';
  body.appendChild(style);
};

const renderDesktop = () => {
  const body = document.body;

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

  renderContent(modalContent);

  const modalScript = document.createElement('script');
  modalScript.type = 'module';
  modalScript.src = '../../assets/js/modalHandler.js';
  body.appendChild(modalScript);

  const style = document.createElement('link');
  style.rel = 'stylesheet';
  style.href = './desktop.css';
  body.appendChild(style);
};

const renderContent = (main) => {
  const container = document.createElement('div');
  container.id = 'container';
  container.classList.add('container');
  main.appendChild(container);

  const title = document.createElement('h2');
  title.innerHTML = 'Método para pagamentos';
  container.appendChild(title);

  renderCard(
    container,
    'credit',
    'Cartão de \r\n crédito',
    'Tokenize seu cartão de crédito, deixando-o registrado. Segurança e praticidade na hora do pagamento.'
  );

  renderCard(
    container,
    'prepaid',
    'Pré-pago',
    'Se não quiser registrar um cartão de crédito, vá de pré-pago! Adicione na carteira virtual, tanto por cartão ou boleto.'
  );
};

const renderCard = (container, cardType, cardTypeTitle, backText) => {
  const scene = document.createElement('div');
  scene.classList.add('scene');
  scene.classList.add('scene--card');
  container.appendChild(scene);

  const card = document.createElement('div');
  card.id = cardType;
  card.classList.add('card');
  scene.appendChild(card);

  const frontFace = document.createElement('div');
  frontFace.classList.add('face');
  frontFace.classList.add('face--front');
  card.appendChild(frontFace);

  const image = document.createElement('img');
  image.height = '80';
  image.width = '80';
  image.src = '../../assets/images/plus-icon.svg';
  frontFace.appendChild(image);

  const cardTitle = document.createElement('h3');
  cardTitle.innerHTML = cardTypeTitle;
  frontFace.appendChild(cardTitle);

  const backFace = document.createElement('div');
  backFace.classList.add('face');
  backFace.classList.add('face--back');
  card.appendChild(backFace);

  const backFaceText = document.createElement('p');
  backFaceText.innerHTML = backText;
  backFace.appendChild(backFaceText);

  if (window.innerWidth <= 400) {
    frontFace.onclick = function(){card.classList.toggle('is-flipped')}
    const continueButton = document.createElement('a');
    continueButton.innerHTML = "Continuar"
    continueButton.onclick = function(){window.alert("Proxima pagina!")}
    backFace.appendChild(continueButton)
  }

};

if (window.innerWidth <= 400) {
  renderMobile();
} else {
  renderDesktop();
}
