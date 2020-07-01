let cpf = document.getElementById("cpf")

cpf.addEventListener("input", () => {
    let ans = document.querySelector("#ans")

    let value = cpf.value.replace(/^([\d]{3})([\d]{3})([\d]{3})([\d]{2})$/, "$1.$2.$3-$4")

    ans.innerHTML = value

})