import PaymentMethodsComponent from './PaymentMethodsComponent';

let sut;
beforeEach(() => {
  sut = new PaymentMethodsComponent().renderContent(document.body);
});
afterEach(() => {
  document.body.innerHTML = '';
});

describe('renderContent', () => {
  it('must render a div with id "container"', () => {
    expect(sut.querySelector('#container')).toBeTruthy();
  });
  describe('container element', () => {
    it('must render a h2 inside', () => {
      expect(sut.querySelector('#container h2')).toBeTruthy();
    });
    describe('h2 element', () => {
      it('must have "Método para pagamentos" as inner text', () => {
        const SUT = sut.querySelector('#container h2');
        expect(SUT.innerHTML).toBe('Método para pagamentos');
      });
    });
    it.todo('must call renderCard method twice');
  });
});
