/* let dados = {
    nome : "marcelino",
    idade : 20,
    salario : 1.500
}

let dado = ["marcelino", 20,1.500] */

/* dado.forEach(element => {
    console.log(element)
}); */

/* let meuovo = (a,b) => {
    return a*b*seucu(a,b)
}
function seucu(a,b) {
    return a * b
}

console.log(meuovo(5,2))
 */

let fatorial = (num) => {
    if(num == 1){
        return 1
    }else{
        return num * fatorial(num-1)
    }
}

console.log(fatorial(0))