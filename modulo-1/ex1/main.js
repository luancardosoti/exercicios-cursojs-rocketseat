var endereco = 
{  
  rua: "Rua dos pinheiros",  
  numero: 1293,
  bairro: "Centro",
  cidade: "São Paulo",
  uf: "SP"
};

function returnAdress(adress) {
  return `O usuário mora em ${adress.cidade} / ${adress.uf}, no bairro ${adress.bairro}, na rua "${adress.rua}" com nº ${adress.numero}`;
}

console.log(returnAdress(endereco));