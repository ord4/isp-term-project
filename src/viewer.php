<!doctype html>
<head>
    <title>MyLine</title>

    <!-- BOOTSTRAP INCLUDES --> 
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

    <!-- JQUERY UI INCLUDES-->
    <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
    <!-- JQUERY TOUCH INCLUDES-->
    <script src="assets/js/jquery.ui.touch-punch.min.js"></script>

    <!-- NATIVE SOURCE INCLUDES -->
    <link rel="stylesheet" href="assets\css\viewer.css">
    <script src="assets\js\viewer.js"></script>
</head>

<body>
    <a href="login.php"><img id="logo" src="assets\images\myline.png"></a>

    <div class="jumbotron text-center" id="main-jumbo">
        <h1 id="timeline-title">#timeine-title</h1>
        <p id="timeline-desc">#timeline-description</p> 
    </div>

    <div class ="container-fluid">
                
        <div class="row">
            <div class="col-lg-10 col-lg-offset-1">
                <div class="well">
                    <ul id="nodes"></ul>
                </div>
            </div>
        </div>


    </div>

    <?php
        session_start();
        echo "<div id=\"source\">".$_SESSION['timeline']."</div>";
    ?>

</body>
 
</html>