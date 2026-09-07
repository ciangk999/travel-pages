(function() {
	var albums = {
		fiji: {
			title: 'Fiji',
			place: 'South Pacific / 2024',
			description: 'Island light, warm water, and fifteen frames from the South Pacific.',
			photos: [
				['images/fiji/IMG_1176.JPEG', 'Island shoreline'],
				['images/fiji/IMG_1177.JPEG', 'Blue water and open sky'],
				['images/fiji/IMG_1178.JPEG', 'A day by the reef'],
				['images/fiji/IMG_1179.JPEG', 'Palm shadows'],
				['images/fiji/IMG_1180.JPEG', 'The far side of the island'],
				['images/fiji/IMG_1181.JPEG', 'Late afternoon light'],
				['images/fiji/IMG_1183.JPEG', 'A quiet stretch of coast'],
				['images/fiji/IMG_1184.JPEG', 'Tropical green'],
				['images/fiji/IMG_1185.JPEG', 'Out on the water'],
				['images/fiji/IMG_1186.JPEG', 'Clouds over the lagoon'],
				['images/fiji/IMG_1187.JPEG', 'Island textures'],
				['images/fiji/IMG_1188.JPEG', 'Walking toward the sea'],
				['images/fiji/IMG_1189.JPEG', 'The shoreline at dusk'],
				['images/fiji/IMG_1191.JPEG', 'A final look back'],
				['images/fiji/IMG_1192.JPEG', 'Fiji, in full light']
			]
		},
		'new-zealand': {
			title: 'New Zealand',
			place: 'Aotearoa / 2024',
			description: 'Long roads, bright skies, and the quiet scale of Aotearoa.',
			photos: [
				['images/new_zealand/3faf9aed-5275-4f73-9bff-2a8dca3a7353.jpg', 'Road through the landscape'],
				['images/new_zealand/724d00a5-f4ab-476f-84db-0e93301c8cc1.jpg', 'Mountain light'],
				['images/new_zealand/A74F4EE7-F4C4-4A0E-A30A-BF79F7B98D0A.jpg', 'Aotearoa horizon'],
				['images/new_zealand/C51A87F5-F67D-4EF5-859F-F8E082F249FB.jpg', 'The road ahead'],
				['images/new_zealand/IMG_1194.JPEG', 'First light'],
				['images/new_zealand/IMG_1203.JPEG', 'A wide open valley'],
				['images/new_zealand/IMG_1204.JPEG', 'Between the ranges'],
				['images/new_zealand/IMG_1205.JPEG', 'Wind across the grass'],
				['images/new_zealand/IMG_1207.JPEG', 'Blue distance'],
				['images/new_zealand/IMG_1209.JPEG', 'A quiet bend'],
				['images/new_zealand/IMG_1210.JPEG', 'Along the coast'],
				['images/new_zealand/IMG_1211.JPEG', 'Cloud shadow'],
				['images/new_zealand/IMG_1212.JPEG', 'The southern road'],
				['images/new_zealand/IMG_1217.JPEG', 'Green country'],
				['images/new_zealand/IMG_1218.JPEG', 'Lake reflections'],
				['images/new_zealand/IMG_1219.JPEG', 'Late afternoon'],
				['images/new_zealand/IMG_1220.JPEG', 'A pass through the hills'],
				['images/new_zealand/IMG_1221.JPEG', 'Near the water'],
				['images/new_zealand/IMG_1222.JPEG', 'Open country'],
				['images/new_zealand/IMG_1223.JPEG', 'Low cloud'],
				['images/new_zealand/IMG_1224.JPEG', 'A long way south'],
				['images/new_zealand/IMG_1225.JPEG', 'Small road, big sky'],
				['images/new_zealand/IMG_1236.JPEG', 'The last range'],
				['images/new_zealand/IMG_1241.JPEG', 'A clear morning'],
				['images/new_zealand/IMG_1251.JPEG', 'End of the road']
			]
		}
	};

	var key = new URLSearchParams(window.location.search).get('album') || 'fiji';
	var album = albums[key] || albums.fiji;
	var main = document.getElementById('main');

	document.title = album.title + ' | Field Notes';
	document.getElementById('album-breadcrumb').textContent = album.place;
	document.getElementById('album-number').textContent = 'Album / ' + String(album.photos.length).padStart(2, '0') + ' frames';
	document.getElementById('album-title').textContent = album.title;
	document.getElementById('album-description').textContent = album.description;

	album.photos.forEach(function(photo, index) {
		var article = document.createElement('article');
		article.className = 'thumb';
		article.innerHTML = '<a href="' + photo[0] + '" class="image"><img src="' + photo[0] + '" alt="' + photo[1] + '" /></a><h2>' + photo[1] + '</h2><p>' + String(index + 1).padStart(2, '0') + ' / ' + album.place + '</p>';
		main.appendChild(article);
	});
})();
