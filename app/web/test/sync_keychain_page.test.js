const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(
  path.resolve(__dirname, '../pages/sync_keychain.html'),
  'utf8'
);

jest.dontMock('fs');

describe('the sync_keychain.html', () => {
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
  it('must render a h1 inside the main', () => {
    const SUT = document.querySelector('body main .wrapper h2');
    expect(SUT).toBeTruthy();
    expect(SUT.innerHTML).toBe('Bem vindo, Fabiano!');
  });
  it('must render a image with class "keychain" inside the main wrapper', () => {
    const SUT = document.querySelector('body main .wrapper .keychain');
    expect(SUT).toBeTruthy();
  });
  it('must render a image with class "keychain" inside the main wrapper', () => {
    const SUT = document.querySelector('body main .wrapper .keychain');
    expect(SUT).toBeTruthy();
  });
  // it('must render two buttons with class "btn" inside the main wrapper', () => {
  //   const SUT = document.querySelectorAll(
  //     'body main .wrapper .btn-container .btn'
  //   );
  //   expect(SUT.length).toBe(2);
  // });
  // it('must render a button with class "btn-blue" inside the main wrapper', () => {
  //   const SUT = document.querySelectorAll(
  //     'body main .wrapper .btn-container .btn-blue'
  //   );
  //   expect(SUT).toBeTruthy();
  //   expect(SUT[0].innerHTML).toMatch(/(SEM CONTATO)/i);
  //   expect(SUT[1].innerHTML).toMatch(/(USAR CÓDIGO)/i);
  // });
});
