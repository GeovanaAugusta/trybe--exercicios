// Crie uma função que receba um número e retorne seu fatorial.
// Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
// Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha usando ternary operator .

// Como eu faria para inspirar como devo fazer agora

// let count = 1;
// function fatorial() {
//     for (let index = 1; index <=4; index +=1) {
//          count *= index;

//     }console.log(count)
// }
// fatorial()

// Ternary

const fatorial = N => N > 1 ? N * fatorial(N - 1) : 1;

console.log(fatorial(4))

// Outro jeito 

const fatoriall = n => {
    if (n > 1) {
        return n * fatoriall(n - 1)
    }
    return n
}

console.log(fatoriall(4))