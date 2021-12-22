var hour = new Date().getHours();

console.log(`Agora é ${hour} horas`)
if(hour <= 12) {
    console.log("Bom Dia!!!");
} else if(hour <= 18) {
    console.log("Boa Tarde!!!");
} else {
    console.log("Boa Noite!!!");
}