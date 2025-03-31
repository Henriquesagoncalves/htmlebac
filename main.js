const formulario = document.getElementById('formulario');
const mensagemDiv = document.getElementById('mensagem');

formulario.addEventListener('submit', function(e) {
    e.preventDefault();

    const campoA = document.getElementById('campoA').value;
    const campoB = document.getElementById('campoB').value;

    if (parseFloat(campoB) > parseFloat(campoA)) {
        mensagemDiv.textContent = "Campo B é maior que o Campo A. Formulário válido!";
        mensagemDiv.classList.remove('error');
        mensagemDiv.classList.add('success');
    } else {
        mensagemDiv.textContent = "Campo B deve ser maior que o Campo A. Formulário inválido!";
        mensagemDiv.classList.remove('success');
        mensagemDiv.classList.add('error');
    }

    formulario.reset();
});