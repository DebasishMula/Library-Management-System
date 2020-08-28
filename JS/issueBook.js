

document.getElementById("add").addEventListener("click",add);
function add()
{
    
  var bid= document.getElementById("bid").value;
  var phn=document.getElementById("phn").value;
  var date=document.getElementById("date").value;
  
  if(bid=="" ||  phn=="" || date=="")
  {
   alert("Invalid Entry");
  }
  else
  {
   var url="../php/issueBook.php";
    
  var queryString="bid=" + bid + "&phn=" + phn + "&date=" + date  ;
  
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var myArray=JSON.parse(this.responseText);
      var msg=myArray['response'];
      console.log(msg);
      if(msg=="Added")
      {
       alert("Book has Been Issued");
       window.location.href="../HTML/issueBook.html";
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