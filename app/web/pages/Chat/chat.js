const chatContainer = document.querySelector('#chat')

// Envia a primeira mensagem.
setTimeout(() => {
  const firstMessage = document.createElement('span');
  firstMessage.classList.add('bot-message');
  firstMessage.innerHTML = 'Olá! Envie sua dúvida, estamos aqui para ajudar!';

  chatContainer.appendChild(firstMessage);
}, 300)

// Faz auto-scroll
function AutoScroll() {
  chatContainer.scrollTop = chatContainer.scrollHeight;
}


// Envia a mensagem do usuário.
function sendUserMessage() {
  const input = document.querySelector('textarea[name="message"]');

  const userMessage = document.createElement('span');
  userMessage.classList.add('user-message');
  userMessage.innerHTML = input.value;

  chatContainer.appendChild(userMessage);

  input.value = "";

  AutoScroll();
}

// Responde o usuário
let messageIndex = 0;
function reply() {
  const lastMessage = document.querySelectorAll('span.user-message')[messageIndex].innerHTML;
  if(lastMessage.includes('pagamento') || lastMessage.includes('pagar')) {
    const botMessage = document.createElement('span');
    botMessage.classList.add('bot-message');
    botMessage.innerHTML = 'Os métodos de pagamentos são dois, cartão de crédito \
    e pré-pago. Usando o cartão o pagamento será cobrado na fatura. Usando o pré-pago \
    o seu saldo do aplicativo será descontado.';

    setTimeout(() => {
      chatContainer.appendChild(botMessage)
      AutoScroll();
    }, 1500);
  } else {
    const botMessage = document.createElement('span');
    botMessage.classList.add('bot-message');
    botMessage.innerHTML = 'Desculpe, não entendi a pergunta.';

    setTimeout(() => {
      chatContainer.appendChild(botMessage)
      AutoScroll();
    }, 1500);
  }

  messageIndex++;
}

// Adiciona EventListener no form
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  sendUserMessage();

  reply();
});