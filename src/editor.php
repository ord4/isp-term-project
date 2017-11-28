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
    <link rel="stylesheet" href="assets\css\editor.css">
    <script src="assets\js\editor.js"></script>
</head>

<body>
    <a href="login.php"><img id="logo" src="assets\images\myline.png"></a>

    <div class="jumbotron text-center" id="main-jumbo">
        <h1 id="timeline-title"></h1>
        <p id="timeline-desc"></p> 
    </div>

    <div class ="container-fluid">
        <div class="row">
            <div class="col-lg-4 well">
                <h1>Toolbox</h1>
                <button class="btn btn-primary" onclick=editHeader()>Edit Header</button><br>
                <button class="btn btn-primary" onclick=addNode()>Add Node</button><br>
                <button class="btn btn-primary" onclick=changeTheme()>Change Theme</button><br>
                <button class="btn btn-primary" onclick=newTimeline()>New Timeline</button><br><br>

                <form action="save.php" method="post">
                <input type="text" id="source_write" name="timeline_write">
                <input type="submit" value="Save & Quit" class = "btn btn-success">
                </form>

                <!--
                <button class="btn btn-info" onclick=loadTimeline()>load json(dev)</button><br>
                <button class="btn btn-info" onclick=loadTimelineSource()>load source (dev)</button><br>
                <button class="btn btn-info" onclick=renderTimeline()>render (dev)</button><br>
                <button class="btn btn-info" onclick=peekTimeline()>peek (dev)</button><br>
            -->

                <p id="json-out"></p>
            </div>

            <div class="col-lg-8 timeline">
                <h1 id="timeline-title"></h1>
                <p id="timeline-desc"></p>
                <ul id="nodes">

                </ul>

                <div id="trash">Drag to Delete</div>
            </div>
        </div>
    </div>


    <?php
        session_start();
        echo "<div id=\"source\">".$_SESSION['timeline']."</div>";
    ?>
 
</body>
 
</html>

