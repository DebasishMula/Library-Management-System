

  loadDoc("../php/issueBookList.php");
  function loadDoc (url) 
   {
    
    var sl_no=1;
    var xmlhttp = new XMLHttpRequest();
 xmlhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
 var myArray=JSON.parse(this.responseText);
 
for(var i=0;i<myArray.length;i++)
{
     
     //making tr
  var tr=document.createElement("tr");
  tr.style.textAlign='center';

  //making td
  var td1=document.createElement('td');
  var td2=document.createElement('td');
  var td3=document.createElement('td');
  var td4=document.createElement('td');
  var td5=document.createElement('td');
  var td6=document.createElement('td');
  var td7=document.createElement('td');
  // adding style to td
  td1.style.border='1px solid rgb(0, 90, 235)';
  td2.style.border='1px solid rgb(0, 90, 235)';
   td3.style.border='1px solid rgb(0, 90, 235)';
   td4.style.border='1px solid rgb(0, 90, 235)';
   td5.style.border='1px solid rgb(0, 90, 235)';
   td6.style.border='1px solid rgb(0, 90, 235)';
   td7.style.border='1px solid rgb(0, 90, 235)';
  
   //making td cell
   var cell1=document.createTextNode(sl_no);
   var cell2=document.createTextNode(myArray[i].bid);
   var cell3=document.createTextNode(myArray[i].date);
   var cell4=document.createTextNode(myArray[i].mname);
   var cell5=document.createTextNode(myArray[i].dept);
   var cell6=document.createTextNode(myArray[i].email);
   var cell7=document.createTextNode(myArray[i].phn);
   
   td1.appendChild(cell1);
   td2.appendChild(cell2);
   td3.appendChild(cell3);
   td4.appendChild(cell4);
   td5.appendChild(cell5);
   td6.appendChild(cell6);
   td7.appendChild(cell7);
   
   tr.appendChild(td1);
   tr.appendChild(td2);
   tr.appendChild(td3);
   tr.appendChild(td4);
   tr.appendChild(td5);
   tr.appendChild(td6);
   tr.appendChild(td7);
   document.getElementById("tb").appendChild(tr);
   sl_no++;
  }

}
 
 };
 xmlhttp.open("GET",url,true);
 

 xmlhttp.send();
   }


