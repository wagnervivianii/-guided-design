//obtendo lista armazenada no storege e atribuindo a variável
personRaw = localStorage.getItem(('list'));
// Testando para ver se a lista está vazia
if (personRaw != null){
  // transformando a string recebido em objeto com o parse
  var listOfPeople = JSON.parse(localStorage.getItem('list'))
}
else{
  var listOfPeople = []
}

function registerData(e){
  e.preventDefault();
  listOfPeople.push({
    name: e.target.elements[0].value,
    tel: e.target.elements[1].value,
    xp: e.target.elements['xp'].value
  })
  localStorage.setItem('list', JSON.stringify(listOfPeople))
  e.target.elements[0].value = ''
  e.target.elements[1].value = ''  
};


