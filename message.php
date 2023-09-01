<?php

// connecting to database
$conn = mysqli_connect('localhost', "root", "erika123", "bot") or die("Database Error"); 

// getting user message through ajax
$getMesg = mysqli_real_escape_string($conn, $_POST['text']);

// checking user query to database query
$check_data = "SELECT replies FROM chatbot WHERE queries LIKE '%$getMesg%'";  
$run_query = mysqli_query($conn, $check_data) or die("Error");

// if user query matched to database query we'all show the reply otherwise it go to else statement 
if(mysqli_num_rows($run_query) > 0){

}else{
    echo "Maaf, untuk pertanyaan dan informasi lebih detail silahkan hubungi Kontak WhatsApp/ Email kami <br>Terima Kasih...";
}

?>