//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo() {
    let nome = document.querySelector('input').value;
    if (nome === '') {
        alert('Por favor, insira um nome válido!');
    } else {
        amigos.push(nome);

        // Atualiza a lista na interface
        atualizarLista();

        console.log(amigos);
        limparCampo();
    }
}

function atualizarLista() {
    let lista = document.querySelector('ul'); // Seleciona a lista HTML

    // Limpa a lista existente para evitar duplicados
    lista.innerHTML = ''; 

    // Adiciona cada elemento do array como <li> na lista
    amigos.forEach((amigo) => {
        let li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function limparCampo() {
    document.querySelector('input').value = ''; // Limpa o campo de entrada
}
function sortearAmigo() {
    // Seleciona o elemento onde o resultado será exibido
    let resultado = document.getElementById('resultado');

    // Valida se há amigos no array
    if (amigos.length === 0) {
        resultado.innerHTML = 'Nenhum amigo disponível para sortear.';
        return;
    }

    // Gera um índice aleatório
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtém o nome correspondente ao índice sorteado
    let amigoSorteado = amigos[indiceAleatorio];

    // Mostra o resultado
    resultado.innerHTML = `Amigo sorteado: ${amigoSorteado}`;
}


