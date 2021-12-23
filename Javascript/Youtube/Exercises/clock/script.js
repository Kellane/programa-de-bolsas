function carregar() {
    var msg = document.getElementById("msg");
    var img = document.getElementById("img");
    var hour = new Date().getHours();

    msg.innerHTML = `Agora são ${hour} horas!`;

    if (hour >= 0 && hour <12) {
        img.src = "./images/manhã.png";
        document.body.style.background = "#fdb509";

    } else if (hour >= 19 && hour < 18) {
        img.src = "./images/tarde.png"
        document.body.style.background = "#f06e6e";
    } else {
        img.src = "./images/noite.png"
        document.body.style.background = "#19053d";
    }

}
