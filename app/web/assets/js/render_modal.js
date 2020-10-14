// Renderiza o modal
function renderModal(contentCallback) {
  const modalPlace = document.querySelector('#modal');

  const modalPanel = document.createElement('div');
  modalPanel.id = 'modal-panel';

  const modal = document.createElement('div');
  modal.id = 'modal-container';

  const cardsContainer = document.createElement('div');

  const closeButton = document.createElement('button');
  closeButton.id = 'close-btn';
  closeButton.innerHTML = '<img src="../../assets/icons/close.svg"/>';

  closeButton.addEventListener('click', () => {
    modalPanel.remove();
  });

  contentCallback(cardsContainer)

  modalPanel.appendChild(modal);
  modal.appendChild(cardsContainer);
  modal.appendChild(closeButton);

  modalPlace.appendChild(modalPanel);
}

export default renderModal;