window.onload = function(){

    getAvengers();
  }
  
  function getAvengers(){
      var xmlHttp = new XMLHttpRequest();
      xmlHttp.open("GET","http://localhost/info2180-lab4/superheroes.php",true);
      xmlHttp.send(null)
      response = xmlHttp.responseText
      console.log(response)
      document.getElementById("srchbutton").onclick = function(){
          alert(xmlHttp.responseText)
      }}