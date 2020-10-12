const menuEntrar = document.querySelector('li#entrar');
const menuCadastrar = document.querySelector('li#cadastrar');
const formLogin = document.querySelector('form#login');
const formCadastro = document.querySelector('form#cadastro');
const inputCEP = document.querySelector('input[name=cep]');

const validaForm = (e) => {
  if (e.key === "Backspace" || e.key === "Delete") return;

  const inputChanged = e.target.name
  const inputValue = e.target.value;
  let valorTratado;
  let somenteNumeros;

  switch (inputChanged) {
    case "cpf":
      somenteNumeros = inputValue.replace(/\D+/g, "");
      valorTratado = somenteNumeros.substr(0,3)+"."+somenteNumeros.substr(3);
      valorTratado = valorTratado.substr(0,7)+"."+valorTratado.substr(7);
      valorTratado = valorTratado.substr(0,11)+"-"+valorTratado.substr(11);
      break;
    case "phone":
      somenteNumeros = inputValue.replace(/\D+/g, "");
      valorTratado = "(" + somenteNumeros;
      valorTratado = valorTratado.substr(0,3)+") "+valorTratado.substr(3);
      valorTratado = valorTratado.substr(0,10)+"-"+valorTratado.substr(10);
      break;
    case "cep":
      somenteNumeros = inputValue.replace(/\D+/g, "");
      valorTratado = somenteNumeros.substr(0,5)+"-"+somenteNumeros.substr(5);
      break;
    case "number":
      somenteNumeros = inputValue.replace(/\D+/g, "");
      break;
    default: valorTratado = inputValue; break;
  }
  e.target.value = valorTratado;
}

const consultaCEP = (e) => {
  const consulta = e.target.value.replace("-","")
  const options = {
    method: 'GET', mode: 'cors', cache: 'default'
  }
  let resultado;

  fetch(`https://viacep.com.br/ws/${consulta}/json/`, options)
    .then(response => {
      response.json()
        .then(data =>{
          document.querySelector('input[name=address]').value = data.logradouro;
          document.querySelector('input[name=bairro]').value = data.bairro;
          document.querySelector('input[name=city]').value = data.localidade;
          document.querySelector('input[name=state]').value = data.uf;
        });
    })
    .catch(e => console.log('Erro ao consultar o cep: '+ e.message));
}

const showLogin = () => {
  menuEntrar.className = "selected";
  menuCadastrar.className = "";
  formCadastro.style.display = "none";
  formLogin.style.display = "flex";
}

const showCadastro = () => {
  menuCadastrar.className = "selected";
  menuEntrar.className = "";
  formLogin.style.display = "none";
  formCadastro.style.display = "flex";
}

menuEntrar.addEventListener('click', showLogin);
menuCadastrar.addEventListener('click', showCadastro);
formLogin.addEventListener('keyup', (e) => validaForm(e));
formCadastro.addEventListener('keyup', (e) => validaForm(e));
inputCEP.addEventListener('blur', (e) => consultaCEP(e));