var names = ['Luan', 'Healaine', 'Flamengo'];
var listElement = document.getElementById('list');

function criaItem(valor) {
  var itemElement = document.createElement('li');
  itemElement.innerHTML = valor;
  listElement.appendChild(itemElement);
}

function listaUsuario() {
  for(var i = 0; i < names.length; i++) {
    criaItem(names[i]);
  }
}

listaUsuario();

function adicionar(){
  var newName = document.querySelector('[name=name]').value;
  if (newName != ''){
    names.push(newName);
    criaItem(newName);
    document.querySelector('[name=name]').value = '';
  } else {
    alert('nome inválido');
  }
}