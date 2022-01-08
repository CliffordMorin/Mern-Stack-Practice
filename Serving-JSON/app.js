const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
	res.writeHead(200, { 'Content-Type': 'application/json' });

	const person = {
		name: 'alex',
		email: 'alex@yahoo.com',
		job: 'designer',
		food: 'zaaaaaaaa'
	};

	res.end(JSON.stringify(person));
});

server.listen(3000, '127.0.0.1');
