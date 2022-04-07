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

function drawTable() {
  //  cirando variável para acumular em uma node list, os registros em forma de pseudo array
  let currentline = [...document.querySelectorAll('table tbody .dinamic-content')];

  // usando o forEach para executar função que remove a linha do botão excluir pelo índice
  currentline.forEach((element) => {
    element.remove()
  });

  // Alimentando o index atravéz do innerHTML com os elemntos constantes no array de objetos listofpeople
  for(person in listOfPeople) {
      document.querySelector('table tbody').innerHTML +=`<tr>
      <tr class="dinamic-content" style="background-color: ${(person % 2 == 0) ? '#836FFF': '#ffffff'}; color: #000">
        <td>${listOfPeople[person].name}</td>
        <td>${listOfPeople[person].tel}</td>
        <td style="color: ${(listOfPeople[person].xp == 'true' )  ? "#006400" : "#FF0000" }; font-weight: bold; " >${listOfPeople[person].xp}<td>
          <button onclick="deleteUser(${person})"> Excluir </button>
          <a href="./Cadastro.html?person=${person}" ">Editar</a>
        </td>
      </tr>
    <br`
  }
}

function deleteUser(p){
  listOfPeople.splice(p, 1); 
  drawTable();
  localStorage.setItem('list', JSON.stringify(listOfPeople));
}

drawTable();