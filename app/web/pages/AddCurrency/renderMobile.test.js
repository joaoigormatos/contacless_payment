import { renderMobile } from './renderAddCurrencyComponent';

let sut;
beforeEach(() => {
  sut = renderMobile(document);
});
afterEach(() => {
  document.body.innerHTML = '';
});

describe('renderMobile', () => {
  it('must render a main inside the body', () => {
    expect(sut.body.querySelector('main')).toBeTruthy();
  });
  it.todo(
    'must call the function renderContent passing the main element as argument'
  );
  it('must render a link with mobile css inside the head', () => {
    const SUT = sut.getElementById('mobile')
    expect(SUT).toBeTruthy();
    expect(SUT.rel).toBe('stylesheet');
    expect(SUT.href).toBe('http://localhost/mobile.css');
  });
});
