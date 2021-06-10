var artigos = ["loja", "academia","bar","gol"]
var Nota = [1,3,5,9,6,5,3,7,1,10,2,8,75];
var atualizaNota;


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
    p = posicao;
    r = rr;
    atualizaNota = Nota[p] + r;
    Nota.splice(p, p + 1, atualizaNota);
    exibirNota();
}

function exibirNota() {
    alert("no artigo da " + artigos[p] + " a media da nota foi " + Nota[p]);
    fazerRanking(p);
}

function fazerRanking() {
    let maiorNota;
    let a;
    let copyNota = [];
    let ranking = [];
    let artigosRank=[];

    for(i=0; i < Nota.length; i++){
       copyNota.push(Nota[i]);
    }

    while(ranking.length != Nota.length){
        maiorNota=0;
        for (i = 0; i < copyNota.length; i++) {
            if (copyNota[i] > maiorNota) {
                maiorNota = copyNota[i];
                //alert("Nova maior nota é:" + maiorNota);
            }
        }
        ranking.push(maiorNota);
        a = copyNota.indexOf(maiorNota);
        artigosRank.push(artigos[a]);
        copyNota.splice(a,1);        
    }
    alert(artigos);
    alert(ranking);

    for(i=0; i <= 3; i++){
        alert(i+1+"-artigo: "+artigosRank[i]+" com nota de "+ranking[i]);
    }
}
