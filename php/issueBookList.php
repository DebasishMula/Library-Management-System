<?php

include 'connection.php';
$response=array();
$sql="SELECT issued_book.bid,issued_book.date,member.name,member.email,member.phn,member.dept FROM issued_book INNER JOIN member WHERE issued_book.phn=member.phn";
  $query_result=mysqli_query($con,$sql);
  while($data = mysqli_fetch_array($query_result))
{
  $temp=array("bid"=>$data['bid'],"date"=>$data['date'],"mname"=>$data['name'],"email"=>$data['email'],"phn"=>$data['phn'],"dept"=>$data['dept']);  
  array_push($response,$temp);
}

echo json_encode($response);
?>