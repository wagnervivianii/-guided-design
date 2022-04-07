
//obtendo lista armazenada no storege e atribuindo a variável
let personRaw = localStorage.getItem(('list'));
// Testando para ver se a lista está vazia
if (personRaw != null){
  // transformando a string recebido em objeto com o parse
  var listOfPeople = JSON.parse(personRaw);
}
  // Caso não haja registros no localStorage, listOf people recebe []
else{
  var listOfPeople = []
}

function registerData(e){
  // Pprevent defalt impede que o formulário tenha ações padroẽs e execute o código até o fim
  e.preventDefault();
  // Analisa se id é nulo, se for, continua no else para cadastro normal, se não, entra no modo EDIÇÃO
  if(id !== null){
    listOfPeople[id] = {
    name: e.target.elements[0].value,
    tel: e.target.elements[1].value,
    xp: e.target.elements['xp'].value == 'true' ? true : false
    }
  }
  // Caso o Id seja vazio, entra no modo de CADASTRO normal
  else{
    listOfPeople.push({
      // Cadastrando usando o evento, utilizando o método TARGET
      name: e.target.elements[0].value,
      tel: e.target.elements[1].value,
      xp: e.target.elements['xp'].value == 'true' ? true : false
    })
  }
  // Armazenando o Código no localStorange, e transformando este em string com o método stringify do Json 
  localStorage.setItem('list', JSON.stringify(listOfPeople))
  // Selecionando o link home e clicando automaticamente nele para voltar a home page
  document.querySelector('.home').click()
};

// Obtendo o endereço atual da página e colocando em uma variável
var urlPrincipal = new URL(window.location.href);
// Obtendo o index da lista através da url
var id = urlPrincipal.searchParams.get('person')

// Caso o id não seja nulo, Entra no modo Edição que preencherá os campos com os valores da lista
if (id !== null){
  document.querySelector('.input_nome').value = listOfPeople[id].name;
  document.querySelector('.input_telefone').value = listOfPeople[id].tel;
  listOfPeople[id].xp == true ? document.querySelector('#xp-yes').checked = true : document.querySelector('#xp-no').checked = true;
}

