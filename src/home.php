<?
    if($_SERVER["REQUEST_METHOD"] == "POST") {
        header("location: editor.html");
    }
?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">            
        <title>MyLine - Home</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.css">
            <style type="text/css">
                body{ font: 14px sans-serif; }
                .wrapper{ width: 350px; padding: 20px; }
            </style>
    </head>
    <body>
        <div class="wrapper">
            <a href="editor.html">Go to the editor.</a>
            <a href="viewer.html">Go to the viewer.</a>
    </body>
</html>