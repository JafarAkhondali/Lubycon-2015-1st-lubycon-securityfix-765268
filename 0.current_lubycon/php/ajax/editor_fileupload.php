 <?php
//file upload to ajax source
    if(!file_exists("upload")) 
    {
     mkdir("upload"); //make directory
     chmod("upload", 0777); //take permition
    }

    if($_FILES['upload_file']['name'] != "")  //check file exist
    {
     $file_name = $_FILES['upload_file']['name']; //set file name
     $target = "./upload/".$file_name; //upload place

     if (move_uploaded_file($_FILES['upload_file']['tmp_name'], $target)) 
     {
      chmod("$target", 0666);
      sleep(1);
      //echo $file_name;
      //echo filesize($target)."byte";

      $file_info = array(filename => $file_name , filesize => filesize($target));
      echo json_encode($file_info);
     }
    }
//
?>