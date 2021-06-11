var artigos = ["Teatro", "JockeyClub", "Espaço das americas", "Escape", "Cinepolis", "Casa de Pedra", "Casa 92", "Feira do Benedito Calixto", "Beco do Batman", "Autódromo", "Al Janiah"]
//var Nota = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var nota = [];
var atualizaNota;

function dica(nome){

    let radios = document.getElementsByName(nome);

    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            //alert("Escolheu: " + radios[i].value);
            r = parseInt(radios[i].value);
        }
    }

    let a;
    a = Math.floor(Math.random() * 6);
    atualizaNota = (a+r)/2;
    alert("A media das notas das dicas é: "+atualizaNota);
}

notaRamdon();
function notaRamdon() {
    let b = 0;
    i = 0;
    while (i <= 9) {
        //alert(b);
        b = Math.floor(Math.random() * 5);
        nota.push(b);
        i += 1;
    }
}

function alteraNota(nome, posicao) {
    let radios = document.getElementsByName(nome);
    p = posicao;

    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            alert("Escolheu: " + radios[i].value);
            r = parseInt(radios[i].value);

            atualizarNota(p, r);
        }
    }

    /*
    splice(adiciona ,apaga , Add->esse valor)
    */
}

function atualizarNota(posicao, rr) {
    //lembrar: sem divisao porque nao há como salvar quantas pessoas visualizaram sem o auxilio de um banco
    p = posicao;
    r = rr;
    atualizaNota = nota[p] + r;
    nota.splice(p, p + 1, atualizaNota);
    exibirNota();
}

function exibirNota() {
    alert("no artigo da " + artigos[p] + " a media da nota foi " + nota[p]);
    fazerRanking(p);
}

function fazerRanking() {
    let maiorNota;
    let a;
    let copyNota = [];
    let ranking = [];
    let artigosRank = [];

    for (i = 0; i < nota.length; i++) {
        copyNota.push(nota[i]);
    }

    while (ranking.length != nota.length) {
        maiorNota = 0;
        for (i = 0; i < copyNota.length; i++) {
            if (copyNota[i] > maiorNota) {
                maiorNota = copyNota[i];
                //alert("Nova maior nota é:" + maiorNota);
            }
        }
        ranking.push(maiorNota);
        a = copyNota.indexOf(maiorNota);
        artigosRank.push(artigos[a]);
        copyNota.splice(a, 1);
    }
    //alert(artigos);
    //alert(ranking);
    a = 0;
    for (i = 0; i <= 3; i++) {
        alert(a + 1 + "-artigo: " + artigosRank[i] + " com nota de " + ranking[i]);
        a += 1;
    }
}

function pag(param) {
    window.location.href = param
}