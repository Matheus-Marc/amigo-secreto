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

function sortearAmigo() {
    let qtdDeAmigos = amigos.length;

    if( qtdDeAmigos != 0) {
        let indiceAleatorio = Math.floor(Math.random() * qtdDeAmigos);
        console.log(indiceAleatorio);
        let amigoSecreto = amigos[indiceAleatorio];

        let tagResultadoo = document.getElementById('resultado');
        tagResultadoo.innerHTML = `Seu amigo secreto é ${amigoSecreto}.`;
    }
}