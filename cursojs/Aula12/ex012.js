var agora = new Date()
var hora = agora.getHours()

console.log(`Agora são ${hora} horas`)
if(hora < 12){
    console.log('Bom dia')
}else if(hora <=18){
    console.log('boa tarde')
}else if (hora < 5){
    console.log('Boa noite')
}else {
    console.log('boa madrugada')
}
