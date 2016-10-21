import Chart from 'chart.js/dist/Chart.bundle.min.js'
import {dataConfig, analyticsConfig, visualizationConfig} from "chart_config.js"

$( document ).ready(function() {
  if($('js-chartHeader').length > 0) {

    const configArray = [dataConfig, analyticsConfig, visualizationConfig]
    const divArray = $('.js-chartHeader')

    var currentConfig = $('.current').data("config");
    var visibleChart = new Chart($('#Chart'), configArray[currentConfig]);

    $('#next').click(function() {
      visibleChart.destroy();
      $('.current').removeClass('current').hide()
          .next().show().addClass('current');
          var currentConfig = $('.current').data("config");
          var newChart = new Chart($('#Chart'), configArray[currentConfig]);
      if ($('.current').hasClass('last')) {
          $('#next').attr('disabled', true);
      }
      $('#prev').attr('disabled', null);


    });

    $('#prev').click(function() {
        visibleChart.destroy();
        $('.current').removeClass('current').hide()
            .prev().show().addClass('current');
            var currentConfig = $('.current').data("config");
            var newChart = new Chart($('#Chart'), configArray[currentConfig]);
        if ($('.current').hasClass('first')) {
            $('#prev').attr('disabled', true);
        }
        $('#next').attr('disabled', null);
    });

  };
});
