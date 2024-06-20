let num = [5,8,2,9,3]
num.push(1)
num.sort()// coloca os numeros em ordem  mas tem que ficar no cabeçalho

console.log(num)
//num [5]= 8
//num.push(10)
//num.length
console.log(`O vetor tem ${num.length} posicoes`)
console.log(`O primeiro vetor é ${num[0]}`)

let pos = num.indexOf(1)
if(pos == -1 ){
    console.log('valor não encontrado')
}else {
    console.log(`O valor  esta na posicao ${pos}`)

}