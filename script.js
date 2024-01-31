var entrHeroi = prompt('Nome do seu Herói: ')
var txtFinal = document.querySelector('#txtFinal')
var nomeHeroi = document.querySelector('#nomeHeroi')
var xpHeroi = document.querySelector('#xpHeroi')
var imagem =document.querySelector('#imagem')
var xp = 0

function carregamento() {
    if (entrHeroi.length == 0) {
        alert('Por favor, digite um nome!')
    } else {
        nomeHeroi.innerHTML = `! ${entrHeroi} !`
    }
}

function botXp() {
    if (document.querySelector('#easy').checked) {
        xp += 50
    } else if (document.querySelector('#average').checked) {
        xp += 5
    } else if (document.querySelector('#hard').checked) {
        xp += 2
    }
    patenteXp()
}

function patenteXp() {
    if (xp >= 0 && xp <= 1000) {
        txtFinal.innerHTML = `** O Herói ${entrHeroi} está na patente de { DavyJones } **`
    } else if (xp > 1000 && xp <= 2000) {
        txtFinal.innerHTML = `** O Herói ${entrHeroi} está na patente de { Ferro } **`
        var brasFerro = `Assets/brasao_ferro.png`
        imagem.src = brasFerro
    } else if (xp > 2000 && xp <=5000) {
        txtFinal.innerHTML = `** O Herói ${entrHeroi} está na patente de { Bronze } **`
        var brasBron = `Assets/brasao_bronze.png`
        imagem.src = brasBron
    } else if (xp >5000 && xp <= 7000) {
        txtFinal.innerHTML = `** O Herói ${entrHeroi} está na patente de { Prata } **`
        var brasPrat = `Assets/brasao_prata.png`
        imagem.src = brasPrat
    } else if (xp > 7000 && xp <= 8000) {
        txtFinal.innerHTML = `** O Herói ${entrHeroi} está na patente de { Ouro } **`
        var brasOur = `Assets/brasao_ouro.png`
        imagem.src = brasOur
    } else if (xp > 8000 && xp <= 9000) {
        txtFinal.innerHTML = `** O Herói ${entrHeroi} está na patente de { Platina} **`
        var brasPlat = `Assets/brasao_platina.jpg`
        imagem.src = brasPlat
    } else if (xp > 9000 && xp <= 10000) {
        txtFinal.innerHTML = `** O Herói ${entrHeroi} está na patente de { Ascendente } **`
        var brasAsc = `Assets/brasao_ascendente.png`
        imagem.src = brasAsc
    } else if (xp > 10000){
        txtFinal.innerHTML = `** O Herói ${entrHeroi} está na patente de { Imortal } **`        
        var brasImor = `Assets/brasao_imortal.png`
        imagem.src = brasImor
    }
    xpHeroi.innerHTML = `XP : ${xp}`
}
