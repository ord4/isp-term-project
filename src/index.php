<!DOCTYPE html>
<html lang="eng">
<head><title>MyLine</title></head>
<body>
    <form name="login_form" action="index.php" method="POST">
        <input type="text" name="username" placeholder="Username" required>
        <input type="password" name="password" placeholder="Password" required>
        <input type="submit" name="submit_creds" value="Log in">
    </form>
    <form name="registration_form" action="index.php" method="POST">
        <input type="submit" name="register" value="Register"
    </form>    

    <?php
        // Connect to a local testing database with one table 
        // with the username and password for different users
        $servername = "localhost";
        $username = "root";
        $password = "";
        $db_name = "user_testing";

        $conn = new mysqli($servername, $username, $password, $db_name);

        if($conn->connect_error) {
            die("Connection failed. ". $conn->connect_error);
        }

        // Get the credentials from the form
        if (isset($_POST['submit_creds'])) {
            $user_username = $_POST['username'];
            $user_password = $_POST['password'];

            $query_str = "SELECT * FROM user WHERE username = '$user_username' AND password = '$user_password'";
            $result = mysqli_query($conn, $query_str);

            if (!$result) {
                // The credentials did not match
                $login_error_msg = "The entered username and/or password was incorrect.";
                echo "<script type='text/javascript'>alert('$login_error_msg');</script>";
            }
            else {
                // Proper credentials, send them to the editor
                header("Location: http://localhost/testing/isp-term-project/src/views/editor.html");                
            }
        }
        if (isset($_POST['register'])) {
            print("<p>sign me up bro</p?");
            header("Location: http://localhost/testing/isp-term-project/src/views/signup.html");
        }
    ?>
</body>
</html>
