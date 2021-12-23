function tabuada(){

    let num = Number(document.getElementById('num').value)
    let tab = document.getElementById('seltab')

    if (num.length == 0){
        alert("Digite um número!")
    } else{
        let count=1
        tab.innerHTML= '' //Limpa o Select
        
        while(count<= 10){
            let item = document.createElement('option')
            item.text = `${num} x ${count} = ${num*count}`
            item.value= `tab${count}`
            tab.appendChild(item)
            count++;
        }
    }
    
}