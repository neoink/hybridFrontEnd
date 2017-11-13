<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>SandBox</title>
    <link rel="stylesheet" href="./dist/css/global.css">
    <link rel="stylesheet" href="./dist/css/header/header.css">
</head>

<?php
//__Load cssModules instance
include ('cssModules.php');
$css = new CSSModules();

//__Define css modules ClassName
$global = $css->cssModules('global');
$header = $css->cssModules('header');
?>

<body>
    <section
        id="header" 
        class="<?= $css->getCSSClass($header, ['header', 'header__modifier']); ?>"
    >
        <h1>Header</h1>
        <button 
            class="<?= $css->getCSSClass($global, ['button']); ?> js-button"
        >
            Button
        </button>
    </section>
    <section id="footer" class="footer">
        <h1>Footer</h1>
        <div class="result"></div>
    </section>
    <script src="./dist/app.js"></script>
</body>

</html>