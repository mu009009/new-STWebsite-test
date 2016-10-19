import Chart from 'chart.js/dist/Chart.bundle.min.js'
import {dataConfig, analyticsConfig, visualizationConfig} from "chart.js"

$( document ).ready(function() {

  const configArray = [dataConfig, analyticsConfig, visualizationConfig]
  const divArray = $('.js-chartHeader')

  var currentChart = $($('.current').data("chart"))
  var currentConfig = $('.current').data("config")
  var visibleChart = new Chart(currentChart, configArray[currentConfig]);

  $('#next').click(function() {
    visibleChart.destroy();
    $('.current').removeClass('current').hide()
        .next().show().addClass('current');
        var currentChart = $($('.current').data("chart"))
        var currentConfig = $('.current').data("config")
        var newChart = new Chart(currentChart, configArray[currentConfig]);
    if ($('.current').hasClass('last')) {
        $('#next').attr('disabled', true);
    }
    $('#prev').attr('disabled', null);


  });

  $('#prev').click(function() {
      $('.current').removeClass('current').hide()
          .prev().show().addClass('current');
      if ($('.current').hasClass('first')) {
          $('#prev').attr('disabled', true);
      }
      $('#next').attr('disabled', null);
  });

});
