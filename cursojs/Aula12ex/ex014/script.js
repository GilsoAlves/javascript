function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

//var hora = 15

msg.innerHTML = `Agora são ${hora} horas`
if(hora >= 0 && hora < 12){
        //Bom dia
        img.src = 'manha250.jpg'
        document.body.style.background = 'red'
    }else if (hora >= 12 && hora < 18){
        //boa tarde
        img.src = 'tarde250.jpg'
        document.body.style.background = 'green'
    }else {
        //boa noite
        img.src = 'noite250.jpg'
        document.body.style.background = 'yellow'
    }



}
