console.log("starting node.js script...")

var username = process.env.SPOT_USER
var pass = process.env.SPOT_PASS
var spotifyPlaylistLink = 'spotify:user:spotify_germany:playlist:' + process.env.PLAYLIST_ID
var options = {
    appkeyFile: '/data/spotify_appkey.key',
    cacheFolder: 'cache',
    settingsFolder: 'settings'
}
var spotify = require('spotify')(options);

var ready = function(err) {
    if(err) {
        console.log('Login failed', err);
    } else {
        console.log('node-spotify is ready to exeute more code!');
				var playlist = spotify.createFromLink(spotifyPlaylistLink);
				function printTrack(track) {
				    //At this point the track will be loaded
						spotify.player.play(track);
						console.log('Now playing: ' + track.name);
				}
				function waitForTrack(playlist) {
				    //At this point the playlist will be loaded
				    var track = playlist.getTracks()[1];
				    console.log('Track is loaded: ' + track.isLoaded);
				    spotify.waitForLoaded([track], printTrack);
				}
				spotify.waitForLoaded([playlist], waitForTrack);
		}
}

spotify.login(username, pass, false, false);
spotify.player.on({
    endOfTrack: function(){
			console.log('Song has ended!')
		}
});
spotify.on({
    ready: ready
});
