<?php
/* We carry out verification of input data and their protection from hostile scripts */
$fname = htmlspecialchars($_POST["fname"]);
$lname = htmlspecialchars($_POST["lname"]);
$email = htmlspecialchars($_POST["email"]);
$phone = htmlspecialchars($_POST["tel"]);
$birthdate = htmlspecialchars($_POST["birthdate"]);
$insurance = htmlspecialchars($_POST["insurance"]);
$enhanced = htmlspecialchars($_POST["enhanced"]);

/* Set the e-mail address */
$to = "info@drjacobkurianpt.com";
$subject = "Form Contact Mineola - Request an Appointment";
$message = "\nFirst Name:$fname \nLast Name:$lname \nEmail:$email \nPhone:$phone \nBirthdate:$birthdate \nInsurance:$insurance \nEnhanced PT:$enhanced";
mail($to, $subject, $message, "Content-Type: text/plain; charset=utf-8 \r\n") or print "not send a message.";
?>


<?php
/* If mistakes were made when filling out the form, the following code will work: */
function check_input($data, $problem = "")
{
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  if ($problem && strlen($data) == 0) {
    show_error($problem);
  }
  return $data;
}
function show_error($myError)
{
?>
  <html>

  <body>
    <p><span style='color:red; font: 15px Arial'>Please correct the following error:</span></p>
    <?php echo $myError; {
      echo "<a href=../index.html>Go back and fill out the form correctly</a>";
    }
    ?>
  </body>

  </html>
<?php
  exit();
}
?>