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
      valorTratado = inputValue.replace(/\D+/g, "");
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

  fetch(`https://viacep.com.br/ws/${consulta}/json/`, options)
    .then(response => {
      response.json()
        .then(data =>{
          if (data.logradouro !== undefined) {
            document.querySelector('input[name=address]').value = data.logradouro;
            document.querySelector('input[name=bairro]').value = data.bairro;
            document.querySelector('input[name=city]').value = data.localidade;
            document.querySelector('input[name=state]').value = data.uf;
          }
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

const handleSubmitLogin = (e) => {
  e.preventDefault();

  const cpf = e.target[0].value.replace(/\D+/g, "");
  const senha = e.target[1].value;

  fetch('../../assets/json/users.json')
    .then(response => {
      response.json()
        .then(data =>{
          const resultado = data.reduce((acumulador, user) => {
            if (user.cpf === cpf && user.senha === senha) return true;
            return acumulador;
          },false)

          if (resultado === true) window.location.href = "../dashboard.html";
          else alert('Usuário não encontrado, tente novamente');
        });
    })
    .catch(e => console.log('Erro ao consultar o usuário: '+ e.message));
}

const handleSubmitCadastro = (e) => {
  e.preventDefault();
  window.location.href = "../ContinuarCadastro/continuarcadastro.html";
}

menuEntrar.addEventListener('click', showLogin);
menuCadastrar.addEventListener('click', showCadastro);
inputCEP.addEventListener('blur', (e) => consultaCEP(e));
formLogin.addEventListener('keyup', (e) => validaForm(e));
formCadastro.addEventListener('keyup', (e) => validaForm(e));
formLogin.addEventListener('submit', (e) => handleSubmitLogin(e));
formCadastro.addEventListener('submit', (e) => handleSubmitCadastro(e));