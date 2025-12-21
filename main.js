var palavra

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
    else if(oxente =="mine"){
        jogar(mine)
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
