const localStringToNumber = (value) => {
  return Number(String(value).replace(/[^0-9.-]+/g, ''));
}

module.exports = {
  localStringToNumber
}