let num = window.document.querySelector('input#fnum')
let lista = window.document.querySelector('select#flista')
let res = window.document.querySelector('div#res')

let valores = []

function isNumero(n){
    if(Number(n) >=1 && Number(n) <=100){
        return true
    } else {
        return false
    }
}
function inLista(n, l){
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }

}
function adcionar(){
  if(isNumero(num.value) && !inLista(num.value, valores)){
    valores.push(Number(num.value ))
    let item = window.document.createElement('option')
    item.text = `valor ${num.value} adiconado`
    lista.appendChild(item)
    res.innerHTML = ''
  } else {
    window.alert('Valor Invalido ou já encontrado na lista')
  }
  num.value = ''
  num.focus()
}
function finalizar(){
    if(valores.length == 0){
        window.alert('Adicione valores antes de finalizar')
    }else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for(let pos in valores){
            soma += valores[pos]
            if(valores [pos] > maior)
                maior = valores[pos]
            if(valores [pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos <strong>${tot}</strong> numeros cadastrados!</p>`
        res.innerHTML += `<p>O maior valor informado foi <strong>${maior}</strong>.</p>`
        res.innerHTML += `<p>O menor valor informado foi <strong>${menor}</strong>.</p>`
        res.innerHTML += `<p>Somanto todos os valores temos <strong>${soma}</strong>.</p>`
        res.innerHTML += `<p>A média dos valores digitados é <strong>${media}</strong></p>`
    }
}