const http = require('http');
const fs = require('fs');
//Streams are better than fs read because they return data one bit at a time instead of all at once
//utf-8 makes it so you can see the text otherwise it would just return a buffer
const readStream = fs.createReadStream(__dirname + '/read-me.txt', 'utf-8');

readStream.on('data', (chunk) => {
	console.log('you received data');
	console.log(chunk);
});
