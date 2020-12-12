
var appElement = document.querySelector('#app');
var btnElement = document.querySelector('.btn');
var boxElement = document.createElement('div');

appElement.style.display = 'flex';
appElement.style.flexDirection = 'column';
appElement.style.alignItems = 'center';

btnElement.style.width = '200px';
btnElement.style.height = '50px';
btnElement.style.width = '200px';
btnElement.style.margin = '20px';
btnElement.addEventListener('click', newSquare);

boxElement.style.display = 'flex';
boxElement.style.alignItems = 'center';
boxElement.style.justifyContent = 'center';
boxElement.style.flexDirection = 'row';
boxElement.style.flexWrap = 'wrap';
appElement.appendChild(boxElement);

function newSquare() {
  var squareElement = document.createElement('div');
  squareElement.setAttribute('id', 'square');
  squareElement.style.width = '100px';
  squareElement.style.height = '100px';
  squareElement.style.backgroundColor = '#f00';
  squareElement.style.margin = '10px';
  boxElement.appendChild(squareElement);

  squareElement.addEventListener('mouseover', () => {
    squareElement.style.backgroundColor = getRandomColor();
  });
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}