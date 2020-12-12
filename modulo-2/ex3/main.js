var listElement = document.getElementById('list');

var names = ['Luan', 'Gabriel', 'Lucas'];

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