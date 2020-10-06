const currencyInput = document.querySelector('input[type="currency"]');
const currency = 'BRL'; 

currencyInput.addEventListener('focus', onFocus);
currencyInput.addEventListener('blur', onBlur);

localStringToNumber(value)

const onFocus = (e) => {
  const value = e.target.value;
  e.target.value = value ? localStringToNumber(value) : '';
}

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
}

module.exports = {
  localStringToNumber,
  onFocus,
  onBlur
}