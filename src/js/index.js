// 1
const abas = document.querySelectorAll(".aba");

abas.forEach(aba => {

// 2
aba.addEventListener("click", function(){

if(aba.classList.contains("selecionada")){
    return;
}

selecionarAba(aba)

mostrarInformacoesDaAba(aba)

function mostrarInformacoesDaAba(aba){

}

// 5
const informacaoSelecionada = document.querySelector(".informacao.selecionada");

informacaoSelecionada.classList.remove("selecionada")

// 6
const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`;

const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba);

informacaoASerMostrada.classList.add("selecionada")

});

});

function selecionarAba(aba){

// 3
const abaSelecionada = document.querySelector(".aba.selecionada");

abaSelecionada.classList.remove("selecionada")

// 4
aba.classList.add("selecionada")

}