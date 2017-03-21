var express = require('express');
var app = express();
var http = require('http').Server(app);

// use the root folder as a public asset directory
app.use(express.static(__dirname));

//initialize a new instance of socket.io by passing the http (the HTTP server) object.
var io = require('socket.io')(http);

users = [];
connections = [];

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});


//This will log out to the console the number of users connected at the moment
//Remove this code after development stage
io.on('connection', function(socket){
	connections.push(socket)
		console.log('Connected: %s socket connected', connections.length); 

	socket.on('disconnect', function(data){
		users.splice(users.indexOf(socket.username), 1);
		updateUsernames();
		connections.splice(connections.indexOf(socket), 1);
		console.log('Disconnected: %s sockets connected', connections.length);
	});
});

//Emmitting the events
//you can send and receive any events you want , with any data you want
//This will emit all message to sent message to the console
io.on('connection', function(socket){
  socket.on('chat message', function(msg){
  	io.sockets.emit('new message', {msg: msg,  user: socket.username});
    console.log('new message: ' + msg);   //Remove this code after Development stage
  });
});

//Broadcasting
//The next goal is for us to emit the event from the server to the rest of the users.
io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

//New User
io.on('connection', function(socket){
	socket.on('new user', function(data, callback){
		callback(true);
		socket.username = data;
		users.push(socket.username);
		updateUsernames();
	});
});

function updateUsernames(){
	io.sockets.emit('get users', users);
}

// listen on the connection event for incoming sockets, then log it to the console
http.listen(3000, function(){
	console.log('listening on 3000');
});