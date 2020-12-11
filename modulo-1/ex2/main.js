function pares(x, y) { 
  var par = [];
  for(var i = x+1; i < y; i++) {
    if (i % 2 === 0){
      par.push(i);
    }
  }
  console.log(par);
}

pares(11, 47);