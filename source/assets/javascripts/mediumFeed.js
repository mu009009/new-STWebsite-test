require('jquery-rss');

$("#rss-feeds").rss("http://medium.com/feed/technekes",
	{
		limit: 6,
		layoutTemplate: "<div class='row feed-container'>{entries}</div>",
		entryTemplate: '<div class="col-xs-6 feed-item"><a target="_blank" href="{url}"><div class="post-image-container">{teaserImage}</div><div class="post-title">{title}</div><div class="post-body">{shortBodyPlain}...</div></a></div>'
	}
);
