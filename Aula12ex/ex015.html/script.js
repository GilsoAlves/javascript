function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] verifique os dados e digite novamente!')
    }else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - (fano.value)
        var genero = ''
        
        var img =document.createElement('img')
        img.setAttribute('id' , 'foto')


        if (fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'bebe-m-250.jpg')
            }else if(idade >= 10 && idade < 21){
                //adolescente
                img.setAttribute('src', 'adolescentem-250.png')
            } else if(idade >= 21 && idade < 60){
                //adulto
                img.setAttribute('src', 'adulto-m-250.jpg')
            } else {
                // idoso
                img.setAttribute('src', 'idoso-m-250.jpg')
            }
        }else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'bebe-f-250.jpg')
            }else if(idade >= 10 && idade < 21){
                //adolescente
                img.setAttribute('src', 'adolescentef.png')
            } else if(idade >= 21 && idade < 60){
                //adulto
                img.setAttribute('src', 'adulta-f-250.jpg')
            } else {
                // idoso
                img.setAttribute('src', 'idosa-f-250.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}