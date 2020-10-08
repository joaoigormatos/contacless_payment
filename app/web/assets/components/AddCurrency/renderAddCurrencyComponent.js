const desktopHTML = `<link
                        rel="stylesheet"
                        href="../assets/components/AddCurrency/desktop.css"
                        />
                        <button id="myBtn">Open Modal</button>
                        <div id="myModal" class="modal">
                        <div class="modal-content">
                          <span class="close">&times;</span>
                          <main>
                            <div class="wrapper">
                              <h2>Adicionar saldo</h2>
                              <h3>Informe o valor</h3>
                              <input dir="rtl" type="currency" value="" placeholder="R$ 0,00" />
                              <div class="btn-container">
                                <button id="credit" class="btn btn-yellow">Cartão de crédito</button>
                                <button id="boleto" class="btn btn-yellow">Boleto</button>
                              </div>
                            </div>
                          </main>
                        </div>
                        </div>
                        <script src="../assets/components/utils/modalHandler.js"></script>
                        <script src="../assets/components/utils/currencyTextInputHelper.js"></script>
                        `;

const mobileHTML = `
                <main>
                <link
                  rel='stylesheet'
                  href='../assets/components/AddCurrency/desktop.css'
                />
                  <div class='wrapper'>
                    <h2>Adicionar saldo</h2>
                    <h3>Informe o valor</h3>
                    <input dir='rtl' type='currency' value='' placeholder='R$ 0,00' />
                    <div class='btn-container'>
                      <button class='btn btn-yellow'>Cartão de crédito</button>
                      <button class='btn btn-yellow'>Boleto</button>
                    </div>
                  </div>
                </main>;`;

function setHTML(o, html, clear) {
  // o: container to set the innerHTML
  // html: html text to set.
  // clear: if true, the container is cleared first (children removed)
  if (clear) o.innerHTML = '';

  // Generate a parseable object with the html:
  var dv = document.createElement('div');
  dv.innerHTML = html;

  // Handle edge case where innerHTML contains no tags, just text:
  if (dv.children.length === 0) {
    o.innerHTML = html;
    return;
  }

  for (var i = 0; i < dv.children.length; i++) {
    var c = dv.children[i];

    // n: new node with the same type as c
    var n = document.createElement(c.nodeName);

    // copy all attributes from c to n
    for (var j = 0; j < c.attributes.length; j++)
      n.setAttribute(c.attributes[j].nodeName, c.attributes[j].nodeValue);

    // If current node is a leaf, just copy the appropriate property (text or innerHTML)
    if (c.children.length == 0) {
      switch (c.nodeName) {
        case 'SCRIPT':
          if (c.text) n.text = c.text;
          break;
        default:
          if (c.innerHTML) n.innerHTML = c.innerHTML;
          break;
      }
    }
    // If current node has sub nodes, call itself recursively:
    else setHTML(n, c.innerHTML, false);
    o.appendChild(n);
  }
}

if (window.innerWidth <= 400) {
  setHTML(document.body, mobileHTML);
} else {
  setHTML(document.body, desktopHTML);
}

