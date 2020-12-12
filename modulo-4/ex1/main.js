function checaIdade(age) {
  return new Promise((resolve, reject) => {
    if(age > 18 ){
      resolve();
    } else {
      reject();
    }
  })
}
  
checaIdade(10)
  .then(function() {
    setTimeout(() => {
      console.log("Maior que 18");
    }, 2000);
  })
  .catch(function() {
    setTimeout(() => {
      console.log("Menor que 18");
    }, 2000);
  });  