<?php
include 'connection.php';
$response=array();

$bid=$_POST['bid'];
$phn=$_POST['phn'];
$date=$_POST['date'];

$sql1="select count(phn) from member where phn='$phn'";
$query_result1=mysqli_query($con,$sql1);
$array=mysqli_fetch_array($query_result1);
$sql3="select count(id) from books where id='$bid'";
$query_result2=mysqli_query($con,$sql3);
$array2=mysqli_fetch_array($query_result2);
if($array[0]>0 )
{
    if($array2[0]==0)
    {
     $response=array("response"=>'Invalid Book Id');
    }
    else {
     # code...
    
     //insert Member Details
    $sql="INSERT INTO issued_book(bid,phn,date)values('$bid','$phn','$date')";
    if( mysqli_query($con,$sql))
    {
     $sql2="UPDATE `books` SET `avilablity`='0' WHERE id='$bid'";
     mysqli_query($con,$sql2);
     $response=array("response"=>'Added');
    }
    else
    {
     $response=array("response"=>'Something Goes Wrong');
    }
    }
    
}
else {
 $response=array("response"=>'The Member with this phone Number is not registered yet');
}

echo json_encode($response);
?>

