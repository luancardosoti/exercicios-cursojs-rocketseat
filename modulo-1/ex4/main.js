function experiencia(anos) {
  var res = '';
  if (anos >= 0 && anos <= 1) {
    res = 'Iniciante';
  } else if (anos > 1 && anos <= 3){
    res = 'Intermediário';
  } else if (anos > 3 && anos <= 6){
    res = 'Avançado';
  } else if (anos >= 7) {
    res = 'Jedi Master';
  }
  console.log(res);
}

var anosEstudo = 1;
experiencia(anosEstudo);