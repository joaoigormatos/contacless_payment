import CustomComponent from '../CustomComponent';

let sut;
beforeEach(() => {
  sut = new CustomComponent().renderMobile();
});
afterEach(() => {
  document.body.innerHTML = '';
});

describe('renderMobile', () => {
  it('must render a main inside the body', () => {
    expect(sut.body.querySelector('main')).toBeTruthy();
  });
  it(
    'must call the function renderContent passing the main element as argument',
    () => {
      document.body.innerHTML = '';
      const component = new CustomComponent();
      const spy = jest.spyOn(component, 'renderContent');
      component.renderMobile();
      const main = document.querySelector('main');
      expect(spy).toHaveBeenCalled();
      expect(spy).toHaveBeenCalledWith(main);
    }
  );
  it('must render a link with mobile css inside the head', () => {
    const SUT = sut.getElementById('mobile');
    expect(SUT).toBeTruthy();
    expect(SUT.rel).toBe('stylesheet');
    expect(SUT.href).toBe('http://localhost/mobile.css');
  });
});
