require('jquery-rss');
import matchHeight from 'jquery-match-height';


if ($('#rss-feeds').length>0) {
	$("#rss-feeds").rss("http://medium.com/feed/technekes",
		{
			limit: 9,
			layoutTemplate: "<div class='row feed-container'>{entries}</div>",
			entryTemplate: '<div class="col-md-6 col-lg-4 col-sm-6 feed-item"><a target="_blank" href="{url}"><div class="post-image-container">{teaserImage}</div><div class="post-title highlighted-content">{title}</div><div class="post-body body-copy-small">{shortBodyPlain}...</div></a></div>',
			ssl: true,
			success: function() {
				$('.feed-item').matchHeight({
					byRow: true,
					property: 'min-height',
					target: null,
					remove: false
				});
			}
		}
	);
}
