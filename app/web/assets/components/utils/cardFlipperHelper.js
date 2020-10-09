const credit = document.getElementById('credit');
const prepaid = document.getElementById('prepaid');

const flipCreditCard = () => {
  credit.classList.toggle('is-flipped');
};
const flipPrepaidCard = () => {
  prepaid.classList.toggle('is-flipped');
};

credit.addEventListener('click', flipCreditCard);
prepaid.addEventListener('click', flipPrepaidCard);
