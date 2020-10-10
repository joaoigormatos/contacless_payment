import CustomComponent from './CustomComponent';

let sut;
beforeEach(() => {
  sut = new CustomComponent().renderDesktop();
});
afterEach(() => {
  document.body.innerHTML = '';
});

describe('renderDesktop', () => {
  it('must call renderModal passing the body as argument', () => {
    document.body.innerHTML = '';
    const component = new CustomComponent();
    const spy = jest.spyOn(component, 'renderModal');
    component.renderDesktop(document.body);
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith(document.body);
  });
  it('must call the function renderContent passing the modal element as argument', () => {
    document.body.innerHTML = '';
    const component = new CustomComponent();
    const spy = jest.spyOn(component, 'renderContent');
    component.renderDesktop(document.body);
    expect(spy).toHaveBeenCalled();
    const modal = document.getElementsByClassName('modal-content')[0];
    expect(spy).toHaveBeenCalledWith(modal);
  });
  it('must render a link with desktop css inside the head', () => {
    const SUT = sut.getElementById('desktop');
    expect(SUT).toBeTruthy();
    expect(SUT.rel).toBe('stylesheet');
    expect(SUT.href).toBe('http://localhost/desktop.css');
  });
});
