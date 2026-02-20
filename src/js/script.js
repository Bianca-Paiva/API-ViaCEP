const campoCep = document.querySelector("#cep");
const btnBuscar = document.querySelector("#btnBuscar");

const campoLogradouro = document.querySelector("#logradouro");
const campoCidade = document.querySelector("#cidade");
const campoBairro = document.querySelector("#bairro");
const campoEstado = document.querySelector("#estado");

async function buscarCep () {
    const cep = campoCep.value;

    const url = `https://viacep.com.br/ws/${cep}/json/`;
    
    const resposta = await fetch(url);

    const dadosCep = await resposta.json();

    console.log(dadosCep);


    campoLogradouro.value = dadosCep.logradouro;
    campoCidade.value = dadosCep.localidade;
    campoBairro.value = dadosCep.bairro;
    campoEstado.value = dadosCep.uf;
}

btnBuscar.addEventListener('click', buscarCep);