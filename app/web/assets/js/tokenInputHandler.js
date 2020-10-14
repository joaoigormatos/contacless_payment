const tokenInput = document.querySelector('.question input');
const btnContactLess = document.querySelector('.btn-contactless');

const aceitaChaveiro = (elemento, ft) => {
  setTimeout(() => { elemento.innerText = "Aguarde"; }, ft);
  setTimeout(() => { elemento.innerText = "Aguarde."; }, ft+1000);
  setTimeout(() => { elemento.innerText = "Aguarde.."; }, ft+2000);
  setTimeout(() => { elemento.innerText = "Aguarde..."; }, ft+3000);
  setTimeout(() => { elemento.innerText = "Aguarde...."; }, ft+4000);
  setTimeout(() => { elemento.innerText = "Reconhecido"; }, ft+5000);
  setTimeout(() => { window.location.assign('../Dashboard/dashboard.html?modal=payMet'); }, ft+7000);
}

tokenInput.addEventListener('input', function (evt) {
  if (this.value.length === 10) aceitaChaveiro(evt.path[1].childNodes[3], 100)
});

btnContactLess.addEventListener('click', (evt) => {
  evt.path[1].childNodes[3].style.display = "none";
  evt.target.style.width = "300px";
  evt.target.innerText = "Aproxime o chaveiro";
  aceitaChaveiro(evt.target, 3000);
});
