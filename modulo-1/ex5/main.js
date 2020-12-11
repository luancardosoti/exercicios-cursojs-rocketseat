var usuarios = [
  {
    nome: "Luan",
    habilidades: ["Javascript", "ReactJS", "NodeJS"]
  },
  {
    nome: "Gabriel",
    habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
  }
];

function retornaUsuario(users){
  for (const user of users) {
    var res = `O ${user.nome} possui as habilidades: ${user.habilidades.join(', ')}.`;
    console.log(res);
  }
}

retornaUsuario(usuarios);