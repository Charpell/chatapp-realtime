# chatapp-realtime
This create a basic chat application using Socket.io, apopular Javascript libary. 
Normally, writing a chat application with popular web applications stacks like LAMP (PHP) has traditionally been very hard. 
It involves polling the server for changes, keeping track of timestamps, and it’s a lot slower than it should be. 
Sockets have traditionally been the solution around which most realtime chat systems are architected, providing a bi-directional communication channel between a client and a server. 
This means that the server can push messages to clients. Whenever you write a chat message, the idea is that the server will get it and push it to all other connected clients.

1 
Installation
Install express and socket dependencies using npm

npm install --save express
npm install --save socket.io

2 
Internet is needed to render the bootstrap scripts

3 
Contributor are needed to improv e the code in the following areas:
      Broadcast a message to connected users when someone connects or disconnects
      Add support for nicknames
      Don’t send the same message to the user that sent it himself. Instead, append the message directly as soon as he presses enter.
      Add “{user} is typing” functionality
      Show who’s online
      Add private messaging
      Share your improvements!
