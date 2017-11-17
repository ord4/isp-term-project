<!DOCTYPE html>
<html lang="eng">
<head><title>MyLine</title></head>
<body>
    <form id="login_form">
        <input type="text" id="username" placeholder="Username" required>
        <input type="password" id="password" placeholder="Password" required>
        <input type="submit" name="submit_creds" value="Log in">
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
            print("<p>Inside post method?</p>");
            $user_username = $_POST['username'];
            $user_password = $_POST['password'];

            $query_str = "SELECT * FROM user WHERE username=$user_username AND password=$user_password";
            $result = mysqli_query($conn, $query_str);

            if ($result) {
                print("<p>Matched the query");
            }
        }
    ?>
</body>
</html>