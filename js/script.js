var arrayPessoas = [];

function salvarPessoa_naLista(){

if(localStorage.meuArrayPessoas){
  arrayPessoas = JSON.parse(localStorage.getItem("meuArrayPessoas"));
}

  let pessoa = document.getElementById("formulario_nova_pessoa").value;
  arrayPessoas.push(pessoa);
  document.getElementById("formulario_nova_pessoa").value = "";
  localStorage.setItem("meuArrayPessoas", JSON.stringify(arrayPessoas));

}

function sortear(){
  
  
  let resultH2 = document.getElementById("mostra-pessoa_sorteada_ou_lista_pessoas");
  resultH2.innerHTML = "";

  if(localStorage.meuArrayPessoas){
    arrayPessoas = JSON.parse(localStorage.getItem("meuArrayPessoas"));
  }

  let numPessoas = arrayPessoas.length;

  let numero_sorteado = Math.floor(Math.random() * numPessoas);

  resultH2.style.fontWeight = "bold";
  resultH2.style.fontSize = "22px"
  resultH2.style.lineHeight = "70px";
  
  resultH2.innerHTML = arrayPessoas[numero_sorteado];
  //document.getElementById("mostra-pessoa_sorteada_ou_lista_pessoas").innerHTML = arrayPessoas[numero_sorteado];

}

function cleanList() {
  arrayPessoas = [];
  localStorage.setItem("meuArrayPessoas", JSON.stringify(arrayPessoas));
  document.getElementById("formulario_nova_pessoa").value = "";
  //let textArea = document.createElement("textarea").value = "";
  //let resultDiv = document.getElementById("mostra-pessoa_sorteada_ou_lista_pessoas");
  
}

function mostraListaPessoas(){

  let resultDiv = document.getElementById("mostra-pessoa_sorteada_ou_lista_pessoas");
  resultDiv.innerHTML = "";

  if(localStorage.meuArrayPessoas){
    arrayPessoas = JSON.parse(localStorage.getItem("meuArrayPessoas"));
  }

  let textArea = document.createElement("textarea");
  textArea.style.width = "95%";
  textArea.style.height = "100%";
  textArea.style.borderRadius = "10px";
  textArea.style.border = "none";
  textArea.style.paddingLeft = "5px";
  textArea.style.fontSize = "16px";
  for(var i in arrayPessoas){
    textArea.innerHTML = arrayPessoas[i] +"\n"+textArea.innerHTML;
    resultDiv.append(textArea);
  }

}