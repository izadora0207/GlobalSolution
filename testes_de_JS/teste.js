var artigos = ["loja","academia"]
var Nota = [0,0];
var atualizaNota;


function alteraNota(nome, posicao){
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

function atualizarNota(posicao, rr){
    p = posicao;
    r = rr;
    atualizaNota = Nota[p] + r;
    Nota.splice(p, p+1, atualizaNota);
    exibirNota();
}

function exibirNota(){ 
    alert("no artigo da " + artigos[p] + " a media da nota foi " + Nota[p]);     
}
