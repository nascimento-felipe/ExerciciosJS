let cpf = document.getElementById("cpfPoint")

cpf.addEventListener("input", () => {
    let ans = document.querySelector("#ans")

    /*
    RegEx, sinta-se  à vontade
    para melhorar.
     */
    let value = cpf.value.replace(/\.*/, "")

    ans.innerHTML = value
})