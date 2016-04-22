console.log("starting node.js script...")

var username = process.env.SPOT_USER
var pass = process.env.SPOT_PASS

var options = {
    appkeyFile: '/data/spotify_appkey.key',
    cacheFolder: 'cache',
    settingsFolder: 'settings'
}
var spotify = require('node-spotify')(options);

var ready = function(err) {
    if(err) {
        console.log('Login failed', err);
    } else {
        console.log('node-spotify is ready to exeute more code!');
        //your apps functionality should start here
				function printPlaylist(playlist) {
			    console.log(playlist.name + ' is now loaded.');
			  }
			  var playlists = spotify.playlistContainer.getPlaylists();
			  spotify.waitForLoaded(playlists, printPlaylist);
}

spotify.on({
    ready: ready
})

spotify.login(username, pass, false, false);
