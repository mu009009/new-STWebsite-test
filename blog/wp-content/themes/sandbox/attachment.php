<?php get_header() ?>

	<div id="container">
		<div id="content">
<?php include("post_layout.php"); ?>
<?php the_post() ?>

			<?php showPost($authordata, $attachment); ?>

<?php comments_template() ?>

		</div><!-- #content -->
	</div><!-- #container -->

<?php get_sidebar() ?>
<?php get_footer() ?>