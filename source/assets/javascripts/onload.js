import matchHeight from 'jquery-match-height';

$(document).ready(function(){
  window.setTimeout( () => { $('#fouc').fadeIn(1000) } , 500);

  $('.match-height').matchHeight({
    byRow: true,
    property: 'min-height',
    target: null,
    remove: false
  });
  $('.c-forms-form').parent().next().css("display", "none");
  $('.c-forms-form').parent().next().hide();
});
