var am=document.getElementById("am");
var ib=document.getElementById("ib");
var inv=document.getElementById("inv");
var ibl=document.getElementById("ibl");
am.addEventListener('click',()=>
{
 window.location.href="HTML/addMember.html";
})
ib.addEventListener('click',()=>
{
 window.location.href="HTML/issueBook.html";
})
inv.addEventListener('click',()=>
{
 window.location.href="HTML/inventory.html";
})
ibl.addEventListener('click',()=>
{
 window.location.href="HTML/issuedBookList.html";
})