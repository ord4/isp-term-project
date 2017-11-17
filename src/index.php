<!DOCTYPE html>
<html lang="eng">
<head><title>MyLine</title></head>
<body>
    <form id="login_form">
        <input type="text" id="username" placeholder="Username" required>
        <input type="password" id="password" placeholder="Password" required>
        <button type="button" id="submit_creds">Submit</button>
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
    ?>
</body>
</html>