// Função 1 : Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string .
// Exemplo:
// String determinada: "Tryber x aqui!"
// Parâmetro: "Bebeto"
// Retorno: "Tryber Bebeto aqui!"
// Um array com escopo global, que é o escopo do arquivo JS , nesse caso, contendo cinco strings com suas principais skills .

// Só um x

const newString = 'Tryber x aqui'
const word = (string) => (newString.replace('x', string));
console.log(word('bebeto'));

// Array

const array = ['Javascript', 'Matlab', 'Resiliência', 'Redux', 'Ônix']
for (let index = 0; index < array.length; index += 1) {
    console.log(array[index])
    const substitute = (striing) => (array[index].replace('x', striing));

    console.log(substitute('bebeto'));
}





// Função 2 : Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string .
// Exemplo: "Tryber x aqui! Minhas cinco principais habilidades são:
// JavaScript;
// HTML; ... #goTrybe".