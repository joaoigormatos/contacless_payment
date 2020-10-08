export const desktopHTML = `<link
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

export const mobileHTML = `
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
