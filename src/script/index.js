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
//aqui colocamos um addEventListener e colocamos o evento de input
//É uma coleção de elementos de formulário (NodeList ou Array) que pegará o input inclusive o textArea que está dentro de input-text () => {}.
input.addEventListener("input", () => {});
});

function enviarFormulario(){
    //chamando a verificação se os campos forão preenchidos
    verificarSeFoiPreenchido();
}

function verificarSeFoiPreenchido(){
    //percorre o array de informações dos campos
    informacoesUsuario.forEach((inputs) => {
        //testando a validão dos campos recebendo os inputs
        validarCampo(inputs);
    });
}

function validarCampo(input) {
  const valor = input.value.trim();

  // Se o campo for de tipo "email" faz a verificação de formato
  if (input.type === "email") {
    if (emailRegex.test(valor)) {
      input.classList.add("campo-preenchido");
      input.classList.remove("campo-nao-preenchido");
    } else {
      input.classList.add("campo-nao-preenchido");
      input.classList.remove("campo-preenchido");
    }
    return; // sai da função, já tratou
  }

  // Para os demais campos, apenas checa se não está vazio
  if (valor) {
    input.classList.add("campo-preenchido");
    input.classList.remove("campo-nao-preenchido");
  } else {
    input.classList.add("campo-nao-preenchido");
    input.classList.remove("campo-preenchido");
  }
}
