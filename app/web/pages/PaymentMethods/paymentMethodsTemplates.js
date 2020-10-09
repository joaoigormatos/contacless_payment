export const desktopHTML = `
<link
rel="stylesheet"
href="../assets/components/PaymentMethods/desktop.css"
/>
<button id="myBtn">Open Modal</button>
<div id="myModal" class="modal">
<div class="modal-content">
  <span class="close">&times;</span>
  <main>
    <h2>Método para pagamentos</h2>
    <div class="container">
      <div class="card">
        <div class="face face1 card1" id="card1">
          <div class="content">
            <img
              height="80"
              width="80"
              src="../assets/images/plus-icon.svg"
            />
            <h3>Cartão de crédito</h3>
          </div>
        </div>
        <div class="face face2">
          <div class="content">
            <p>
              Tokenize seu cartão de crédito, deixando-o registrado.
              Segurança e praticidade na hora do pagamento.
            </p>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="face face1" id="card2">
          <div class="content">
            <img
              height="80"
              width="80"
              src="../assets/images/plus-icon.svg"
            />
            <h3>Pré-pago</h3>
          </div>
        </div>
        <div class="face face2">
          <div class="content">
            <p>
              Se não quiser registrar um cartão de crédito, vá de
              pré-pago!
              Adicione a quantia que desejar na carteira virtual, tanto
              por cartão ou boleto.
            </p>
          </div>
        </div>
      </div>
    </div>
  </main>
</div>
</div>
<script src="../assets/components/utils/modalHandler.js"></script>`;

export const mobileHTML = `    <link
rel="stylesheet"
href="../assets/components/PaymentMethods/mobile.css"
/>
<main>
<div class="container">
  <h2>Método para pagamentos</h2>
  <div class="scene scene--card">
    <div id="credit" class="card" onclick="flipCard(this)">
      <div class="face face--front">
        <img
          height="80"
          width="80"
          src="../assets/images/plus-icon.svg"
        />
        <h3>Cartão de \r\n crédito</h3>
      </div>
      <div class="face face--back">
        <p>
          Tokenize seu cartão de crédito, deixando-o registrado. Segurança
          e praticidade na hora do pagamento.
        </p>
      </div>
    </div>
  </div>
  <div class="scene scene--card">
    <div id="prepaid" class="card" onclick="flipCard(this)">
      <div class="face face--front">
        <img
          height="80"
          width="80"
          src="../assets/images/plus-icon.svg"
        />
        <h3>Pré-pago</h3>
      </div>
      <div class="face face--back">
        <p>
          Se não quiser registrar um cartão de crédito, vá de pré-pago!
          Adicione a quantia que desejar na carteira virtual, tanto por
          cartão ou boleto.
        </p>
      </div>
    </div>
  </div>
</div>
</main>
<script src="../assets/components/utils/cardFlipperHelper.js"></script>
`;