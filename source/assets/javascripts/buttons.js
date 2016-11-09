$( document ).ready(function() {
  if($('.jobTrigger').length > 0) {
    $( ".jobTrigger" ).click(function() {
      $( this ).toggleClass( "wide", "add" );
      console.log("hello friend");
    });
  };
  if($('#whitePaper').length > 0) {
    $( "#whitePaper" ).click(function(event) {
      event.preventDefault();
      Intercom('showNewMessage', "Hey there, I'd like to request a White Paper!");
    });
  };
});
