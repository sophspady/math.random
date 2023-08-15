var lista = []

function adicionar() {
    var item = document.querySelector('#item').value
    var res = document.querySelector('#res1')
    res.innerHTML = ''
    lista.push(item)
    for (i = 0; i < lista.length; i++) {
        res.innerHTML += lista[i] + '<br>'
    }
}

function sortear() {
    var res2 = document.querySelector('#res2')
    var numram = Math.floor(Math.random() * lista.length)
    res2.innerHTML = lista[numram]
}