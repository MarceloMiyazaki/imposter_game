var palavra

function comparar(){
    let oxente = document.getElementById("tema").value
    if (oxente == "custom"){
        document.getElementById("custom").hidden = false
        document.getElementById("categorias").hidden = true
    }
    else if(oxente=="personagens"){
        document.getElementById("custom").hidden = true
        document.getElementById("categorias").hidden = false
    }
    else{
        document.getElementById("custom").hidden = true
        document.getElementById("categorias").hidden = true
    }
}

function comecar(){
    let oxente = document.getElementById("tema").value
    if (oxente == "prof"){
        jogar(prof)
    }
    else if(oxente == "lugares"){
        jogar(lugares)
    }
    else if(oxente == "animais"){
        jogar(animais)
    }
    else if(oxente == "pessoas"){
        jogar(pessoas)
    }
    else if(oxente == "objetos"){
        jogar(objetos)
    }
    else if(oxente =="clash"){
        jogar(clash)
    }
    else if(oxente =="poke"){
        jogar(pokemon)
    }
    else if(oxente =="mine"){
        jogar(mine)
    }
    else if(oxente =="mine2"){
        jogar(mine2)
    }
    else if(oxente =="personagens"){
        let final = ["IMPOSTOR!"]

        if(document.getElementById("herois").checked){
            final = final.concat(herois)
        }
        if(document.getElementById("desenhos").checked){
            final = final.concat(desenhos)
        }
        if(document.getElementById("filmes").checked){
            final = final.concat(filmes)
        }
        if(document.getElementById("animes").checked){
            final = final.concat(animes)
        }

        jogar(final)
    }
    else if(oxente =="custom"){
        let custom = document.getElementById("custom").value.split('\n')
        document.getElementById("custom").hidden = true
        document.getElementById("tema").value = "prof"
        jogar(custom)
    }
}

function jogar(arr){
    palavra = arr[Math.floor(Math.random()*arr.length)]
    let nu = document.getElementById("num").value
    let imposter = Math.floor(Math.random()*nu)
    for(let i = 0 ; i <nu; i++){
        if(i==imposter){
            document.getElementById("jogo").innerHTML += `<button onclick="imposter(${i+1})" id="${i+1}">${i+1}</button>`
        }
        else{
            document.getElementById("jogo").innerHTML += `<button onclick="mostrar(${i+1})" id="${i+1}">${i+1}</button>`
        }
    }
}

function imposter(indice){
    document.getElementById("result").textContent = "IMPOSTOR!"
    document.getElementById(indice).remove()
}
function mostrar(indice){
    document.getElementById("result").textContent = palavra
    document.getElementById(indice).remove()
}
function ocultar(){
    document.getElementById("result").textContent = ""

}
