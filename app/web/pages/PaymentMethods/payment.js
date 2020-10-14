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

  if (window.innerWidth <= 1000) {
    frontFace.onclick = function () {
      card.classList.toggle('is-flipped');
    };
    const continueButton = document.createElement('a');
    continueButton.innerHTML = 'Continuar';
    continueButton.onclick = function () {
      window.alert('Proxima pagina!');
    };
    backFace.appendChild(continueButton);
  }
  return container;
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
  return main;
};

// Renderiza o modal
function renderPaymentModal() {
  const modalPlace = document.querySelector('#modal');

  const modalPanel = document.createElement('div');
  modalPanel.id = 'modal-panel';

  const modal = document.createElement('div');
  modal.id = 'modal-container';

  const cardsContainer = document.createElement('div');

  const closeButton = document.createElement('button');
  closeButton.id = 'close-btn';
  closeButton.innerText = 'X';

  closeButton.addEventListener('click', () => {
    modalPanel.remove();
  });

  renderContent(cardsContainer);

  modalPanel.appendChild(modal);
  modal.appendChild(cardsContainer);
  modal.appendChild(closeButton);

  modalPlace.appendChild(modalPanel);
}

// navegação para o histórico
const paymentMethodButton = document.querySelector('.payment-method');

if (paymentMethodButton) {
  paymentMethodButton.addEventListener('click', () => {
    if (window.innerWidth <= 415) {
      document.location.href = 'pages/PaymentMethods/payment_methods.html';
    } else {
      renderPaymentModal();
    }
  });
}
