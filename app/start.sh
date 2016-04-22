#!/bin/sh

key=/data/spotify_appkey.key
if [ ! -e "key" ]; then
  echo "creating spotify app key"
  echo $THE_ENV_VAR | base64 -d > /data/spotify_appkey.key
else
    echo "Spotify Key already exists"
fi

node ./server.js
