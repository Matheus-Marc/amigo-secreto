let amigos = [];

function adicionarAmigo () {
    let tagAmigo = document.querySelector('input');
    let amigo = tagAmigo.value;

    if (amigo != '') {
        amigos.push(amigo);
        tagAmigo.value = '';

    } else {
        alert('Por favor, insira um nome.');
    }
}