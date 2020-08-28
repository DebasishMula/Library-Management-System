

  loadDoc("Show all","Show all");
  function loadDoc (subject,availabilty) 
   {
    //making table data null first
    document.getElementById("tb").innerHTML="";

     var url="../php/inventory.php";
     var queryString="sub=" + subject + "&avail=" + availabilty;
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
  // adding style to td
  td1.style.border='1px solid rgb(0, 90, 235)';
  td2.style.border='1px solid rgb(0, 90, 235)';
   td3.style.border='1px solid rgb(0, 90, 235)';
   td4.style.border='1px solid rgb(0, 90, 235)';
   td5.style.border='1px solid rgb(0, 90, 235)';
  
   //making td cell
   var cell1=document.createTextNode(sl_no);
   var cell2=document.createTextNode(myArray[i].bid);
   var cell3=document.createTextNode(myArray[i].bname);
   var cell4=document.createTextNode(myArray[i].dept);
   if(myArray[i].avail=='1')
   {
    var cell5=document.createTextNode("Yes");
   }
   else
   {
    var cell5=document.createTextNode("No");
   }
   td1.appendChild(cell1);
   td2.appendChild(cell2);
   td3.appendChild(cell3);
   td4.appendChild(cell4);
   td5.appendChild(cell5);
   
   tr.appendChild(td1);
   tr.appendChild(td2);
   tr.appendChild(td3);
   tr.appendChild(td4);
   tr.appendChild(td5);
   document.getElementById("tb").appendChild(tr);
   sl_no++;
  }

}
 
 };
 xmlhttp.open("POST",url,true);
 
 xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
 xmlhttp.send(queryString);
   }

// Adding event listner when each subject button to be clicked
var btnContainer1 = document.getElementById("subject-filter");
var btns1 = btnContainer1.getElementsByClassName("btn");
for (var i = 0; i < btns1.length; i++) {
  btns1[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");

    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    var sub=this.innerText;
    var avail=current[1].innerText;
    loadDoc(sub,avail);
  });
 }
  // Adding event listner when each available button to be clicked
var btnContainer2 = document.getElementById("avilable-filter");
var btns2 = btnContainer2.getElementsByClassName("btn");
for (var i = 0; i < btns2.length; i++) {
  btns2[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");

    current[1].className = current[0].className.replace(" active", "");
    this.className += " active";
    var avail=this.innerText;
    var sub=current[0].innerText;
    loadDoc(sub,avail);
  });
 }

