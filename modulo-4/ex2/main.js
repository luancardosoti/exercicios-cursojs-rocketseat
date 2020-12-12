var divElement = document.querySelector('div#app');
var inputElement = document.querySelector('div#app input');
var btnElement = document.querySelector('div#app button');
var listElement = document.createElement('ul');
divElement.appendChild(listElement);

btnElement.onclick = function() {
  listElement.innerHTML = '';
  liElement = document.createElement('li');
  textLi = document.createTextNode('Carregando...');
  liElement.appendChild(textLi);
  listElement.appendChild(liElement);

  setTimeout(() => {
    axios.get(`https://api.github.com/users/${inputElement.value}/repos`)
      .then(response => {
        inputElement.value = '';
        listElement.innerHTML = '';
        for (const repo of response.data) {
          console.log(repo);
          var repoName = document.createTextNode(repo.name);
          var repoElement = document.createElement('li');

          repoElement.appendChild(repoName);
          listElement.appendChild(repoElement);
        }
      })
      .catch(error => {
        inputElement.value = '';
        listElement.innerHTML = ''
        
        alert('usuário inexistente');
      })
  }, 1000);
}