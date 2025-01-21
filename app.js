//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = []

function adicionarAmigo() {
    
    let nome = document.querySelector('input').value
    if(nome == ''){
        alert('Insira um nome!');
    }else{
        amigos.push(nome);
        console.log(amigos);
        limparCampo();
    }
    exibirLista()
}
function exibirLista(){
    for (let i = 0; i < amigos.length; i++) {
        console.log(amigos[i])
    }
}
function limparCampo() {
    nome = document.querySelector('input');
    nome.value = '';
}


