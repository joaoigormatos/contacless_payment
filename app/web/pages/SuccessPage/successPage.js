export const handleSuccess = (type, value, page) => {
  if (type === 'credit') {
    const successMessage = `Valor de ${value} adicionados na conta!`;
    const successHeaderMessage = 'Dinheiro adicionado';
    _toggleCurrentContainer(successMessage, successHeaderMessage, page);
  } else if (type === 'boleto') {
    const successMessage = `Uma cópia foi enviada para seu email`;
    const successHeaderMessage = 'Boleto gerado';
    _toggleCurrentContainer(successMessage, successHeaderMessage, page);
    _createBoletoButton(page);
  } else {
    console.error('No type definition');
    return false;
  }
};

export const _createBoletoButton = (page) => {
  const successContainer = page.getElementById('success');
  const getBoletoLinkButton = page.createElement('button');
  getBoletoLinkButton.classList.add('btn');
  getBoletoLinkButton.classList.add('btn-blue');
  getBoletoLinkButton.innerHTML = 'Copiar código do boleto';
  successContainer.appendChild(getBoletoLinkButton);
};

const _setSuccessContainer = (successMessage, successHeaderMessage, page) => {
  const container = page.getElementById('container');
  const successText = page.getElementById('success-message');
  const successHeader = page.getElementById('success-header');
  successText.innerHTML = successMessage;
  successHeader.innerHTML = successHeaderMessage;
  return container;
};

export const _toggleCurrentContainer = (
  successMessage,
  successHeaderMessage,
  page
) => {
  const container = _setSuccessContainer(
    successMessage,
    successHeaderMessage,
    page
  );
  const successContainer = page.getElementById('success');
  if (container.style.display === 'none') {
    container.style.display = 'block';
    successContainer.style.display = 'none';
  } else {
    container.style.display = 'none';
    successContainer.style.display = 'block';
    setTimeout(() => {
      const modal = document.getElementById('myModal');
      modal.style.display = 'none';
      container.style.display = 'block';
      successContainer.style.display = 'none';
    }, 500);
  }
};
