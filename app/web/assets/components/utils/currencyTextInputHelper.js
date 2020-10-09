const currencyInput = document.querySelector('input[type="currency"]');
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

const sendValue = (element) => {
  const { value } = currencyInput;
  if (!value) return false;
  if (element.id === 'credit') {
    console.log(`Valor de ${value} adicionados na conta`);
  } else {
    console.log(`Valor de ${value} gerados no boleto`);
  }
  currencyInput.value = null;
};

currencyInput.addEventListener('focus', onFocus);
currencyInput.addEventListener('blur', onBlur);
