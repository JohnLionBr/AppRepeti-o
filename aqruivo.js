function contar() {
    let init = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if(init.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('Erro, faltam dados')
    } else {
        res.innerHTML = 'Contando: '
        let i = Number(init.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <= 0){
            window.alert('Passo inválido! Considerando passo 1')
            p = 1
        }
        if (i < f) {
            //Contagem crescent
            for(let c = i; c <= f; c+=p){
            res.innerHTML += `${c} `
            }

        } else {
            //Contagem decrescente
            for(let c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} `

            }
        }
        
    }
}
