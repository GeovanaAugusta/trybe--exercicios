
// A segunda é refatorando o .then() e o .catch() usando o try e o catch :
// Note que, quando você usa o try e o catch , é executado o código inserido no escopo do try , e caso alguma parte desse código dê erro, você o trata no escopo do catch(error) .

const fetch = require('node-fetch');

const fetchJoke = async () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.value);
  } catch(error) {
    console.log(`Algo deu errado :( \n${error}`);
  }
}

fetchJoke();

// Chuck Norris can write multi-threaded applications with a single thread.