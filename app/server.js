console.log("starting node.js script...")

var options = {
    appkeyFile: '/data/spotify_appkeyFile.key',
    cacheFolder: 'cache',
    settingsFolder: 'settings'
};
var spotify = require('spotify')(options);

var ready = function(err) {
    if(err) {
        console.log('Login failed', err);
    } else {
        console.log('node-spotify is ready to exeute more code!');
        //your apps functionality should start here
    }
};
spotify.on({
    ready: ready
};
