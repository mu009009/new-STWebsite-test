$( document ).ready(function() {
  if($('.jobTrigger').length > 0) {
    $( ".jobTrigger" ).click(function() {
      $( this ).toggleClass( "wide", "add" );
      console.log("hello friend");
    });
  };
});
