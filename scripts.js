let num = document.querySelector('input#numero')
let lista = document.querySelector('select#lista')
const res=document.querySelector('div#resposta')
let values = []
 function isNumero(n){
    if(Number(n)>=1 && Number(n)<=100){
        return true
    }else {
        return false
     }
 } 

 function inLista(n, l){
    if(l.indexOf(Number(n)) !=-1){
        return true
    }else{
        return false
    }
 }

 function adicionar(){

        if(isNumero(num.value) && !inLista(num.value, values)){
            values.push(Number(num.value))
            let item = document.createElement('option')
            item.text = `Valor ${num.value} adicionado`
            lista.appendChild(item)
        } else {
            alert('VALOR INVÁLIDO OU JÁ UTILIZADO')
        }

        num.value = ''
        num.focus()
 }

 function finalizar(){
    if(values.length == 0){
        alert('ADICIONE UM VALOR')
    }else {
        let total = values.length
        let maior = values[0]
        let menor = values[0]
        let soma = 0
        let media = 0
        for(let pos in values) {
            soma += values[pos]
            if(values[pos]> maior) 
                maior = values[pos]
            if(values[pos]< menor)
                menor = values[pos]
        }

        media = soma/total
        resposta.innerHTML = ''
        resposta.innerHTML += `<p> Ao todo, temos ${total} números com cadastro</p>`
        resposta.innerHTML += `<p> O maior valor é ${maior}</p>`
        resposta.innerHTML += `<p> O menor valor é ${menor}</p>`
        resposta.innerHTML += `<p> Somando todos os valores o resultado foi ${soma}</p>`
        resposta.innerHTML += `<p> A média é ${media}</p>`
    }
 }
 
