const inputs = document.querySelectorAll('input[type=file]');

const input = { front: inputs[0], back: inputs[1], selfie: inputs[2] }

const handleChangeFileInput = e => {
  alert('entrou');
  console.log(e);
}

console.log(input.front)

input.front.addEventListener('change', (e) => handleChangeFileInput(e));