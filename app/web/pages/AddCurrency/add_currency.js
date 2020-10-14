import renderModal from '../../assets/js/render_modal.js';
import { handleSuccess } from '../../pages/SuccessPage/successPage.js';

const renderAddCurrencySuccessScreen = (main) => {
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

const renderAddCurrencyContent = (main) => {
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
  input.id = 'currency-input';
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

  creditButton.addEventListener('click', function () {
    const { value } = input;
    if (!value) return false;
    handleSuccess('credit', value, document);
    input.value = null;
  });

  boletoButton.addEventListener('click', function () {
    const { value } = input;
    if (!value) return false;
    handleSuccess('boleto', value, document);
    input.value = null;
  });

  input.addEventListener('focus', onFocus);
  input.addEventListener('blur', onBlur);

  renderAddCurrencySuccessScreen(main);

  return main;
};

const currency = 'BRL';

const localStringToNumber = (value) => {
  return Number(String(value).replace(/[^0-9.-]+/g, ''));
};

const onFocus = (e) => {
  const value = e.target.value;
  e.target.value = value ? localStringToNumber(value) : '';
};

const onBlur = (e) => {
  const value = e.target.value;
  const options = {
    maximumFractionDigits: 2,
    currency: currency,
    style: 'currency',
    currencyDisplay: 'symbol',
  };

  e.target.value = value
    ? localStringToNumber(value).toLocaleString(undefined, options)
    : '';
};

// navegação para o histórico
const addCurrencyButton = document.querySelector('.add-currency');

if (addCurrencyButton) {
  addCurrencyButton.addEventListener('click', () => {
    if (window.innerWidth <= 600) {
      document.location.href = '/pages/AddCurrency/add_currency.html';
    } else {
      renderModal(renderAddCurrencyContent);
    }
  });
}
