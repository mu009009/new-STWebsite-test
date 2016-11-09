import CountUp from './vendor/countUp.js'

// require('./vendor/countUp.js');
$( document ).ready(function() {
  if($('#head2headJumbo').length > 0) {
      let fired = 0
      $(document).on('scroll', function() {
        if(fired == 0){
          if($(this).scrollTop()>=$('#head2headJumbo').position().top - 300){
            var options = {
            useEasing : true,
            useGrouping : true,
            separator : ',',
            decimal : '.',
            prefix : '',
            suffix : ''
            };
            var numAnim = new CountUp("bigcount", 0, 1440, 0, 10, options);
            var quicknumAnim = new CountUp("smallcount", 0, 35, 0, 5, options);
            numAnim.start();
            quicknumAnim.start();
            fired = 1;
          }
      }
    })
  };
});
