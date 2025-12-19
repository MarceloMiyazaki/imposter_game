const prof = [
  "Engenheiro de Software",
  "Médico",
  "Advogado",
  "Professor",
  "Designer Gráfico",
  "Arquiteto",
  "Contador",
  "Enfermeiro",
  "Psicólogo",
  "Dentista",
  "Farmacêutico",
  "Jornalista",
  "Publicitário",
  "Bancário",
  "Guia de Turismo",
  "Administrador",
  "Economista",
  "Engenheiro Civil",
  "Engenheiro Mecânico",
  "Eletricista",
  "Técnico em Informática",
  "Programador",
  "Atleta",
  "Palhaço",
  "YouTuber",
  "Influencer",
  "Músico",
  "Ator",
  "Dublador",
  "Social Media",
  "Fotógrafo",
  "Dublê",
  "Redator",
  "Tradutor",
  "Astrônomo",
  "Cozinheiro",
  "Fazendeiro",
  "Pedreiro",
  "Escritor",
  "Veterinário",
  "Biólogo",
  "Físico",
  "Matemático",
  "Arqueólogo",
  "Filósofo",
  "Bibliotecário",
  "Secretário",
  "Faxineiro",
  "Jardineiro",
  "Apresentador de TV",
  "Empresário",
  "Policial",
  "Traficante",
  "Ladrão",
  "Costureiro",
  "Cabeleireiro",
  "Motorista",
  "Enfermeiro",
  "Fisioterapeuta",
  "Nutricionista",
  "Relações Internacionais"
];

var palavra

function jogar(arr){
    palavra = arr[Math.floor(Math.random()*arr.length)]
    let nu = document.getElementById("num").value
    let imposter = Math.floor(Math.random()*nu)
    for(let i = 0 ; i <nu; i++){
        if(i==imposter){
            document.getElementById("jogo").innerHTML += `<button onclick="imposter()" id="${i+1}">${i+1}</button>`
        }
        else{
            document.getElementById("jogo").innerHTML += `<button onclick="mostrar()" id="${i+1}">${i+1}</button>`
        }
    }
}

function imposter(){
    document.getElementById("result").textContent = "IMPOSTOR!"
}
function mostrar(){
    document.getElementById("result").textContent = palavra
}
function ocultar(){
    document.getElementById("result").textContent = ""
}