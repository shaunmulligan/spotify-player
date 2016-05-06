var Spotify = require('node-libspotify');
var appKeyPath = '/data/spotify_appkey.key';
var spotify = new Spotify({appkeyFile: appKeyPath});

var username = process.env.SPOT_USER
var pass = process.env.SPOT_PASS

spotify.login(username, pass)
  .then(function () {
    //logged in
		var track = {
		  uri: 'spotify:track:4S7YHmlWwfwArgd8LfSPud'
		};
		spotify.player.on('play', function (track) {
			/* play event */
			console.log('track playing');
		});
		spotify.player.on('pause', function () {
			/* pause event */
			console.log('track paused');
		});
		spotify.player.on('progress', function (progress) {
			/* progress event */
			console.log('current track progress: ' + progress.elapsed);
		});
		//spotify.player.play(track);
		spotify.search('resin-running')
		  .then(function (result) {
		    //matching artists, albums, tracks and playlists
				console.log(result)
		  })
		  .catch(function (err) {
		    //search error
		  });
	})
  .catch(function (err) {
    //wrong username and/or password
		console.log('wrong username or password')
  });
