import AddCurrencyComponent from './AddCurrencyComponent';

let sut;
beforeEach(() => {
  sut = new AddCurrencyComponent().renderSuccessScreen(document.body);
});
afterEach(() => {
  document.body.innerHTML = '';
});

describe('renderSuccessScreen', () => {
  it('must render a hidden div with id "success"', () => {
    const SUT = sut.querySelector('#success');
    expect(SUT).toBeTruthy();
    expect(SUT.classList.contains('hidden')).toBeTruthy();
    expect(SUT.style.display).toBe('none');
  });
  describe('success container', () => {
    it('must have rendered an image inside', () => {
      const SUT = sut.querySelector('#success img');
      expect(SUT).toBeTruthy();
      expect(SUT.src).toBe('http://localhost/assets/images/success-icon.svg');
    });
    it('must have rendered a h2 inside with empty inner text', () => {
      const SUT = sut.querySelector('#success h2');
      expect(SUT).toBeTruthy();
      expect(SUT.id).toBe('success-header');
      expect(SUT.innerHTML).toBe('');
    });
    it('must have rendered a p inside with empty inner text', () => {
      const SUT = sut.querySelector('#success p');
      expect(SUT).toBeTruthy();
      expect(SUT.id).toBe('success-message');
      expect(SUT.innerHTML).toBe('');
    });
  });
});
