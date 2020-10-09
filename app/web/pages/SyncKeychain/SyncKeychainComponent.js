class SyncKeychain extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const mobileTemplate = `
      `;
    this.shadow.innerHTML = mobileTemplate;
  }
}

customElements.define('sync-keychain', SyncKeychain);
