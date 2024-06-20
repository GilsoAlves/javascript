var agora = new Date()
var diaSem = agora.getDay()



//diaSem = 0

/*
0- Domingo
1- Segunda
2- Terça-feira
3- Quarta-feira
4- Quinta-feira
5- Sexta-feira
6- Sábado
*/
// console.log(diaSem) usado sem o switch

switch(diaSem){
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('seguda-feira')
        break
    case 2:
        console.log('terça-feira')
        break
    case 3:
        console.log('Quarta-feira')
        break
    case 4:
        console.log('Quinta-feira')
        break
    case 5:
        console.log('Sexta-feira')
        break 
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('[ERRO] dia inválido!')
        break       
}