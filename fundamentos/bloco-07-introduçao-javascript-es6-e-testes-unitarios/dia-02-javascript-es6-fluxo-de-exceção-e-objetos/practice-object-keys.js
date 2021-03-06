const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

// Tente criar uma função que exiba as habilidades do objeto student . Cada habilidade deve ser exibida no formato "Nome da habilidade, Nível: valor da chave referente à habilidade". 

// // itera graciosamente através de chave-valor (key-value)
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/entries

for (var [key, value] of Object.entries(student1)) {
    console.log(key + ', Nível: ' + value); 
}



// const student1 = {
//     Html: 'Muito Bom',
//     Css: 'Bom',
//     JavaScript: 'Ótimo',
//     SoftSkills: 'Ótimo',
//   };
  
//   const student2 = {
//     Html: 'Bom',
//     Css: 'Ótimo',
//     JavaScript: 'Ruim',
//     SoftSkills: 'Ótimo',
//     Git: 'Bom', // chave adicionada
//   };
  
//   const listSkills = (student) => {
//     const arrayOfSkills = Object.keys(student);
//     for (const index in arrayOfSkills) {
//       console.log(`${arrayOfSkills[index]}, Nível: ${student[arrayOfSkills[index]]}`);
//     }
//   };
  
//   console.log('Estudante 1');
//   listSkills(student1);
  
//   console.log('Estudante 2');
//   listSkills(student2);