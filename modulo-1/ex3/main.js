var skills = 
[
  "Javascript", 
  "ReactJS", 
  "React Native"
];

function temHabilidade(skills) {
  var res = skills.indexOf('Javascript') > -1 ? true : false;
  console.log(res);
}

temHabilidade(skills);