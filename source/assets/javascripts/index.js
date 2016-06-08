import Bootstrap from 'bootstrap'

import Instafeed from 'instafeed.js'

    var userFeed = new Instafeed({
    target: 'instafeed',
    get: 'user',
    userId: '2317298185',
    clientId: 'd9ceeb2a8e974c9d871f28f4cd1a4bc5',
    accessToken: '2317298185.d9ceeb2.ea81a600401e462ea4cddb95793aa529',
    limit: '5',
    sortBy: 'most-recent',
    resolution: 'standard_resolution',
    template: '<div style="width:20%; display: inline-block;"><a href="{{link}}"><img src="{{image}}" style="width:100%;"/></a></div>'
  });
  userFeed.run();
