const inputs = document.querySelectorAll('input[type=file]');
const form = document.querySelector('form#continuarcadastro');

const input = { front: inputs[0], back: inputs[1], selfie: inputs[2] }

const handleChangeFileInput = (e, input) => {
  if (e.target.files.length > 0) {
    e.path[1].childNodes[3].src = `../../assets/images/successUpload${input}.png`;
  }
}

const handleSubmit = e => {
  e.preventDefault();
  console.log(e);

  let anyEnpty = false;
  for (i=0;i<3;i++) {
    if (e.target[i].files.length === 0 ) {
      anyEnpty = true;
      break;
    }
  }
  if (anyEnpty) alert('Insira todas as fotos!');
  else window.location.href = "../SyncKeychain/sync_keychain.html"
}

input.front.addEventListener('change', (e) => handleChangeFileInput(e, 'RGFrente'));
input.back.addEventListener('change', (e) => handleChangeFileInput(e, 'RGVerso'));
input.selfie.addEventListener('change', (e) => handleChangeFileInput(e, 'Selfie'));
form.addEventListener('submit', (e) => handleSubmit(e));