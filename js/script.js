var Jugador1= 'Jugador 1';
var Jugador2= 'Jugador 2';


function TirarDados(){
    setTimeout(function(){
        var randomNumber1=Math.floor(Math.random() * 6) + 1;
        var randomNumber2=Math.floor(Math.random() * 6) + 1;
            
        
        document.querySelector(".img1").setAttribute("src",
        "js/dado" + randomNumber1 + ".png");

        document.querySelector(".img2").setAttribute("src",
        "js/dado" + randomNumber2 + ".png");

          if (randomNumber1 === randomNumber2){
            document.querySelector("h1").innerHTML= "Empate!";
          }  

          else if(randomNumber1 < randomNumber2){
            document.querySelector("h1").innerHTML
                =("El"+ Jugador2 + "Gana!");
          }

          else {
            document.querySelector("h1").innerHTML
                  = ("El"+ Jugador1 + "Gana!");
          }
        
    }, 250)

}

