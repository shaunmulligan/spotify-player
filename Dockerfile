# Use base image for device arch with node installed
#FROM resin/raspberrypi-node:0.10.43
FROM resin/raspberrypi-node

RUN wget -q -O - https://apt.mopidy.com/mopidy.gpg | sudo apt-key add -
RUN sudo wget -q -O /etc/apt/sources.list.d/mopidy.list https://apt.mopidy.com/jessie.list
RUN apt-get update && apt-get install libasound2-dev libspotify-dev

# create src dir
RUN mkdir -p /usr/src/app/

# set as WORKDIR
WORKDIR /usr/src/app

# Only package.json and pre-install script here for caching purposes
COPY package.json ./

#install node dependencies
RUN JOBS=MAX npm install --unsafe-perm --production && npm cache clean

# Copy all of files here for caching purposes
COPY /app ./

# npm start will run server.js by default
CMD ["./start.sh"]
