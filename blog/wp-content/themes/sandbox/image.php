<?php get_header() ?>

	<div id="container">
		<div id="content">
<?php include("post_layout.php"); ?>
<?php the_post() ?>

			<?php showPost($authordata, 'image'); ?>

			<div id="nav-images" class="navigation">
				<div class="nav-previous"><?php previous_image_link() ?></div>
				<div class="nav-next"><?php next_image_link() ?></div>
			</div>

<?php comments_template() ?>

		</div><!-- #content -->
	</div><!-- #container -->

<?php get_sidebar() ?>
<?php get_footer() ?>