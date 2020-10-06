const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(
  path.resolve(__dirname, '../pages/payment_methods.html'),
  'utf8'
);

jest.dontMock('fs');

describe('the index.html', () => {
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
  it('must render two divs with class "plastic-card" inside the main wrapper', () => {
    const SUT = document.querySelectorAll('body main .wrapper .plastic-card');
    expect(SUT.length).toBe(2);
  });
  it('must render a div with class "credit"', () => {
    const SUT = document.querySelector('body main .wrapper .credit');
    expect(SUT).toBeTruthy();
  });
  it('must render a icon inside the "credit" card', () => {
    const SUT = document.querySelector('body main .wrapper .credit i');
    expect(SUT).toBeTruthy();
  });
  it('must render a p with text inside the "credit" card', () => {
    const SUT = document.querySelector('body main .wrapper .credit p');
    expect(SUT).toBeTruthy();
    expect(SUT.innerHTML).toBe('Adicionar cartao');
  });
  it('must render a div with class "prepaid"', () => {
    const SUT = document.querySelector('body main .wrapper .prepaid');
    expect(SUT).toBeTruthy();
  });
  it('must render a icon inside the "prepaid" card', () => {
    const SUT = document.querySelector('body main .wrapper .prepaid i');
    expect(SUT).toBeTruthy();
  });
  it('must render a p with text inside the "credit" card', () => {
    const SUT = document.querySelector('body main .wrapper .prepaid p');
    expect(SUT).toBeTruthy();
    expect(SUT.innerHTML).toBe('Pré-pago');
  });
});
