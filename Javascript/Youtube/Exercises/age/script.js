function verificar() {
    var year = new Date().getFullYear();
    var fyear =  Number(document.getElementById("year").value);
    var res = document.getElementById("res");

    console.log(fyear)
    if (fyear > year || fyear == 0 ) {
        window.alert("[ERRO] Ano inválido!");
    } else {
        var fsex = document.getElementsByName("radsex");
        var age = year - fyear;
        var genero = ""
        var img = document.createElement('img');
        img.setAttribute("id", "img")

        if (fsex[0].checked) {
            genero = "masculino";
            if (age >=0 && age <10) {
                img.setAttribute("src", "./images/menino.png");
            } else if (age >= 10 && age <21) {
                img.setAttribute("src", "./images/adolescente-M.png");
            } else if (age >= 21 && age < 50) {
                img.setAttribute("src", "./images/adulto.png");
            } else {
                img.setAttribute("src", "./images/idoso.png");
            }
        } else {
            genero = "mulher";
            if (age >=0 && age <10) {
                img.setAttribute("src", "./images/menina.png");
            } else if (age >= 10 && age <21) {
                img.setAttribute("src", "./images/jovem-F.png");
            } else if (age >= 21 && age < 50) {
                img.setAttribute("src", "./images/adulta.png");
            } else {
                img.setAttribute("src", "./images/idosa.png");
            }
        }
        res.style.textAlign = 'center';
        res.innerHTML = `identificamos ${genero} com ${age} anos`
        res.appendChild(img)
    }
}