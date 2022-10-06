

function media(){

  let media, n1, n2 ;
  
  n1 = document.getElementById("numeroum").value; 
  n1= eval (n1) ;
  
  if (n1>99 || n1<0) {
          alert("1º Número Inválido " + n1);
          document.getElementById("resultado").value= '';
          document.getElementById("numeroum").value = '';
  }
  
  
  
  n2 = document.getElementById("numerodois").value;
  n2= eval (n2) ; 
  
  if (n2>99 || n2<0) {
          alert("2º Número Inválido  " + n2);
          document.getElementById("resultado").value= '';
          document.getElementById("numerodois").value = '';
  } 
  
  media = (n1 + n2)/2 ; 
  
  max = Math.max(n1 , n2);
  min = Math.min(n1 , n2);
  document.getElementById("Máximo").innerHTML = max;
  document.getElementById("Minimo").innerHTML = min;
  document.getElementById("resultado").innerHTML = media;
  }