import Instafeed from 'instafeed.js'

if ($('#instafeed').length>0){
	var userFeed = new Instafeed({
			target: 'instafeed',
			get: 'user',
			userId: '2317298185',
			clientId: 'd9ceeb2a8e974c9d871f28f4cd1a4bc5',
			accessToken: '2317298185.d9ceeb2.ea81a600401e462ea4cddb95793aa529',
			limit: '20',
			sortBy: 'most-recent',
			resolution: 'standard_resolution',
			template: '<a href="{{link}}" target="_blank" class="instaphoto"><img src="{{image}}" style="height: 200px"/></a>'
	});
	userFeed.run();
}
