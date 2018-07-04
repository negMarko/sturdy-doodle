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
      carita = '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAATnSURBVGhD7ZlbiJRlHMZX85SsmhWe8IjdrDdZ1oV4IYrnREvClFpZkJWs0BQkJMHDhdbFKiWIwqLhCZQWJDURCUFca8UDLqIQeGqj8kQqiqfY7ffsPLPjOPN9s7sz881c+IOH95vn/3/f9z/Dd3jn/UpeEEBjY2PXpqam3rQ9bRUvFFmGvkB70Dn0kOKTwPsHHUXf8fF91MvdC4MKoJglqF4FPgvePXQJ6ctcRH+gpw43w+dHNHtpJ3nIaGDSUiZdTXtHhQg+60t8QzsV9XdqEsQ7EyujraDdQdvSH07hTXFq/mCS6eiaZqR9grZyOMrhNkHfl9EcdEbjCY5/pOnnlNzBoPr11qPG+ERoiMNZwXAdGOsDdNVj/00zweHsYTCdMoc9+C1N5lBOYfjujL3F8/yH5jvUfjzoCQ+q83ywQ3mDeT5Bj5FYarvtUGwXBvjFxf9K09uhvMN8k9ADJD623TbouMHF65eP/J7NvDOQTqVH6G3brYMOutuI2xSf99MmCOZf6h/xd5pS2+EokQ7xW+VM2wWBEnSHOuBa1tkOh8Q17lBjq6BQymBquY/03BluOz0kv0LSv0rmeKjtgkMtq5B+1Gpb6SEhfs5ttVUUUJJWtVpf6fbax3YqBM/5C7Ttqo8Aatrk2hbZSobACCectxUKeePQIXQSfU3Xzg5lhPxhaBc6gzbT93WHAiFvtOs7bisZAp874VtbgZA2irznl8frHQ6FVC3DG2K9YvC5jqajU9KiOHlayjxFPWwnwNzjwSbbCoQc/Sl5Hi2POzglEPp+GEtPYaRTAqGvVquqcaKtBJjx83+ArUDIyfkXwH/TKYGQs8K5i20lwHyI7vpjKIyhU0i32hb4XOVwKKTqFGp+UMbh8280oaeQIO8j539vKwZeNweu2MoIuWPRz6gOLad7J4cyQr4u4p1IF/Em9KpDoZA33nXushUD4zUH6m0VJdT3ruvcbysGXi8HLtgqSqhvjOtMXubgdXSgwVZRQn1TVCf8YCsBwRtI9/ZWP5CihtoWqHrqXGsrAeYxB8tsFR3UVqUaocJWAoIbA4NFAjXWqkDat2wlwJzl4HZbgZDzBlqGvsqRPmXqlzx8WsjpifSf4Ba5qc8MTC1ZH9PqidrNdlrIqyYnpzDmGA+fFuLlztttKxWCNU6aaystxAehSlJ1UWUtzUcb+iQmJ75DMs1WKgSnOuk0TcZ1TVRQzzuuS0uQ4Ce+iibprJPzsgPXHqjloGv6zFYwJE1zsvYqu9suGNSgdwmq5zJN6LXZAsn73GmzrYLA/H3RX67lPduZIXkAuu6O5bYjham1tXlUNUDq0iETdJ6MtLWnnYDxtiOBgnUt7lTltNrabN+pTOeFHkQbrdNt5xWm07uI7Z63AQ10qH0wwJdI6M/0EsbN2+2VsfsxxxEX/yca4VB2MFA50ks5DbyfJucbvow7E+ntTPy0ye0cDKj/wdol1gTaq1zJYdbvDDzuIY0rON5Gk5/bNwOXIr2N1JpJk2m7T/9ptemU8U95HPJ7oHmoeXkgONZr2UiuMxUwHFWj5i8iOL6JatAKNBtrAtKvOxrpjUslqkK1qGVTjONrSJtqrXtI5RIm7oMWoeMoaacuDHK1w6atRT31Q5fRkUExOi0mosVoI9qNfkJ6JbsNraPYCjQStfp0e0FxU1LyP6tZqeytiRnaAAAAAElFTkSuQmCC">';
      navigator.vibrate([50, 250]);
      break;
    case 1:
      carita = '<img src="data:image/png;base64,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">';
      navigator.vibrate([500, 25]);
      puntuacion++;
      break;
    default:
      carita = '<img src="data:image/png;base64,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">';
      navigator.vibrate([250, 500]);
      puntuacion--;
      break;         
         }
  //console.log(carita);
  
  document.getElementById('log').innerHTML ="HUMANO saca " + nombre[humano] + "</br>" + " CPU saca " + nombre[cpu] + "</br>" + resultado_texto[resultado] + '</br>' + carita;
//  alert(resultado_texto[resultado]);
  document.getElementById('puntos').innerHTML = "PUNTOS: " + puntuacion;
 //console.log(resultado);
}
function parar(){
  window.speechSynthesis.cancel();
}