localStorage.setItem('firstName', 'Nosdaj');

localStorage.setItem('age', 1230);

let skills = ['HTML', 'CSS', 'JS', 'React'];
let skillsJSON = JSON.stringify(skills);
localStorage.setItem('skills', skillsJSON);

skills = [
  { tech: 'HTML', level: 10 },
  { tech: 'CSS', level: 9 },
  { tech: 'JS', level: 8 },
  { tech: 'React', level: 9 },
  { tech: 'Redux', level: 10 },
  { tech: 'Node', level: 8 },
  { tech: 'MongoDB', level: 8 },
];
skillsJSON = JSON.stringify(skills);
localStorage.setItem('skills', skillsJSON);
console.log(localStorage);
