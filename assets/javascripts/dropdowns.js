$(".dropdown-menu .dropdown-item").click(function(){
  // change the btn text
  $(this).parents(".btn-group").find('.btn').html($(this).text() + ' <span class="caret"></span>');
  $(this).parents(".btn-group").find('.btn').val($(this).data('value'));
  // change the active tab
  $(this).parents(".btn-group").find('.active').removeClass('active');
  $((".tab-content").first()).find('.tab-pane').hide();
  var target = $(this).attr("href");
  $(target).addClass('active');
});
