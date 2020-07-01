function sau() {
    let pessoa = {
        nome: document.querySelector('#name').value,
        sobre: document.querySelector('#sobre').value
    }
    alert(`Olá ${pessoa['nome']} ${pessoa['sobre']}`)
}