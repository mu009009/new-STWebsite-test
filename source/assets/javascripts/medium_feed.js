require('jquery-rss');
// import matchHeight from 'jquery-match-height';

$(document).ready(function(){
  if ($('#medium-featured-post').length > 0) {
    $("#medium-featured-post").rss("http://medium.com/feed/stratifyd",
      {
        limit: 1,
        filterLimit: 1,
        // dateFormatFunction: function(date) {
        //   console.log(moment(date, ["YYYY", moment.ISO_8601]));
        //   return date;
        // },
        layoutTemplate: "<div class='container featured-post'>{entries}</div>",
        entryTemplate: `
          <div class="text-xs-center">
            <a target="_blank" href="{url}">
              <div class="header-sm">{title}</div>
              <div class="date-author">{date} by {author}</div>
              <div class="post-image-container">
                {teaserImage}
              </div>
              <div class="post-body body-copy-small">
                {shortBodyPlain}
              </div>
            </a>
          </div>`,
        ssl: true,
        filter: function(entry, tokens) {
          return tokens.index === 0
        }
        // success: function() {
        //   $('.feed-item').matchHeight({
        //     byRow: true,
        //     property: 'min-height',
        //     target: null,
        //     remove: false
        //   });
        // }
      }
    );
  }
  if ($('#medium-recent-posts').length>0) {
    $("#medium-recent-posts").rss("http://medium.com/feed/stratifyd",
      {
        limit: 10,
        filterLimit: 9,
        layoutTemplate: "<div class='row feed-container'>{entries}</div>",
        entryTemplate: '<div class="col-md-6 col-lg-4 blog-card feed-item"><a target="_blank" href="{url}" class="card"><div class="post-image-container">{teaserImage}</div><div class="card-block"><h4 class="card-title">{title}</h4><div class="post-body body-copy-small">{shortBodyPlain}</div></div></a></div>',
        ssl: true,
        filter: function(entry, tokens) {
          return tokens.index > 0
        }
        // success: function() {
        //   $('.feed-item').matchHeight({
        //     byRow: true,
        //     property: 'min-height',
        //     target: null,
        //     remove: false
        //   });
        // }
      }
    );
  }
  if ($('#medium-home-posts').length>0) {
    $('#medium-home-posts').rss('http://medium.com/feed/stratifyd',
      {
        limit: 3,
        layoutTemplate: "<div class='row feed-container'>{entries}</div>",
        entryTemplate: '<div class="col-md-6 col-lg-4 blog-card feed-item"><a target="_blank" href="{url}" class="card"><div class="post-image-container">{teaserImage}</div><div class="card-block"><h4 class="card-title">{title}</h4><div class="post-body body-copy-small">{shortBodyPlain}</div></div></a></div>',
        ssl: true,
        // success: function() {
        //   $('.feed-item').matchHeight({
        //     byRow: true,
        //     property: 'min-height',
        //     target: null,
        //     remove: false
        //   });
        // }
      }
    );
  }
});
