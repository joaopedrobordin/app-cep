function BuscarCEP() {
    let cep = document.getElementById("cep").value

    console.log(cep)

    $.ajax({
        type: "GET",
        url: `https://viacep.com.br/ws/${cep}/json`,
        success: (function (endereco){
            let bairro = endereco.bairro
            let rua = endereco.logradouro
            let cidade = endereco.localidade
            let uf = endereco.uf
            document.getElementById("endereco-completo").innerHTML = `Rua/Avenida: ${rua} <br> bairro: ${bairro} <br> cidade: ${cidade} -${uf}`
            console.dir(endereco)
        })
    })

}
document.getElementById("pesquisa").addEventListener("click", function () {
    BuscarCEP()
})

function BuscarCEP2() {
    let cep = document.getElementById("cep2").value

    console.log(cep)

    $.ajax({
        type: "GET",
        url: `https://viacep.com.br/ws/${cep}/json`,
        success: (function (endereco){
            let bairro = endereco.bairro
            let rua = endereco.logradouro
            let cidade = endereco.localidade
            let uf = endereco.uf
            document.getElementById("endereco-completo").innerHTML = `Rua/Avenida: ${rua} <br> bairro: ${bairro} <br> cidade: ${cidade} -${uf}`
            console.dir(endereco)
        })
    })

}
document.getElementById("pesquisa").addEventListener("click", function () {
    BuscarCEP()
})
