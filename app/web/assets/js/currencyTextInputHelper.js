import {
  handleSuccess,
} from '../../pages/SuccessPage/successPage.js';

const currencyInput = document.querySelector('input[type="currency"]');
const creditButton = document.getElementById('credit');
const boletoButton = document.getElementById('boleto');
const currency = 'BRL';

export const localStringToNumber = (value) => {
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

const sendCreditValue = () => {
  const { value } = currencyInput;
  if (!value) return false;
  handleSuccess("credit", value, document)
  currencyInput.value = null;
};
const sendBoletoValue = () => {
  const { value } = currencyInput;
  if (!value) return false;
  handleSuccess("boleto", value, document)
  currencyInput.value = null;
};

currencyInput.addEventListener('focus', onFocus);
currencyInput.addEventListener('blur', onBlur);
creditButton.addEventListener('click', sendCreditValue);
boletoButton.addEventListener('click', sendBoletoValue);
