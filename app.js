let amigos = [];

function adicionarAmigo() {
    let tagAmigo = document.querySelector('input');
    let amigo = tagAmigo.value;

    if (amigo != '') {
        amigos.push(amigo);
        exibirLista();
        tagAmigo.value = '';

    } else {
        alert('Por favor, insira um nome.');
    }
}

function exibirLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '' ;

    amigos.forEach((amigo) => {
        let item = document.createElement('li');
        lista.append(amigo,item);
    })
}