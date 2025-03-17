// Seleção dos elementos do DOM
const inputAmigo = document.getElementById('amigo');
const listaAmigos = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');

// Array para armazenar os nomes dos amigos
let amigos = [];

/**
 * Função para adicionar um amigo à lista
 */
function adicionarAmigo() {
    // Obtém o valor do input e remove espaços em branco
    const nome = inputAmigo.value.trim();
    
    // Valida se o nome foi digitado
    if (nome === '') {
        alert('Por favor, digite um nome válido!');
        return;
    }
    
    // Adiciona o nome ao array
    amigos.push(nome);
    
    // Atualiza a lista visual
    atualizarListaAmigos();
    
    // Limpa o campo de input
    inputAmigo.value = '';
    
    // Coloca o foco de volta no input para facilitar a adição de novos nomes
    inputAmigo.focus();
}

/**
 * Função para atualizar a exibição da lista de amigos
 */
function atualizarListaAmigos() {
    // Limpa a lista atual
    listaAmigos.innerHTML = '';
    
    // Adiciona cada amigo como um item da lista
    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        
        // Adiciona um botão para remover o amigo da lista
        const btnRemover = document.createElement('button');
        btnRemover.textContent = 'X';
        btnRemover.classList.add('button-remove');
        btnRemover.addEventListener('click', () => removerAmigo(index));
        
        li.appendChild(btnRemover);
        listaAmigos.appendChild(li);
    });
}

/**
 * Função para remover um amigo da lista
 */
function removerAmigo(index) {
    // Remove o amigo do array pelo índice
    amigos.splice(index, 1);
    
    // Atualiza a lista visual
    atualizarListaAmigos();
}

/**
 * Função para sortear um amigo aleatoriamente
 */
function sortearAmigo() {
    // Verifica se há amigos na lista
    if (amigos.length === 0) {
        alert('Adicione pelo menos um amigo antes de sortear!');
        return;
    }
    
    // Gera um número aleatório baseado no tamanho do array
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    // Obtém o nome do amigo sorteado
    const amigoSorteado = amigos[indiceAleatorio];
    
    // Exibe o resultado
    resultado.innerHTML = `<li>🎁 ${amigoSorteado} foi sorteado! 🎁</li>`;
}

// Adiciona um event listener para permitir adicionar um amigo ao pressionar Enter
inputAmigo.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        adicionarAmigo();
    }
});

// Inicializa a lista vazia
atualizarListaAmigos();