var puntuacion = 0;

function opcion(humano){
  parar();
  
  var resultado_texto = ["Empatas", "Ganas", "Pierdes"];
  var nombre = ["Piedra", "Papel", "Tijeras", "Lagarto", "Spock"];
 // console.log(nombre[humano]);
  
  var jugada=[
                [0,1,2,2,1],
                [2,0,1,1,2],
                [1,2,0,2,1],
                [1,2,1,0,2],
                [2,1,2,1,0]
            ];
    
  var cpu = Math.floor((Math.random()*5));
  //console.log(cpu);
  
  var resultado = jugada[cpu][humano];
  
  
  if(document.getElementsByTagName('button').ev){
    window.speechSynthesis.cancel();
  }
  var mensaje1;
 

  mensaje1 = new SpeechSynthesisUtterance("HUMANO saca " + nombre[humano]);
  window.speechSynthesis.speak(mensaje1);
  //alert("HUMANO: " + nombre[humano]);
  
  var mensaje2;
  
  mensaje2 = new SpeechSynthesisUtterance("CPU saca " + nombre[cpu]);
  window.speechSynthesis.speak(mensaje2);
//  alert("CPU: " + nombre[cpu]);
  
  var mensaje3;
  
  mensaje3 = new SpeechSynthesisUtterance(resultado_texto[resultado]);
  window.speechSynthesis.speak(mensaje3);
 
  var carita;
  
  switch(resultado){
    case 0:
      carita = "sentiment_neutral";
      navigator.vibrate([50, 250]);
      break;
    case 1:
      carita = "sentiment_very_satisfied";
      navigator.vibrate([500, 25]);
      puntuacion++;
      break;
    default:
      carita = "sentiment_very_dissatisfied ";
      navigator.vibrate([250, 500]);
      puntuacion--;
      break;         
         }
  //console.log(carita);
  
  document.getElementById('log').innerHTML ="HUMANO saca " + nombre[humano] + "</br>" + " CPU saca " + nombre[cpu] + "</br>" + resultado_texto[resultado] + '</br>' + '<i class="material-icons cara" style="font-size:3em;">' + carita + "</i>";
//  alert(resultado_texto[resultado]);
  document.getElementById('puntos').innerHTML = "PUNTOS: " + puntuacion;
 //console.log(resultado);
}
function parar(){
  window.speechSynthesis.cancel();
}