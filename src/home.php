<?
    if($_SERVER["REQUEST_METHOD"] == "POST") {
        if (isset($_POST["editor"])) {
            header("location: editor.html");
        }
        else if (isset($_POST["viewer"])) {
            header("location: viewer.html");
        }
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
            <input type="submit" name="editor" value="Editor">
            <input type="submit" name="viewer" value="Viewer">
        </div>
    </body>
</html>