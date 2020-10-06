const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(
  path.resolve(__dirname, '../pages/add_currency.html'),
  'utf8'
);

jest.dontMock('fs');

describe('the add_currency.html', () => {
  beforeEach(() => {
    document.documentElement.innerHTML = html.toString();
  });
  afterEach(() => {
    jest.resetModules();
  });
  it('must render the head', () => {
    const SUT = document.querySelector('head');
    expect(SUT).toBeTruthy();
  });
  it('must render the title', () => {
    const SUT = document.querySelector('head title');
    expect(SUT).toBeTruthy();
    expect(SUT.innerHTML).toBe('DriveAndPay');
  });
  it('must render the body', () => {
    const SUT = document.querySelector('body');
    expect(SUT).toBeTruthy();
  });
  it('must render a div with class "wrapper"', () => {
    const SUT = document.querySelector('body main .wrapper');
    expect(SUT).toBeTruthy();
  });
  it('must render a h2 inside the wrapper', () => {
    const SUT = document.querySelector('body main .wrapper h2');
    expect(SUT).toBeTruthy();
    expect(SUT.innerHTML).toBe('Adicionar saldo');
  });
  it('must render a h3 inside the wrapper', () => {
    const SUT = document.querySelector('body main .wrapper h3');
    expect(SUT).toBeTruthy();
    expect(SUT.innerHTML).toBe('Informe o valor');
  });
  it('must render a p inside the wrapper', () => {
    const SUT = document.querySelector('body main .wrapper p');
    expect(SUT).toBeTruthy();
    expect(SUT.innerHTML).toBe('R$ <span class="add-currency-value"></span>');
  });
  it('must render two buttons with class "secondary-button" inside the main wrapper', () => {
    const SUT = document.querySelectorAll('body main .wrapper .secondary-button');
    expect(SUT.length).toBe(2);
  });
  it('must render a button with class "credit-card-button" inside the main wrapper', () => {
    const SUT = document.querySelector('body main .wrapper .credit-card-button');
    expect(SUT).toBeTruthy();
    expect(SUT.innerHTML).toBe('Cartão de crédito');
  });
  it('must render a button with class "boleto-button" inside the main wrapper', () => {
    const SUT = document.querySelector('body main .wrapper .boleto-button');
    expect(SUT).toBeTruthy();
    expect(SUT.innerHTML).toBe('Boleto');
  });
});
