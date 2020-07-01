const btn = document.querySelector("#btn-soma") //botão de soma

btn.addEventListener("click", () => { //ação de clique no botão
    const n1 = document.querySelector("#soma1")
    const n2 = document.querySelector("#soma2")

    if (Number(n1.value) && Number(n2.value)) { //verificação se é um valor numérico
        const soma = Number(n1.value) + Number(n2.value)
        document.querySelector("#resultado-soma").innerHTML = `O valor da soma é ${soma}`
    } else { //else para caso não for um valor numérico
        alert("Por favor, digite valores numéricos.")
    }
})