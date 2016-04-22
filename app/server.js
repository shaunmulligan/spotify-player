console.log("starting node.js script...")

var username = process.env.SPOT_USER
var pass = process.env.SPOT_PASS
var trackIndex = parseInt(process.env.TRACK_INDEX) || 0

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
        var track = spotify.sessionUser.starredPlaylist.getTrack(0);
        spotify.player.play(track);
    }
}

spotify.on({
    ready: ready
})

spotify.login(username, pass, false, false);
