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
  it('must render a text input inside the wrapper', () => {
    const SUT = document.querySelector('body main .wrapper input');
    expect(SUT).toBeTruthy();
  });
  it('must render two buttons with class "btn-yellow" inside the main wrapper', () => {
    const SUT = document.querySelectorAll('body main .wrapper .btn-yellow');
    expect(SUT.length).toBe(2);
    expect(SUT[0].innerHTML).toBe('Cartão de crédito');
    expect(SUT[1].innerHTML).toBe('Boleto');

  });
});
