const botaoDoFormulario = document.querySelector('.button-submit');
const informacoesUsuario = document.querySelectorAll('.input-text');
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/;


// pegar o evento quando clicar no botão
botaoDoFormulario.addEventListener('click', (enviarForms) => {
    enviarForms.preventDefault();
    enviarFormulario();
});

//agora vamos percorrer os inputs
informacoesUsuario.forEach((input) => {
  input.addEventListener("input", () => {
    validarCampo(input);
  });
});

function enviarFormulario(){
  //chamando a verificação se os campos foram preenchidos
  verificarSeFoiPreenchido();
}

function verificarSeFoiPreenchido(){
  //percorre o array de informações dos campos
  informacoesUsuario.forEach((input)=>{
    validarCampo(input);
  });
}

function validarCampo(input){
  const valor = input.value.trim();

  // se o campo for tipo "email" faz a verificação de formato
  if(input.type === "email"){
    if(emailRegex.test(valor) && valor !== ""){
      // email válido
      input.classList.add("campo-preenchido");
      input.classList.remove("campo-nao-preenchido");
      const aviso = input.nextElementSibling;
      if(aviso){
        aviso.style.display = "none";
      }
    }else{
      input.classList.add("campo-nao-preenchido");
      input.classList.remove("campo-preenchido");
      const aviso = input.nextElementSibling;
      if(aviso){
        if(valor === ""){
          aviso.textContent = "O campo email deve estar preenchido";
        }else{
          aviso.textContent = "Formato de email inválido, ex: usuario@exemplo.com";
        }
        aviso.style.display = 'block';
      }
    }
    return;
  }

  // para demais campos, apenas checa se não está vazio
  if(valor){
    input.classList.add("campo-preenchido");
    input.classList.remove("campo-nao-preenchido");
    const aviso = input.nextElementSibling;
    if(aviso){
      aviso.style.display = "none";
    }
  }else{
    input.classList.add("campo-nao-preenchido");
    input.classList.remove("campo-preenchido");
    const aviso = input.nextElementSibling;
    if(aviso){
      aviso.style.display = "block";
    }
  }
}
