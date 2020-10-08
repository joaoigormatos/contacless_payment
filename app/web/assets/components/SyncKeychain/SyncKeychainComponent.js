class SyncKeychain extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.createShadowRoot();
  }

  connectedCallback() {
    const mobileTemplate = `
      <link rel="stylesheet" href="../assets/components/SyncKeychain/desktop.css" />
      <main>
        <div class="wrapper">
          <div class="content">
            <h2>Bem vindo, <br />Fabiano!</h2>
            <p>Estamos quase lá!</p>
            <div class="btn-container">
              <button
                class="btn btn-blue"
                type="submit"
                onclick="window.location.assign('payment_methods.html')"
              >
                SEM CONTATO
              </button>
              <div class="question">
                <!-- onchange 8 digitos -->
                <input type="text" required />
                <label>USAR CÓDIGO</label>
              </div>
            </div>
          </div>
          <div class="side-image"></div>
        </div>
      </main>
      `;
    this.shadow.innerHTML = mobileTemplate;
  }
}

window.customElements.define('sync-keychain', SyncKeychain);
