function tabuada(){
    let num = window.document.getElementById('txtn')
    let tab = window.document.getElementById('seltab')

    if(num.value.length == 0 ){
        window.alert('Digite um numero')
    }else {
        let n =Number(num.value)
        let c = 1
        tab.innerHTML = ''

        while( c <= 10){
            let item = window.document.createElement('option')
            item.text= `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
    }
}