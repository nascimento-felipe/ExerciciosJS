let cpf = document.getElementById("cpfPoint")

cpf.addEventListener("input", () => {
    let ans = document.querySelector("#ans")

    let value = cpf.value.replace(/\.*/, "")

    ans.innerHTML = value
})