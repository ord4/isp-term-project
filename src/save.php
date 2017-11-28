<html>
<head>
</head>

<body>
	<?php
        session_start();

        require_once 'config.php';

        $username = $_SESSION["username"];

	    $timeline = $_POST["timeline_write"];



		echo "<br>";

		//$query = "SELECT `id`, `username`, `password`, `timeline` FROM `users` WHERE `username`='".$username."'";
		$query = "UPDATE `users` SET `timeline`='".$timeline."'WHERE `username`='".$username."'";

        $result = $link->query($query);

        header("location: login.php");
	?>
</body>
</html>