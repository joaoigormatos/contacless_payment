import CustomComponent from '../../assets/js/CustomComponent.js';

class PaymentMethodsComponent extends CustomComponent {
  renderCard = (container, cardType, cardTypeTitle, backText) => {
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
  };

  renderContent = (main) => {
    const container = document.createElement('div');
    container.id = 'container';
    container.classList.add('container');
    main.appendChild(container);

    const title = document.createElement('h2');
    title.innerHTML = 'Método para pagamentos';
    container.appendChild(title);

    this.renderCard(
      container,
      'credit',
      'Cartão de \r\n crédito',
      'Tokenize seu cartão de crédito, deixando-o registrado. Segurança e praticidade na hora do pagamento.'
    );

    this.renderCard(
      container,
      'prepaid',
      'Pré-pago',
      'Se não quiser registrar um cartão de crédito, vá de pré-pago! Adicione na carteira virtual, tanto por cartão ou boleto.'
    );
  };
}

export default PaymentMethodsComponent;
