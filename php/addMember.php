<?php
include 'connection.php';
$response=array();

$name=$_POST['name'];
$email=$_POST['email'];
$phn=$_POST['phn'];
$dept=$_POST['dept'];


     //insert Member Details
    $sql7="INSERT INTO member(name, email, phn, dept)values('$name','$email','$phn','$dept')";
    if( mysqli_query($con,$sql7))
    {
     $response=array("response"=>'Added');
    }
    else
    {
     $response=array("response"=>'Something Goes Wrong');
    }
    
   
    

echo json_encode($response);
?>

