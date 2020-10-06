const menuEntrar = document.querySelector('li#entrar');
const menuCadastrar = document.querySelector('li#cadastrar');
const formLogin = document.querySelector('form#login');
const formCadastro = document.querySelector('form#cadastro');

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