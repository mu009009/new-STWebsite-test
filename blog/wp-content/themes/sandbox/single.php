<?php get_header() ?>

	<div id="container">
		<div id="content">

<?php include("post_layout.php"); ?>
<?php the_post() ?>

<?php showPost($authordata, $attachment); ?>

			<div id="nav-below" class="navigation">
				<div class="nav-previous"><?php previous_post_link( '%link', '<span class="meta-nav">&laquo;</span> %title' ) ?></div>
				<div class="nav-next"><?php next_post_link( '%link', '%title <span class="meta-nav">&raquo;</span>' ) ?></div>
			</div>

			<div style="margin : 0px 30px;">
				<?php comments_template() ?>
			</div>

		</div><!-- #content -->
	</div><!-- #container -->

<?php get_sidebar() ?>
<?php get_footer() ?>