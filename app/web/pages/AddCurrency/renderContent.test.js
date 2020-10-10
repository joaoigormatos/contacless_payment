import { renderContent, renderMobile, renderDesktop } from './renderAddCurrencyComponent';

let sut;
beforeEach(() => {
  sut = renderContent(document.body);
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
      it('must have "Adicionar saldo" as inner text', () => {
        const SUT = sut.querySelector('#container h2');
        expect(SUT.innerHTML).toBe('Adicionar saldo');
      });
    });
    it('must render a h3 inside', () => {
      expect(sut.querySelector('#container h3')).toBeTruthy();
    });
    describe('h3 element', () => {
      it('must have "Informe o valor" as inner text', () => {
        const SUT = sut.querySelector('#container h3');
        expect(SUT.innerHTML).toBe('Informe o valor');
      });
    });
    it('must render a input inside', () => {
      expect(sut.querySelector('#container input')).toBeTruthy();
    });
    describe('input element', () => {
      it('must have rtl text direction', () => {
        const SUT = sut.querySelector('#container input');
        expect(SUT.dir).toBe('rtl');
      });
      it('must have be of type text', () => {
        const SUT = sut.querySelector('#container input');
        expect(SUT.type).toBe('text');
      });
      it('must have an empty string as initial value', () => {
        const SUT = sut.querySelector('#container input');
        expect(SUT.value).toBe('');
      });
      it('must have "R$ 0,00" as placeholder text', () => {
        const SUT = sut.querySelector('#container input');
        expect(SUT.placeholder).toBe('R$ 0,00');
      });
    });
    it('must render a div with class "btn-container" inside', () => {
      expect(sut.querySelector('#container .btn-container')).toBeTruthy();
    });
    describe('btn-container element', () => {
      it('must have two buttons inside', () => {
        const SUT = sut.querySelectorAll('#container .btn-container button');
        expect(SUT.length).toBe(2);
      });
      it('must have a two buttons with class "btn-yellow"', () => {
        const SUT = sut.querySelectorAll(
          '#container .btn-container .btn-yellow'
        );
        expect(SUT.length).toBe(2);
      });
      it('must have a two buttons with class "btn"', () => {
        const SUT = sut.querySelectorAll('#container .btn-container .btn');
        expect(SUT.length).toBe(2);
      });
      it('must have a button with id "credit" with specific inner text', () => {
        const SUT = sut.querySelector('#container .btn-container #credit');
        expect(SUT).toBeTruthy();
        expect(SUT.innerHTML).toBe('Cartão de crédito');
      });
      it('must have a button with id "boleto" with specific inner text', () => {
        const SUT = sut.querySelector('#container .btn-container #boleto');
        expect(SUT).toBeTruthy();
        expect(SUT.innerHTML).toBe('Boleto');
      });
    });
  });
  it('must render a script element', () => {
    const SUT = sut.querySelector('script');
    expect(SUT).toBeTruthy();
    expect(SUT.type).toBe('module');
    expect(SUT.src).toBe(
      'http://localhost/assets/js/currencyTextInputHelper.js'
    );
  });
});

describe('The credit button', () => {
  it.todo(
    'must redirect to dashboard page when clicked'
    /**
     * , () => {
     * const SUT = sut.getElementById('credit')
     * SUT.click();
     * expect()
     * }
     */
  );
});

describe('renderMobile', () => {
  it('must render a main inside the body', () => {
    expect(sut.querySelector('main')).toBeTruthy
  });
});


