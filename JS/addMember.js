

document.getElementById("add").addEventListener("click",add);
function add()
{
    
  var name= document.getElementById("fname").value;
  var email=document.getElementById("email").value;
  var phn=document.getElementById("phn").value;
  var dept=document.getElementById("dept").value;
 
  
  if(name=="" || email=="" || phn=="" || dept=="")
  {
   alert("Invalid Entry");
  }
  else
  {
   var url="../php/addMember.php";
    
  var queryString="name=" + name + "&email=" + email + "&phn=" + phn + "&dept=" + dept ;
  
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var myArray=JSON.parse(this.responseText);
      var msg=myArray['response'];
      console.log(msg);
      if(msg=="Added")
      {
       alert("Member Added");
       window.location.href="../HTML/addMember.html";
      }
      else{
        
          alert(msg);
        
      }
    }
  };
  
  xhttp.open("POST",url, true);
 
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send(queryString);
  
  }
}