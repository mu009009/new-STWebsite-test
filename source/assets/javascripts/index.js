// require('./capabilities');

var Isotope = require('isotope-layout');

var grid = new Isotope( '#gridContainer', {
	"itemSelector": ".grid-item", "masonry": { "columnWidth": 200 }  // options...
});

// require('isotope-layout/dist/isotope.pkgd.min.js');

var filterFns = {
  // show if number is greater than 50
  newMarket2: function() {
    var name = $(this).find('.name').text();
    return name.match( /ium$/ );
  }
};

// filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  // use filter function if value matches
  filterValue = filterFns[ filterValue ] || filterValue;
  $('#gridContainer').isotope({ filter: filterValue });
});

