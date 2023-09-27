// geração do valor aleatório
var y = Math.floor(Math.random() * 10 + 1);

// contagem de tentativas
function guess(){
    var x = document.getElementById("guessField").value;
    if(x == y){
        alert("PARABÉNS!!!"+playername+",você acertou em"
        +guess+"tentativa(s)!");
    }else if(x > y){
        guess++;
        alert("Opa, resposta errada! tente um número maior.Código de erro:ch55wy.")
    }
    else{
        guess++;
        alert("Opa, resposta errada! tente um número maior.Código de erro:jjdhy663j.")
        
    }
}
// até acerto 
function submit(){
}   
  
// função para o número enviado pelo usuário
function playAgain(){
    y = Math.floor(Math.random() * 10 + 1)
}

