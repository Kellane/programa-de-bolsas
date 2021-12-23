function contar(){
    let start = Number(document.getElementById('start').value)
    let end = Number(document.getElementById('end').value)
    let step = Number(document.getElementById('step').value)
    let res = document.getElementById('res')

    if(start.length == 0 || end.length == 0 || step.length == 0){
        window.alert("[ERRO] FALTAM DADOS!!!!")
        res.innerHTML = `Impossível Contar.... \u{1F61E}`
    }
    else{
        res.innerHTML= 'Contando:<br/>'

        if(step <= 0)
        {
            window.alert('Passo inválido....\n Considerando passo = 1')
            step=1
        }
        
        if(start < end){
            //Contagem Crescente
            for(let index = start ; index <= end; index += step )
            {
            res.innerHTML += ` ${index}`
            }
           
        }
        else{
            //Contagem Decrescente
            for(let index = start; index >= end; index -= step)
            {
                res.innerHTML += ` ${index}`
            }
            
        }
        res.innerHTML += ` \u{1F3C1}`
    }
    
}