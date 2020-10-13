class CustomComponent {
  renderContent() {}

  renderModal(body) {
    const modalOpener = document.createElement('button');
    modalOpener.id = 'myBtn';
    modalOpener.innerHTML = 'OPEN MODAL';
    body.appendChild(modalOpener);

    const modalBackgound = document.createElement('div');
    modalBackgound.id = 'myModal';
    modalBackgound.classList.add('modal');
    body.appendChild(modalBackgound);

    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');
    modalBackgound.appendChild(modalContent);

    const modalCloseButton = document.createElement('span');
    modalCloseButton.classList.add('close');
    modalCloseButton.innerHTML = '&times';
    modalContent.appendChild(modalCloseButton);

    const modalStyle = document.createElement('link');
    modalStyle.id = 'modal';
    modalStyle.rel = 'stylesheet';
    modalStyle.href = '../../assets/css/modal.css';
    document.head.appendChild(modalStyle);

    const modalScript = document.createElement('script');
    modalScript.type = 'module';
    modalScript.src = '../../assets/js/modalHandler.js';
    body.appendChild(modalScript);

    return modalContent;
  }

  renderMobile() {
    const body = document.body;
    const main = document.createElement('main');
    body.appendChild(main);

    this.renderContent(main);

    const head = document.head;
    const style = document.createElement('link');
    style.id = 'mobile';
    style.rel = 'stylesheet';
    style.href = './mobile.css';
    head.appendChild(style);

    return document;
  }

  renderDesktop() {
    const body = document.body;

    const modalContent = this.renderModal(body);

    this.renderContent(modalContent);

    const style = document.createElement('link');
    style.id = 'desktop';
    style.rel = 'stylesheet';
    style.href = './desktop.css';
    document.head.appendChild(style);

    return document;
  }

  renderComponent() {
    
    const globalStyle = document.createElement('link');
    globalStyle.id = 'global';
    globalStyle.rel = 'stylesheet';
    globalStyle.href = '../../assets/css/style.css';
    document.head.appendChild(globalStyle);

    if (window.innerWidth <= 500) {
      this.renderMobile();
    } else {
      this.renderDesktop();
    }
  }
}

export default CustomComponent;
