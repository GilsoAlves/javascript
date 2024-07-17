function fatorial(n){
    let fat = 1
    for(c = n; c > 1 ; c --) {
        fat *= c
    }
    return fat
}
console.log(fatorial(5))



//fatorial de 5 = 5x4x3x2x1