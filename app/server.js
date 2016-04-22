console.log("starting node.js script...")

var username = process.env.SPOT_USER
var pass = process.env.SPOT_PASS

var options = {
    appkeyFile: '/data/spotify_appkey.key',
    cacheFolder: 'cache',
    settingsFolder: 'settings'
}
var spotify = require('node-spotify')(options);

spotify.ready(function() {
  console.log('Starting tests');
  function printTrack(track) {
    console.log(track);
  }
  function waitForTrack(playlist) {
    var track = playlist.getTracks(0);
    console.log('Track is loaded: ' + track.isLoaded);
    spotify.waitForLoaded([track], printTrack);
  }
  var playlist = spotify.playlistContainer.getPlaylist(14);
  spotify.waitForLoaded([playlist], waitForTrack);

});

spotify.login(username, pass, false, false);
