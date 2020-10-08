const desktopHTML = `
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

const mobileHTML = `
<link
rel="stylesheet"
href="../assets/components/PaymentMethods/mobile.css"
/>
<div class="container">
<div class="card">
  <div class="face face1 card1" id="card1">
    <div class="content">
      <img height="80" width="80" src="../assets/images/plus-icon.svg" />
      <h3>Cartão de <br>crédito</h3>
    </div>
  </div>
  <div class="face face2">
    <div class="content">
      <p>
        Tokenize seu cartão de crédito, deixando-o registrado. Segurança e
        praticidade na hora do pagamento.
      </p>
    </div>
  </div>
</div>
<div class="card">
  <div class="face face1" id="card2">
    <div class="content">
      <img height="80" width="80" src="../assets/images/plus-icon.svg" />
      <h3>Pré-pago</h3>
    </div>
  </div>
  <div class="face face2">
    <div class="content">
      <p>
        Se não quiser registrar um cartão de crédito, vá de pré-pago!
        Adicione a quantia que desejar na carteira virtual, tanto por
        cartão ou boleto.
      </p>
    </div>
  </div>
</div>
</div>
`;

function setHTML(body, html, clear) {
  // body: container to set the innerHTML
  // html: html text to set.
  // clear: if true, the container is cleared first (children removed)
  if (clear) body.innerHTML = '';

  // Generate a parseable object with the html:
  const dv = document.createElement('div');
  dv.innerHTML = html;

  // Handle edge case where innerHTML contains no tags, just text:
  if (dv.children.length === 0) {
    body.innerHTML = html;
    return;
  }

  for (let i = 0; i < dv.children.length; i++) {
    const child = dv.children[i];

    // node: new node with the same type as child
    const node = document.createElement(child.nodeName);

    // copy all attributes from child to node
    for (let j = 0; j < child.attributes.length; j++)
      node.setAttribute(child.attributes[j].nodeName, child.attributes[j].nodeValue);

    // If current node is a leaf, just copy the appropriate property (text or innerHTML)
    if (child.children.length == 0) {
      switch (child.nodeName) {
        case 'SCRIPT':
          if (child.text) node.text = child.text;
          break;
        default:
          if (child.innerHTML) node.innerHTML = child.innerHTML;
          break;
      }
    }
    // If current node has sub nodes, call itself recursively:
    else setHTML(node, child.innerHTML, false);
    body.appendChild(node);
  }
}

if (window.innerWidth <= 400) {
  setHTML(document.body, mobileHTML);
} else {
  setHTML(document.body, desktopHTML);
}
