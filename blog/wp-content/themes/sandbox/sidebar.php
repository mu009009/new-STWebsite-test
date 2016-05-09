	<div id="primary" class="sidebar">
		<ul class="xoxo">
			
			<li>
				<div align="center">
					<a href="/blog/feed/"><img src="<?php bloginfo('template_directory'); ?>/images/icon_feed.gif" width="39" height="39" alt=""></a>
					&nbsp;&nbsp;&nbsp;
					<a href="http://www.flickr.com/photos/technekes/"><img src="<?php bloginfo('template_directory'); ?>/images/icon_flickr.gif" width="39" height="39" alt=""></a>
				</div>
			</li>
			
			<li id="search">
				<h3><label for="s"><?php _e( 'Search', 'sandbox' ) ?></label></h3>
				<form id="searchform" class="blog-search" method="get" action="<?php bloginfo('home') ?>">
					<div style="line-height : 28px; height : 28px;">
						<input id="s" name="s" type="text" class="text" value="<?php the_search_query() ?>" size="10" tabindex="1" style="float : left;" />
						<input type="image" src="<?php bloginfo('template_directory'); ?>/images/find.gif" style="cursor : pointer; float : right;" tabindex="2" />
					</div>
				</form>
			</li>

			<li id="categories">
				<h3><?php _e( 'Categories', 'sandbox' ) ?></h3>
				<ul>
					<?php wp_list_categories('title_li=&show_count=0&hierarchical=1') ?> 
				</ul>
			</li>

			<li id="archives">
				<h3><?php _e( 'Archives', 'sandbox' ) ?></h3>
				<ul>
					<?php wp_get_archives('type=monthly') ?>
				</ul>
			</li>
			
<?php if ( !function_exists('dynamic_sidebar') || !dynamic_sidebar(1) ) : // begin primary sidebar widgets ?>
<?php endif; // end primary sidebar widgets  ?>

<?php if ( !function_exists('dynamic_sidebar') || !dynamic_sidebar(2) ) : // begin secondary sidebar widgets ?>
<?php endif; // end primary sidebar widgets  ?>

		</ul>
	</div><!-- #primary .sidebar -->


