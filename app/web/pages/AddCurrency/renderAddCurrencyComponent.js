import CustomComponent from '../../assets/js/CustomComponent.js';

class AddCurrencyComponent extends CustomComponent {
  renderSuccessScreen(main) {
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
  }
  renderContent(main) {
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

    this.renderSuccessScreen(main);

    const script = document.createElement('script');
    script.type = 'module';
    script.src = '../../assets/js/currencyTextInputHelper.js';
    main.appendChild(script);

    return main;
  }
}

export default AddCurrencyComponent;

new AddCurrencyComponent().renderComponent();
