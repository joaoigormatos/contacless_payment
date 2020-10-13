const inputs = document.querySelectorAll('input[type=file]');

const input = { front: inputs[0], back: inputs[1], selfie: inputs[2] }

const handleChangeFileInput = e => {
  console.log(e);
}

input.front.addEventListener('change' (e) => handleChangeFileInput(e));