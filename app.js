window.onload = function(){

    document.getElementById("button").onclick = function(){
      show_result(document.getElementById("text_Field").value)
    }
  }
  
  function show_result(str) {  
  
    if (window.XMLHttpRequest) {
      xmlhttpreq=new XMLHttpRequest();
    } else { 
      xmlhttpreq=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttpreq.onreadystatechange=function() { 
      if (this.readyState==4 && this.status==200) {
        document.getElementById("Results").innerHTML=this.responseText;
  
      }
    }
    xmlhttpreq.open("GET","http://localhost/info2180-lab4/superheroes.php"+str,true);
    xmlhttpreq.send();
  }