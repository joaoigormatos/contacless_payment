import PaymentMethodsComponent from './PaymentMethodsComponent';

let sut;
const cardType = 'credit';
const cardTypeTitle = 'credit card';
const cardBackText = 'back text provided';
beforeEach(() => {
  sut = new PaymentMethodsComponent().renderCard(
    document.body,
    cardType,
    cardTypeTitle,
    cardBackText
  );
});
afterEach(() => {
  document.body.innerHTML = '';
});

describe('renderContent', () => {
  it('must throw error if card type is not provided', () => {
    document.body.innerHTML = '';
    expect(() =>
      new PaymentMethodsComponent().renderCard(
        document.body,
        cardType,
        null,
        cardBackText
      )
    ).toThrow(Error('A card card type title must be provided.'));
  });
  it('must throw error if card type title is not provided', () => {
    document.body.innerHTML = '';
    expect(() =>
      new PaymentMethodsComponent().renderCard(
        document.body,
        null,
        cardTypeTitle,
        cardBackText
      )
    ).toThrow(Error('A card type must be provided.'));
  });
  it('must throw error if card type is not provided', () => {
    document.body.innerHTML = '';
    expect(() =>
      new PaymentMethodsComponent().renderCard(
        null,
        cardType,
        cardTypeTitle,
        cardBackText
      )
    ).toThrow(Error('A container must be provided for the card.'));
  });
  it('must throw error if card type title is not provided', () => {
    document.body.innerHTML = '';
    expect(() =>
      new PaymentMethodsComponent().renderCard(
        document.body,
        cardType,
        cardTypeTitle,
        null
      )
    ).toThrow(Error('A card back text must be provided.'));
  });
  it('must render a div with class "scene" and "scene--card"', () => {
    const SUT = sut.querySelector('div');
    expect(SUT.classList.contains('scene')).toBeTruthy();
    expect(SUT.classList.contains('scene--card')).toBeTruthy();
  });
  describe('scene card element', () => {
    it('must render a div with class "card"', () => {
      const SUT = sut.querySelector('div div');
      expect(SUT.classList.contains('card')).toBeTruthy();
    });
    describe('card element', () => {
      it('must render a div with class "face" and "face--front"', () => {
        const SUT = sut.querySelector('div div div');
        expect(SUT.classList.contains('face')).toBeTruthy();
        expect(SUT.classList.contains('face--front')).toBeTruthy();
      });
      describe('front face element', () => {
        it('must render a image component', () => {
          const SUT = sut.querySelector('div div .face--front img');
          expect(SUT.height).toBe(80);
          expect(SUT.width).toBe(80);
          expect(SUT.src).toBe('http://localhost/assets/images/plus-icon.svg');
        });
        it('must render a h3 component with specific text', () => {
          const SUT = sut.querySelector('div div .face--front h3');
          expect(SUT.innerHTML).toBe(cardTypeTitle);
        });
      });
      it('must render a div with class "face" and "face--back"', () => {
        const SUT = sut.querySelector('div div .face--back');
        expect(SUT).toBeTruthy();
        expect(SUT.classList.contains('face')).toBeTruthy();
      });
      describe('back face element', () => {
        it('must render a paragraph component with text', () => {
          const SUT = sut.querySelector('div div .face--back p');
          expect(SUT.innerHTML).toBe(cardBackText);
        });
        it('must render a anchor component when window is smaller than 400px', () => {
          document.body.innerHTML = '';
          window.innerWidth = 400;
          sut = new PaymentMethodsComponent().renderCard(
            document.body,
            cardType,
            cardTypeTitle,
            cardBackText
          );
          const SUT = sut.querySelector('div div .face--back a');
          expect(SUT.innerHTML).toBe('Continuar');
        });
      });
    });
  });
});
