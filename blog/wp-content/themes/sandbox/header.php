<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" <?php language_attributes() ?>>
<head profile="http://gmpg.org/xfn/11">
	<title><?php if (function_exists('seo_title_tag')) { seo_title_tag(); } else { bloginfo('name'); wp_title();} ?></title>
	<meta http-equiv="content-type" content="<?php bloginfo('html_type') ?>; charset=<?php bloginfo('charset') ?>" />
	<?php if((is_home() && ($paged > 1 )) || is_date()) {echo '<meta name="robots" content="noindex, follow, noarchive" />';} ?>
	<link rel="stylesheet" type="text/css" href="<?php bloginfo('stylesheet_url') ?>" />
<?php wp_head() // For plugins ?>

	<link rel="alternate" type="application/rss+xml" href="<?php bloginfo('rss2_url') ?>" title="<?php printf( __( '%s latest posts', 'sandbox' ), wp_specialchars( get_bloginfo('name'), 1 ) ) ?>" />
	<link rel="alternate" type="application/rss+xml" href="<?php bloginfo('comments_rss2_url') ?>" title="<?php printf( __( '%s latest comments', 'sandbox' ), wp_specialchars( get_bloginfo('name'), 1 ) ) ?>" />
	<link rel="pingback" href="<?php bloginfo('pingback_url') ?>" />

<?php include("http://" . $_SERVER['SERVER_NAME'] . "/inc/header_sprockets.php"); ?>

<br /><br />

</div>
<div class="<?php sandbox_body_class() ?>">

<div id="wrapper" class="hfeed">
<div style="padding : 20px; background : #303030;">	
	<a href="/blog/"><img src="<?php bloginfo('template_directory') ?>/images/home.gif" width="157" height="61" alt="Sprockets" style="float : left;" /></a>
	<div style="margin-left : 200px; color : #7B7C7F; font-size : 14px;">
		Think of our blog as a window where you can see what's new with us, our clients and the demand creation world we operate in. Enjoy our tales. Be sure to share yours. 
	</div>
	<div style="clear : both;"></div></div><img src="<?php bloginfo('template_directory') ?>/images/shadow.png" width="968" height="11" alt="" />
