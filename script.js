 function clique(){
    let numero = parseFloat(document.getElementById("numero").value);
   

  if (isNaN(numero)) {
    alert ("Por favor, insira um número válido.");

  } else if (numero > 0) {
     console.log("O número é positivo.");
     exibir("O número é positivo.");
    } 
    
    else if (numero < 0) {
     console.log("O número é negativo.");
    exibir ("O número é negativo.");
  }
  
   else if (numero === 0){
    console.log ("O número é zero.");
    exibir ("O número é zero.");
  }  
}
const exibir = (mensagem) => {
   document.getElementById("total").innerHTML = mensagem;
}
