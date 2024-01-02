let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTesxtoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian portuguese Female', {rate:1.2});
}
function exibirMensagemInicial(){
    exibirTesxtoNaTela('h1','Jogo do número secreto');
    exibirTesxtoNaTela('p','Escolha um número entre 1 e 10');

}

exibirTesxtoNaTela('h1','Jogo do número secreto');
exibirTesxtoNaTela('p','Escolha um número entre 1 e 10');

function verificarChute(){
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);
    
    if (chute == numeroSecreto){
        exibirTesxtoNaTela('h1', 'Acertou');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativas';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTesxtoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto){
            exibirTesxtoNaTela ('p', 'O número secreto é menor');
        }
        else{
            exibirTesxtoNaTela('p','O número secreto é maior');
        }
        tentativas ++;
        limparCampo();

    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

        if (quantidadeDeElementosNaLista == 3) {
            listaDeNumerosSorteados = [];
        }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else{
        listaDeNumerosSorteados.push(numeroEscolhido)
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas= 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}