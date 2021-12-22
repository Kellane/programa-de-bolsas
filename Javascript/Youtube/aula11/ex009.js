
function verificar() {
    var country = document.getElementById("country").value;
    var res = document.getElementById("res")
    
    if (country.toLowerCase() == "brasil") {
        res.innerHTML = ("Você é brasileiro");
    } else {
        res.innerHTML = ("Você é estrangeiro");
    }
}