<?php
include 'connection.php';


$sub=$_POST['sub'];
$avail=$_POST['avail'];

$response=array();
if($sub=="Show all" & $avail=="Show all")
{
  $sql="SELECT id, book_name, dept,avilablity FROM books";
  $query_result=mysqli_query($con,$sql);


}
elseif($sub=="Show all" & $avail!="Show all")
{
  if($avail=="Yes")
  {
    $avail="1";
  }
 
  else
  {
    $avail="0";
  }
 
  $sql="SELECT id, book_name, dept,avilablity FROM books where avilablity='$avail'" ;
  $query_result=mysqli_query($con,$sql);
 
}
elseif($sub!="Show all" & $avail=="Show all")
{
  $sql="SELECT id, book_name, dept,avilablity FROM books where book_name='$sub'" ;
  $query_result=mysqli_query($con,$sql);
}
else {
  if($avail=="Yes")
  $avail="1";
  else
  $avail="0";
  $sql="SELECT id, book_name, dept,avilablity FROM books where avilablity='$avail' and book_name='$sub'" ;
  $query_result=mysqli_query($con,$sql);
}


while($data = mysqli_fetch_array($query_result))
{
  $temp=array("bid"=>$data['id'],"bname"=>$data['book_name'],"dept"=>$data['dept'],"avail"=>$data['avilablity']);  
  array_push($response,$temp);
}

echo json_encode($response);
?>
