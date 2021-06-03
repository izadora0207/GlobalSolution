function alteraNota(){
    var radios = document.getElementsByName("fb");

    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            alert("Escolheu: " + radios[i].value);
        }
    }
}
