import AddCurrencyComponent from './old/AddCurrencyComponent.js'

// Renderiza o modal
function renderModal() {
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

  new AddCurrencyComponent().renderSuccessScreen(cardsContainer)
  new AddCurrencyComponent().renderContent(cardsContainer)

  modalPanel.appendChild(modal);
  modal.appendChild(cardsContainer);
  modal.appendChild(closeButton);

  modalPlace.appendChild(modalPanel);
}

// navegação para o histórico
const addCurrencyButton = document.querySelector('.add-currency');

if (addCurrencyButton) {
  addCurrencyButton.addEventListener('click', () => {
    if (window.innerWidth < 500) {
      document.location.href = '/app/web/pages/AddCurrency/add_currency.html';
    } else {
      renderModal();
    }
  });
}
