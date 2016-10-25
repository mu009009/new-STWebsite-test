// import Particles from 'particles.js/particles.js';
import Particles from './vendor/particles.js'

if ($('#particles-js').length > 0) {
  particlesJS('particles-js',
    {
      "particles": {
        "number": {
          "value": 80,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": ['#ccc', '#000'] // not being used, but must be present
        },
        "shape": {
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          },
          "type": [
            "image",
            "image",
            "image",
            "image",
            "image",
            "image",
            "image",
            "image",
            "image",
            "image",
            "image",
            "image",
            "image",
            "image",
            "image",
            "image",
            "image",
            "image",
            "image",
            "image",
            "image",
            "image",
            "image",
            "image",
            "image",
            "image",
            "image",
            "image",
            "image",
            "image",
            "image",
            "image",
            "image",
            "image",
            "image",
            "image"
          ],
          "image": {
            "src_list": [
              "../assets/images/data_connectors/db2.svg",
              "../assets/images/data_connectors/icon_google.svg",
              "../assets/images/data_connectors/icon_survey_monkey.svg",
              "../assets/images/data_connectors/domain_lock.svg",
              "../assets/images/data_connectors/icon_google_analytics.svg",
              "../assets/images/data_connectors/icon_twitter.svg",
              "../assets/images/data_connectors/icon_amazon.svg",
              "../assets/images/data_connectors/icon_google_play.svg",
              "../assets/images/data_connectors/icon_upload.svg",
              "../assets/images/data_connectors/icon_baidu_tieba.svg",
              "../assets/images/data_connectors/icon_home_depot.svg",
              "../assets/images/data_connectors/icon_uservoice.svg",
              "../assets/images/data_connectors/icon_best_buy.svg",
              "../assets/images/data_connectors/icon_inke.png",
              "../assets/images/data_connectors/icon_walmart.svg",
              "../assets/images/data_connectors/icon_box.svg",
              "../assets/images/data_connectors/icon_instagram.svg",
              "../assets/images/data_connectors/icon_weibo_search.svg",
              "../assets/images/data_connectors/icon_csv.svg",
              "../assets/images/data_connectors/icon_iosstore.svg",
              "../assets/images/data_connectors/icon_dropbox.svg",
              "../assets/images/data_connectors/icon_iqiyi.svg",
              "../assets/images/data_connectors/icon_yelp.svg",
              "../assets/images/data_connectors/icon_etsy.svg",
              "../assets/images/data_connectors/icon_jing_dong.svg",
              "../assets/images/data_connectors/icon_youku.svg",
              "../assets/images/data_connectors/icon_excel.svg",
              "../assets/images/data_connectors/icon_youtube.svg",
              "../assets/images/data_connectors/icon_facebook.svg",
              "../assets/images/data_connectors/icon_linkedin.svg",
              "../assets/images/data_connectors/maintan_truck.svg",
              "../assets/images/data_connectors/icon_foresee.svg",
              "../assets/images/data_connectors/icon_lowes.svg",
              "../assets/images/data_connectors/mysql.svg",
              "../assets/images/data_connectors/icon_gmail.svg",
              "../assets/images/data_connectors/icon_salesforce.svg"
            ],
            "width": 100,
            "height": 100
          }
        },
        // "opacity": {
        //   "value": 0.5,
        //   "random": false,
        //   "anim": {
        //     "enable": false,
        //     "speed": 1,
        //     "opacity_min": 0.1,
        //     "sync": false
        //   }
        // },
        "size": {
          "value": 20,
          "random": true,
          "anim": {
            "enable": true,
            "speed": 10,
            "size_min": 10,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#6a6a6a",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 6,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "repulse"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true,
      "config_demo": {
        "hide_card": false,
        "background_color": "#b61924",
        "background_image": "",
        "background_position": "50% 50%",
        "background_repeat": "no-repeat",
        "background_size": "cover"
      }
    }
  );
}
