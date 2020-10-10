import { renderDesktop } from './renderAddCurrencyComponent';

let sut;
beforeEach(() => {
  sut = renderDesktop(document);
});
afterEach(() => {
  document.body.innerHTML = '';
});

describe('renderMobile', () => {
  it.todo('must call renderModal passing the body as argument');
  it.todo(
    'must call the function renderContent passing the modal element as argument'
  );
  it('must render a link with mobile css inside the head', () => {
    const SUT = sut.getElementById('desktop');
    expect(SUT).toBeTruthy();
    expect(SUT.rel).toBe('stylesheet');
    expect(SUT.href).toBe('http://localhost/desktop.css');
  });
});
