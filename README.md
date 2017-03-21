This create a basic chat application using Socket.io, a popular Javascript libary. Normally, writing a chat application with popular web applications stacks like LAMP (PHP) has traditionally been very hard. It involves polling the server for changes, keeping track of timestamps, and it’s a lot slower than it should be. 

Sockets have traditionally been the solution around which most realtime chat systems are architected, providing a bi-directional communication channel between a client and a server. This means that the server can push messages to clients. Whenever you write a chat message, the idea is that the server will get it and push it to all other connected clients.

Instructions
When you have downloaded/cloned it into your system, install express and sockets.

npm install --save express
npm install --save socket.io