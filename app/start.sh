#!/bin/sh

key=/data/spotify_appkey.key
if [ ! -e "key" ]; then
  echo "creating spotify app key"
  echo $APP_KEY | base64 -d > /data/spotify_appkey.key
else
    echo "Spotify Key already exists"
fi

# node ./app/server.js
node ./app/runsong.js
