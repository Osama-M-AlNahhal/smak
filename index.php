<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="style/global.css">
	<link rel="stylesheet" href="style/typography.css">
	<link rel="stylesheet" href="style/elements.css">
	<link rel="stylesheet" href="style/mobile.css">
	<link rel="stylesheet" href="style/tablet.css">
	<link rel="stylesheet" href="style/desktop.css">
	<link rel="stylesheet" href="style/larger-screens.css">
	<link rel="stylesheet" href="style/animate.css">
	<link rel="stylesheet" href="style/animate.css">
	<link rel="stylesheet" href="style/gradientFade.css">
	<link rel="stylesheet" href="style/wow-control.css">
	<title>Smak</title>
</head>
<body dir="ltr">
	
	<?php require_once 'php/panels.php'; ?>
	<?php require_once 'php/navbar.php'; ?>
	<?php require_once 'php/hero.php'; ?>
	<?php require_once 'php/services.php'; ?>
	<?php require_once 'php/how.php'; ?>
	<?php require_once 'php/work.php'; ?>
	<?php require_once 'php/likeOurPortfolio.php'; ?>
	<?php require_once 'php/numbers.php'; ?>
	<?php require_once 'php/about.php'; ?>
	<?php require_once 'php/team.php'; ?>
	<?php require_once 'php/skills.php'; ?>
	<?php require_once 'php/clients.php'; ?>
	<?php require_once 'php/testimonials.php'; ?>
	<?php require_once 'php/contact.php'; ?>
	<?php require_once 'php/form.php'; ?>
	<?php require_once 'php/footer.php'; ?>


	<script src="script/jquery-3.6.1.min.js"></script>
	
	<script src="script/app.js"></script>
	
	<script src="script/wow.min.js"></script>
    <script>
		let wow = new WOW(
		{
			boxClass:     'wow',      // default
			animateClass: 'animated', // default
			offset:       10,          // default
			mobile:       true,       // default
			live:         true        // default
		});
		wow.init();
	</script>

</body>
</html>