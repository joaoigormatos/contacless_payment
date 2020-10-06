const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(
  path.resolve(__dirname, '../pages/payment_methods.html'),
  'utf8'
);

jest.dontMock('fs');

describe('the payment_methods.html', () => {
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
  it('must render two divs with class "card" inside the main wrapper', () => {
    const SUT = document.querySelectorAll('body main .wrapper .card');
    expect(SUT.length).toBe(2);
  });
  it('must render a div with class "card-blue"', () => {
    const SUT = document.querySelector('body main .wrapper .card-blue');
    expect(SUT).toBeTruthy();
  });
  it('must render a svg inside the "card-blue" card', () => {
    const SUT = document.querySelector('body main .wrapper .card-blue svg');
    expect(SUT).toBeTruthy();
  });
  it('must render a p with text inside the "card-blue" card', () => {
    const SUT = document.querySelector('body main .wrapper .card-blue p');
    expect(SUT).toBeTruthy();
    expect(SUT.innerHTML).toBe('Adicionar<br> cartão');
  });
  it('must render a div with class "card-yellow"', () => {
    const SUT = document.querySelector('body main .wrapper .card-yellow');
    expect(SUT).toBeTruthy();
  });
  it('must render a svg inside the "card-yellow" card', () => {
    const SUT = document.querySelector('body main .wrapper .card-yellow svg');
    expect(SUT).toBeTruthy();
  });
  it('must render a p with text inside the "credit" card', () => {
    const SUT = document.querySelector('body main .wrapper .card-yellow p');
    expect(SUT).toBeTruthy();
    expect(SUT.innerHTML).toBe('Pré-pago');
  });
});
