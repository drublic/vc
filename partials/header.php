<?php
	$dev = $_SERVER['HTTP_HOST'] == "drublic.de";

	function base_url () {
		if ($dev) {
			return "http://drublic.de/";
		} else {
			return "http://localhost/vc/dist/";
		}
	}
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">

	<title>drublic &mdash; State of the Art Front-end Development - Hans
			Christian Reinl, Freiburg – HTML5 Boilerplate, Working Draft, TYPO3</title>

	<!--
		     _            _     _ _
		  __| |_ __ _   _| |__ | (_) ___
		 / _` | '__| | | | '_ \| | |/ __|
		| (_| | |  | |_| | |_) | | | (__
		 \__,_|_|   \__,_|_.__/|_|_|\___|

		Feel free to view and copy my source-code if you want to.
		Contact me if you have questions: info@drublic.de

		Thanks for visiting,
		Hans
	-->

	<!-- Who did this page -->
	<link type="text/plain" rel="author" href="/humans.txt">
	<meta name="author" content="Hans Christian Reinl">

	<!-- The Feed -->
	<link rel="alternate" type="application/rss+xml" title="drublic"
			href="http://feeds.feedburner.com/drublic">

	<meta name="viewport" content="width=device-width, initial-scale=1.0">

	<link rel="stylesheet" href="<?php print base_url(); ?>css/main.css">

	<!-- Meta-Tagging -->
	<meta name="description" content="drublic - Hans Christian Reinl - Front-end
			Development on the edge.">
	<meta name="keywords" content="Hans Christian Reinl,
			CSS,
			JavaScript,
			HTML5,
			drublic,
			Front-end,
			Development,
			HTML5 Boilerplate,
			Working Draft,
			TYPO3,
			Webdesign,
			Freiburg,
			Flipthemes">
	<meta name="application-name" content="drublic">

	<link rel="canonical" href="<?php print base_url(); ?>">
	<link rel="index" title="drublic - State of the Art Webdesign -
			HTML, CSS, JavaScript – Hans Christian Reinl"
			href="<?php print base_url(); ?>">

	<!--[if lt IE9]>
		<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]-->

</head>

<body>

	<header class="site-header">
		<nav class="site-navigation" role="navigation">
			<a href="#content" class="visuallyhidden">Skip to Content</a>

			<a href="#!" class="navigation-target" id="navigation"></a>
			<ul>
				<li class="site-logo"><a href="<?php print base_url(); ?>" title="Go to the home page">∆</a></li>
				<li><a href="<?php print base_url(); ?>resume/" title="My official résumé">Résumé</a></li>
				<li><a href="<?php print base_url(); ?>blog/" title="Get some cutting edge goodness">Blog</a></li>
				<li><a href="<?php print base_url(); ?>#work" title="View some of the work I do">Work</a></li>
				<li><a href="<?php print base_url(); ?>#hire-me" title="I do client work and propably would love to work with you">Hire me</a></li>
				<li><a href="<?php print base_url(); ?>#contact" title="Contact me if you have any questions">Contact</a></li>
			</ul>

			<a href="#navigation" class="navigation-toggle">☰</a>
		</nav>
	</header>
