// Declaração de uma função chamada tocaSom que aceita o id do elemento de áudio a ser tocado
function tocaSom (idElementoAudio) {
    paraSom();
    document.querySelector(idElementoAudio).play();// Toca o áudio correspondente ao id fornecido
}

function paraSom () {
    let nodeList = document.querySelectorAll('audio')
    for (let i = 0; i < nodeList.length; i++) {
    nodeList[i].pause();
    }
}
// Seleciona todos os elementos com a classe 'tecla' e armazena em uma constante chamada listaDeTeclas
const listaDeTeclas = document.querySelectorAll('.tecla');

//para
// Loop for para iterar sobre cada elemento na listaDeTeclas
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

}
