<?php function showPost($authordata, $attachment) { ?>
			<div id="post-<?php the_ID() ?>" class="<?php sandbox_post_class() ?>" style="zoom : 1;">
		
				<img src="<?php bloginfo('template_directory'); ?>/images/ribbon_left.gif" width="14" height="60" alt="" style="float : left;" />

				<div style="margin-left : 14px; background : #E2E2E2; padding : 24px 0px 10px 0px; zoom : 1;">
			
					<div class="entry-date"><?php unset($previousday); printf( __( '%1$s', 'sandbox' ), the_time('F j, Y' ) ) ?></div>
			
					<h2 class="entry-title"><a href="<?php the_permalink() ?>" title="<?php printf( __('Permalink to %s', 'sandbox'), the_title_attribute('echo=0') ) ?>" rel="bookmark"><?php the_title() ?></a></h2>
					
					<div class="entry-content">

						<?php if ($attachment) { ?>
							<div class="entry-attachment"><a href="<?php echo wp_get_attachment_url($post->ID); ?>" title="<?php echo wp_specialchars( get_the_title($post->ID), 1 ) ?>" rel="attachment"><?php echo wp_get_attachment_image( $post->ID, 'large' ); ?></a></div>
						<?php } ?>
					
						<?php the_content( __( 'Read More <span class="meta-nav">&raquo;</span>', 'sandbox' ) ) ?>
						</div>
					<div class="entry-meta" style="zoom : 1;">
						<!--<span class="author vcard"><?php printf( __( '<span>Author</span> %s', 'sandbox' ), '<a class="url fn n" href="' . get_author_link( false, $authordata->ID, $authordata->user_nicename ) . '" title="' . sprintf( __( 'View all posts by %s', 'sandbox' ), $authordata->display_name ) . '">' . get_the_author() . '</a>' ) ?></span>-->
						
						<div class="commentsBubble">
							<?php comments_popup_link( __( '0', 'sandbox' ), __( '1', 'sandbox' ), __( '%', 'sandbox' ) ) ?>	
						</div>
						<div style="clear : both;"></div>
					</div>

					<div style="clear : both;"></div>
					
				</div>
				
				
			</div><!-- .post -->
<?php } ?>