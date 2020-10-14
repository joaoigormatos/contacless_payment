const creditCard = document.getElementById('credit');
const prepaidCard = document.getElementById('prepaid');
const creditFrontFace = document.querySelector('#credit .face--front');
const prepaidFrontFace = document.querySelector('#prepaid .face--front');

creditFrontFace.onclick = function () {
  creditCard.classList.toggle('is-flipped');
};

prepaidFrontFace.onclick = function () {
  prepaidCard.classList.toggle('is-flipped');
};

