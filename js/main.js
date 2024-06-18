const form = document.getElementById('novoItem');
const lista = document.querySelector('.lista');
const itens = [];

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const nome = e.target.elements['nome'];
    const quantidade = e.target.elements['quantidade'];
    criarElemento(nome.value, quantidade.value)
    nome.value = '';
    quantidade.value = '';
})

function criarElemento(nome, qtd) {
    const novoItem = document.createElement('li');
    const numeroItem = document.createElement('strong');

    novoItem.classList.add('item');
    numeroItem.innerHTML = qtd;
    novoItem.appendChild(numeroItem)
    novoItem.innerHTML += nome
    lista.appendChild(novoItem)

    const itensAtuais = {
        nome: nome,
        quantidade: qtd,
    }

    itens.push(itensAtuais)
    localStorage.setItem('item', JSON.stringify(itens))
}
