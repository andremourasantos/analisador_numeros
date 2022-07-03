let numero = Number(document.querySelector('#numero').value)
let numeroContainer = document.querySelector('#numero')
let btnAdicionar = document.querySelector('#btn_adicionar')
let btnFinalizar = document.querySelector('#btn_finalizar')
let tabela = document.querySelector('#tabela')
let containerResultados = document.querySelector('#resultados')
//↑↑ VARIÁVEIS


//↓↓ VETORES
let numerosAdicionados = []


//↓↓ CHAMADAS
btnAdicionar.addEventListener("click",validarNumeroAdicionado)
btnFinalizar.addEventListener("click", resultadosFinalizar)


//↓↓ VALIDAÇÕES
function validarNumeroAdicionado() {
    numero = Number(document.querySelector('#numero').value)

    if(numero<1 || numero>100 || numero===NaN || numero===undefined){
        alert('Esse número é inválido.')
    } else{verificarVetor(numero)}
}

function verificarVetor(n){
    if(numerosAdicionados.includes(n)){alert('Esse número já foi adicionado à lista.')}else{numerosAdicionados.push(n);adicionarNumero(n);containerResultados.style.display = 'none'}
}


//↓↓ AÇÕES
function adicionarNumero(n){
    let item = document.createElement('option')
    item.text = `Número ${n} adicionado.`
    tabela.append(item)
}

function resultadosFinalizar(){
    if(numerosAdicionados.length==0){alert('Não é possível iniciar a analise com zero números.')}else{
    containerResultados.style.display = 'block'
    numerosAdicionados.sort

    document.querySelector('#total_numeros').innerText = numerosAdicionados.length
    document.querySelector('#maior_numero').innerText = numerosAdicionados[numerosAdicionados.length-1]
    document.querySelector('#menor_numero').innerText = numerosAdicionados[0]

    total = 0
    for(let soma in numerosAdicionados){
        total = total + numerosAdicionados[soma]
    }

    document.querySelector('#soma_numeros').innerText = total
    document.querySelector('#media_numeros').innerText = total / numerosAdicionados.length
}
}

//↓↓ TEMA DA PÁGINA
document.querySelector('#tema_da_pagina').addEventListener("click", function() {
    document.querySelector('body').classList.toggle('tema_escuro');
    document.querySelector('#icone_modo_claro').style.display = document.querySelector('#icone_modo_claro').style.display === 'none' ? 'block' : 'none';
    document.querySelector('#icone_modo_escuro').style.display = document.querySelector('#icone_modo_escuro').style.display === 'none' ? 'block' : 'none';
})